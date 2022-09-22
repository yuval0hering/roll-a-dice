import React, {useMemo, useState} from 'react';
import { TextField, Button } from '@mui/material';
import ResultTable from "./ResultTable";
import { sumBy } from 'lodash';
import {Root, Title, DiceConfigureWrap, CurrentResultWrap, ResultWrap, Statistics, RowConfigureWrap} from "./styles";
import {Result} from "./types";

const RollADice = () =>{
    const [numberOfSides, setNumberOfSides] = useState(6);
    const prevDiceResults = JSON.parse(localStorage["diceResults"] || '[]') as Array<Result>;
    const [currentDiceResult, setCurrentDiceResult] = useState<number>(0);

    const rollsSum = useMemo(()=> sumBy(prevDiceResults, 'result'),[prevDiceResults]);
    const rollsAvg = useMemo(()=> {
        if(rollsSum) return rollsSum / prevDiceResults.length;
        else return 0;
    },[prevDiceResults]);

    const onClick = () =>{
        const result = Math.floor(Math.random() * numberOfSides + 1);
        setCurrentDiceResult(result);
        localStorage.setItem("diceResults", JSON.stringify([...prevDiceResults, { result, sides:numberOfSides }]));
    }

    return (
        <Root>
            <Title>Welcome To Roll The Dice!</Title>
            <DiceConfigureWrap>
                <RowConfigureWrap>
                    <div>Choose how many sides there are for the dice:</div>
                    <TextField
                        variant="outlined"
                        value={numberOfSides}
                        type='number' size='small'
                        onChange={((e)=>setNumberOfSides(Number(e.target.value)))}
                        sx={{maxWidth: '80px'}}
                        />
                </RowConfigureWrap>
                <Button variant="contained" onClick={onClick}>Roll The Dice</Button>
            </DiceConfigureWrap>
            <CurrentResultWrap>
                <ResultWrap>
                    <div>Your current result is:</div>
                    <div>{currentDiceResult}</div>
                </ResultWrap>
            </CurrentResultWrap>
            <ResultTable allResults={prevDiceResults} />
            <Statistics>
                <div>{`Sum: ${rollsSum}`}</div>
                <div>{`Average: ${rollsAvg.toFixed(2)}`}</div>
            </Statistics>

        </Root>

    )

}

export default RollADice;