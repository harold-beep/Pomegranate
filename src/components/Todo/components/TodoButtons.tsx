import { Button, ButtonGroup } from "@mui/material";

const TodoButtons = () => {
  return (
    <ButtonGroup variant="text" className="todo-buttons">
      <Button className="bf w-900">Clear All Tasks</Button>
      <Button className="bf w-900">View Finished Tasks</Button>
    </ButtonGroup>
  );
};

export default TodoButtons;
