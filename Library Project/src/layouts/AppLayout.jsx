import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <Box className="layout-root" sx={{backgroundColor:"#C9EEFF"}}>
      <Header />
      <Container maxWidth="lg" sx={{ flexGrow: 1 , py:5 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
