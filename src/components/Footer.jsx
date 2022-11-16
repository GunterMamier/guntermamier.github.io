/**
 * Footer.jsx replaces the HTML <footer> tag for one
 * built using Material UI.
 */
 import React from "react";

 import {
   Typography,
   Box,
   ThemeProvider,
   createTheme,
   responsiveFontSizes,
 } from "@mui/material";
 
 let theme = createTheme({
   box: {
     p: 6,
   },
 });
 
 theme = responsiveFontSizes(theme);
 
 export default function Footer() {
   return (
     <ThemeProvider theme={theme}>
       <Box sx={theme.box} component="footer">
         <Typography
           variant="subtitle1"
           align="center"
           color="text.secondary"
           component="p"
         >
           Copyright © Gunter Mamier 2022
         </Typography>
       </Box>
     </ThemeProvider>
   );
 }