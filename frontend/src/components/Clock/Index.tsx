import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { clock } from "./components/clock";
import AnalogClock from "analog-clock-react";

const Index = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="widget">
      <AnalogClock {...clock} />
      <Typography className="bf s-12">{date.toLocaleTimeString()}</Typography>
      <Typography className="sf w-900 s-12">
        {date.toLocaleDateString()}
      </Typography>
    </div>
  );
};

export default Index;
