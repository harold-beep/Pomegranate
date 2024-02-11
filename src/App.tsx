import { useDispatch, useSelector } from "react-redux";
import { setActiveFeature } from "./redux/store";

//styles
import "./styles.scss";

//components
import Header from "./components/Header";
import Container from "./components/Container";
import Theme from "./components/Theme";
import PomodoroTimer from "./components/Pomodoro/Index";
import TodoList from "./components/Todo/Index";
import YouTubePlayer from "./components/Player/Index";
import DigitalClock from "./components/Clock/Index";

function App() {
  const activeFeature = useSelector((state) => state.app.activeFeature);
  const dispatch = useDispatch();

  const handleFeatureClick = (feature: string) => {
    const newActiveFeatures = activeFeature.includes(feature)
      ? activeFeature.filter((f: string) => f !== feature)
      : [...activeFeature, feature];

    dispatch(setActiveFeature(newActiveFeatures));
  };

  return (
    <Theme>
      <Header onClick={handleFeatureClick} selectedFeatures={activeFeature} />
      <Container>
        {activeFeature.length === 0
          ? "What do you want to do?"
          : activeFeature.map((feature: string) => (
              <div key={feature}>
                {feature === "pomodoro" && <PomodoroTimer />}
                {feature === "todo" && <TodoList />}
                {feature === "youtube" && <YouTubePlayer />}
                {feature === "clock" && <DigitalClock />}
              </div>
            ))}
      </Container>
    </Theme>
  );
}

export default App;
