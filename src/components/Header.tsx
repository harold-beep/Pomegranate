import { Button, Paper, Typography } from "@mui/material";

//Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Header = () => {
  return (
    <div className="header">
      <Paper className="header-content">
        <Button startIcon={<PunchClockIcon />}>
          <Typography>Pomodoro</Typography>
        </Button>
        <Button startIcon={<AssignmentIcon />}>
          <Typography>Tasks</Typography>
        </Button>
        <Button startIcon={<YouTubeIcon />}>
          <Typography>YouTube Player</Typography>
        </Button>
        <Button startIcon={<WatchLaterIcon />}>
          <Typography>Clock should be here</Typography>
        </Button>
      </Paper>
    </div>
  );
};

export default Header;
