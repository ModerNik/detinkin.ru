import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Card from './components/card';

const App = () => {
    return (
        <Box>
            <Card onClick={() => console.log('click')} width='200px' height='200px'>

            </Card>
        </Box>
    );
};

export default App;
