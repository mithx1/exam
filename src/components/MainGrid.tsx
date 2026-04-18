import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

interface MainGridProps {
    input: string;
}

const MainGrid: React.FC<MainGridProps> = ({ input }) => {

    // Create 5x5 grid - remember (0,0) is bottom left
    const renderGrid = () => {
        const rows = [];
        
        // Build grid from top to bottom for display (row 4 to row 0)
        for (let row = 4; row >= 0; row--) {
            const cells = [];
            
            for (let col = 0; col < 5; col++) {
                cells.push(
                    <TableCell
                        key={`${col}-${row}`}
                        sx={{
                            width: 80,
                            height: 80,
                            border: '1px solid #ccc',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        {input} {/* Display input in each  cell */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 2,
                                right: 2,
                                fontSize: 10,
                                color: 'text.secondary',
                            }}
                        >
                            {col},{row}
                        </Box>
                    </TableCell>
                );
            }
            
            rows.push(
                <TableRow key={row}>
                    {cells}
                </TableRow>
            );
        }
        
        return rows;
    };

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
            <Table>
                <TableBody>
                    {renderGrid()}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MainGrid;