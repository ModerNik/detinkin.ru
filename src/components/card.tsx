import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box'
import { borders } from '@mui/system';

interface CardProps {
    width?: string;
    height?: string;
    children?: ReactNode;
    onClick: () => void;
}

const Card: FC<CardProps> = 
    ({
        width,
        height,
        children,
        onClick
    }) => {
    return (
        <Box 
            sx={{
                width,
                height,
                borderRadius: '16px',
                background: '#404040'
            }}
            onClick={onClick}
            >
            {children}
        </Box>
    );
};

export default Card;