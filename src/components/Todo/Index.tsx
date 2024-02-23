import Input from "./components/Input";
import Tasks from "./components/Tasks";
import TodoButtons from "./components/TodoButtons";

const Index = () => {
  return (
    <div className="widget">
      <TodoButtons />
      <Input />
      <Tasks />
    </div>
  );
};

export default Index;
