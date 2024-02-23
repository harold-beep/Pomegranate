import SearchMode from "./UI/SearchMode";
import ViewMode from "./UI/ViewMode";

const Index = () => {
  const yes = true;

  //TODO make this switchable to the mounted link of selected video
  return <div className="widget">{yes ? <SearchMode /> : <ViewMode />}</div>;
};

export default Index;
