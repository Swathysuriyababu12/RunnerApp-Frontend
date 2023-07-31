import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button } from '@mui/material';


import { DataContext } from '../context/DataProvider';



const Form = ({ onSendClick }) => {
    

    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Select 
                sx={{
                    width: 150,
                    height: 40,
                    background: '#F6F6F6'
                }} 
                value={formData.type} 
                label="POST" 
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField 
                size="small" 
                sx={ {
                    width: '100%',
                    background: '#F6F6F6'
                }} 
                onChange={(e) => onUrlChange(e)}
            />
            <Button sx={ {
        width: 100,
        height: 40,
        backgroundColor:"FC7703",
        marginLeft: [5, '!important']
    }} variant="contained" onClick={() => onSendClick()}>Send</Button>
        </Box>
    )
}

export default Form;