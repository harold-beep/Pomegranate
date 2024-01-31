import { Box, Button, Paper, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <Paper>
          <Box
            component={Button}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTubeIcon />
            <Typography>Youtube Player</Typography>
          </Box>
          <Box
            component={Button}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTubeIcon />
            <Typography>Youtube Player</Typography>
          </Box>
          <Box
            component={Button}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTubeIcon />
            <Typography>Youtube Player</Typography>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default Header;
