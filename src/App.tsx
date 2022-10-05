import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';

const App = () => {
    return (
        <Box>
            <Avatar
                alt="ModerNik"
                src="./images/av.png"
                sx={{ width: 56, height: 56 }}
                variant="rounded"
            />
        </Box>
    );
};

export default App;
