import React, {useMemo, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {map} from 'lodash';
import { Result } from "./types";

interface ResultTableProps {
    allResults: Array<Result>;
}

const ResultTable: React.FC<ResultTableProps> = ({ allResults }) => {
return (
    <TableContainer component={Paper} sx={{ maxHeight: '350px', overflowX: 'auto'}}>
        <Table stickyHeader >
            <TableHead>
                <TableCell># Index</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Number of Sides</TableCell>
            </TableHead>
            <TableBody>
                {map(allResults, (turn: Result, index: number)=>{
                       return (
                           <TableRow key={index}>
                            <TableCell>{index}</TableCell>
                            <TableCell>{turn.result}</TableCell>
                            <TableCell>{turn.sides}</TableCell>
                            </TableRow>)
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
);
}

export default ResultTable;