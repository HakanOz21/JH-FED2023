import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';

function NameAndLogo() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976D2' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Du kannst dein Logo hier einfügen */}
          <AdbIcon sx={{ mr: 1 }} />

          {/* Titel der App */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 500,
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            BookMonkey
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { NameAndLogo };
