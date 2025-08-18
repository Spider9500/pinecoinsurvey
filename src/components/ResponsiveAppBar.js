import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'
const pages = ['Home', 'Account', 'Referrals'];

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
  };

  const handleOpenMenu = (page) => {
    setActivePage(page);
    if (page === "Home") {
      navigate('/home')
    }
    if (page === "Account") {
      navigate('/account')
    }
    if (page === "Referrals") {
      navigate('/referrals')
    }
  }

  return (
    <AppBar position="sticky" sx={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', overflow: 'hidden', top: 0, left: 0, right: 0 }}>
      <Container maxWidth={false} disableGutters style={{ 
        background: '#00B140',
        boxShadow: '0 0 15px 4px rgba(0,255,0,0.7)',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
      }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                sx={{
                  height: { xs: 40, md: 80 },
                  width: { xs: 40, md: 80 },
                  borderRadius: '50%',
                  mr: { xs: 1, md: 1 },
                  display: 'block'
                }}
                alt=""
                src={logo}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: "'Brush Script MT', cursive, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#00FF00',
                  display: 'inline-block',
                  mt: { xs: 0.2, md: 0.4 }
                }}
              >
                Pinecoin
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'space-around', ml: { xs: 1, md: 3 } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleOpenMenu(page)}
                  sx={{ 
                    my: { xs: 1, md: 2 }, 
                    color: 'white', 
                    backgroundColor: '#00B140',
                    display: 'block',
                    textShadow: 'none',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    fontFamily: "'Arial', 'Helvetica', sans-serif",
                    px: { xs: 1, md: 2 },
                    '&:hover': {
                      backgroundColor: '#009933',
                      color: 'white',
                      textShadow: 'none',
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleOpenMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Removed the smaller logo on mobile to avoid duplicate logos */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 30,
                width: 90,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                borderRadius: '50%',
              }}
              alt=""
              src={logo}
            />
          </Typography> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
