import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import '../styles/bar.css';

const pages = ['Projects', 'About Me', 'Contact'];

const Bar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    return (
        <AppBar position="sticky">
            <Container maxWidth='xl' className='bar_container'>
                <Toolbar className='toolbar'>
                    <Typography className='nickname'
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ModerNik
                    </Typography> 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Box className='bar_button'>
                            <Button
                                key={page}
                                //onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#D1E8E2', display: 'block' }}
                            >
                                {page}
                            </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Bar;