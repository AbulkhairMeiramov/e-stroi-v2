import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const NavBar = ({ title }) => {
  return (
    <AppBar
      position="sticky"
      style={{ background: "#C8C8C8", color: "black", marginBottom: "20px" }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            style={{
              fontWeight: "500",
              fontSize: "36px",
              lineHeight: "42.19px",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
