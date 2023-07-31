import { useState } from 'react';

import { Box, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';


import AddRow from './AddRow';



const CreateTable = ({ text, data, setData }) => {
  
    const [rows, addRows] = useState([0]);
    
    return (
        <Box>
            <Typography mt={2} mb={2}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={ {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    }}></TableCell>
                        <TableCell sx={ {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    }}>KEY</TableCell>
                        <TableCell sx={ {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    }}>VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => {
                            return <AddRow 
                                addRows={addRows} 
                                rowId={index} 
                                key={index}
                                setData={setData}
                                data={data} 
                            />
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;