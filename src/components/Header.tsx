import { Button, Paper, Typography } from "@mui/material";

//Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Header = ({
  onClick,
  selectedFeatures,
}: {
  onClick: (feature: string) => void;
  selectedFeatures: string[];
}) => {
  return (
    <div className="header">
      <Paper className="content">
        <Button
          onClick={() => onClick("pomodoro")}
          className={selectedFeatures.includes("pomodoro") ? "selected" : ""}
          startIcon={<PunchClockIcon />}
        >
          <Typography>Pomodoro</Typography>
        </Button>
        <Button
          className={selectedFeatures.includes("todo") ? "selected" : ""}
          onClick={() => onClick("todo")}
          startIcon={<AssignmentIcon />}
        >
          <Typography>Tasks</Typography>
        </Button>
        <Button
          className={selectedFeatures.includes("youtube") ? "selected" : ""}
          onClick={() => onClick("youtube")}
          startIcon={<YouTubeIcon />}
        >
          <Typography>YouTube Player</Typography>
        </Button>
        <Button
          className={selectedFeatures.includes("clock") ? "selected" : ""}
          onClick={() => onClick("clock")}
          startIcon={<WatchLaterIcon />}
        >
          <Typography>Clock should be here</Typography>
        </Button>
      </Paper>
    </div>
  );
};

export default Header;
