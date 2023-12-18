import React from 'react';
import './EntryField.scss'
import {Button, TextField} from "@mui/material";
import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        violet: {
            main: '#7B68EE'
        },
    },
});
const EntryField = () => {
    return (
        <div className="content">
            <h1 className="title">Get things done!</h1>
            <TextField id="filled-basic"  variant="outlined" placeholder="What is the task today?" className='input'/>
            <ThemeProvider theme={theme}>
            <Button variant="contained" color="violet" className='button'>Add task</Button>
            </ThemeProvider>
        </div>
    );
};

export default EntryField;