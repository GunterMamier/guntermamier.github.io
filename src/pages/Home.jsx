import React from "react";

import { Link } from "react-router-dom";

import {
  Typography,
  Box,
  Container,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

let theme = createTheme({
  header: {
    color: "#606c38",
  },
  media: {
    // height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white",
  },
});

theme = responsiveFontSizes(theme);

export default function Home() {
  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <Card style={theme.card}>
          <CardMedia
            image={require("../images/home-cropped.jpg")}
            component="img"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "10px",
            }}
          >
            <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
              Loma Linda Realtor and ADU specialist
            </Typography>
            <Typography sx={{ typography: { sm: "h5", xs: "body2" } }}>
              Please don't hesitate to call with any of your Real Estate or ADU
              needs!
            </Typography>
          </Box>
        </Card>
        <Container maxWidth="md" style={{ marginTop: "25px"}}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Card style={theme.card} elevation={5}>
                <CardMedia
                  image={require("../images/Gunter.png")}
                  component="img"
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={8}>
              <Typography sx={{ typography: { sm: "h2", xs: "h3" } }}>
                Services
              </Typography>
              <Typography sx={{ typography: { sm: "h5", xs: "body2" } }} style={{paddingBottom: "10px"}}>
                Are you looking to buy or sell a home?
              </Typography>
              <Typography sx={{ typography: { sm: "h5", xs: "body2" } }}>
                Or are you interested in
                passive income for home owners? Now made easy for home owners
                by new State ADU law.
              </Typography>
            </Grid>
          </Grid>
          {/* <Typography variant="h5" align="center" color="textSecondary">
            Welcome to Interactive Learner GIS, where you can easily learn about
            Geographic Information Science / Systems (GIS).
          </Typography> */}
        </Container>
      </ThemeProvider>
    </MainLayout>
  );
}
