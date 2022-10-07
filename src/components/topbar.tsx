import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box'

interface TopBarProps {
    height?: string;
    children?: ReactNode;
}

const Card: FC<TopBarProps> = ({height, children}) => {
    return (
        <Box 
            sx={{
                widht: '100%',
                borderRadius: '16px',
                background: '#404040',
                '&:hover': {
                    background: '#303030',
                    transform: scale(1.3)
                },
            }}
            >
            {children}
        </Box>
    );
};

export default Card;