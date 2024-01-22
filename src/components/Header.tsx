import { Box, Button, Paper, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  return (
    <Paper>
      <Box
        component={Button}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <YouTubeIcon />
        <Typography>Youtube Player</Typography>
      </Box>
    </Paper>
  );
};

export default Header;
