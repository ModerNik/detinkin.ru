import React from 'react';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';

export default function Avatars() {
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
  }