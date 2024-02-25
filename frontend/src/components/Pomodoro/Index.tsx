import ControlButtons from "./components/ControlButtons";
import DisplayTimer from "./components/DisplayTimer";
import TimerButtons from "./components/TimerButtons";

const Index = () => {
  return (
    <div className="widget">
      <TimerButtons />
      <DisplayTimer />
      <ControlButtons />
    </div>
  );
};

export default Index;
