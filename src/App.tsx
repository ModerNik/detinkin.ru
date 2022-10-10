import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Card from './components/card';
import { Typography } from '@mui/material';

const App = () => {
    return (
        <Box sx={{marginTop: '50px', marginLeft: '50px'}}>
            <Card onClick={() => console.log('smackmyass')} width='200px' height='200px'>
                <Typography>
                    SMACK MY ASS
                </Typography>
            </Card>
        </Box>
    );
};

export default App;
