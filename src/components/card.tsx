import { FC, ReactNode, useState } from 'react';
import Box from '@mui/material/Box'
import '../styles/card.css';

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
    const [state, setState] = useState(0);
    return (
        <Box className='card_transition'
            sx={{
                width,
                height,
                borderRadius: '16px',
                background: '#404040',
            }}
            onClick={() => onClick()}
            >
            {children}
        </Box>
    );
};

export default Card;