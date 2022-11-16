import * as React from "react";

import {
  AppBar,
  // Box,
  Toolbar,
  // IconButton,
  Typography,
  // Menu,
  Container,
  // Button,
  // MenuItem,
  Grid,
  // Paper,
} from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

// const pages = ["Home", "Real Estate", "ADU"];

export default function Header() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar position="static" style={{ background: "#094074" }}>
      <Container maxWidth="xl" style={{ paddingRight: "0px" }}>
        <Toolbar disableGutters>
          {/* Desktop */}
          <div style={{ display: "grid" }}>
            <Typography
              variant="h4"
              noWrap
              //   component="a"
              //   href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Gunter Mamier
            </Typography>
            <Grid
              container
              sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
            >
              <Grid>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingRight: "10px",
                    paddingBottom: "5px"
                  }}
                >
                  <LocalPhoneIcon />
                  <a href="tel:909-253-6311" style={{ color: "white", paddingLeft: "5px" }}>
                  909-253-6311
                </a>
                </div>
              </Grid>
              <Grid>
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingBottom: "5px"
                  }}
                >
                <MailOutlineIcon />
                <a
                  href="mailto:guntermamierdb@gmail.com"
                  style={{ color: "white", paddingLeft: "5px" }}
                >
                  Email me
                </a>
                </div>
              </Grid>
            </Grid>
          </div>
          {/* Mobile */}
          <div style={{ display: "grid" }}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Gunter Mamier
            </Typography>
            <Grid
              container
              sx={{ alignItems: "center", display: { xs: "flex", md: "none" } }}
            >
              <Grid>
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingRight: "10px",
                    paddingBottom: "5px"
                  }}
                >
                  <LocalPhoneIcon />
                  <a href="tel:909-253-6311" style={{ color: "white", paddingLeft: "5px" }}>
                  909-253-6311
                </a>
                </div>
              </Grid>
              <Grid>
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingBottom: "5px"
                  }}
                >
                <MailOutlineIcon />
                <a
                  href="mailto:guntermamierdb@gmail.com"
                  style={{ color: "white", paddingLeft: "5px" }}
                >
                  Email me
                </a>
                </div>
              </Grid>
            </Grid>
          </div>
          {/* <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            justifyContent="flex-end"
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/* <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="flex-end"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
