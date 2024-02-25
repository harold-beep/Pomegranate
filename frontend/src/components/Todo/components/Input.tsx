import { Box, Button, TextField } from "@mui/material";

const Input = () => {
  return (
    <Box className="input">
      <TextField variant="standard" />
      <Button className="w-900 bf">Add</Button>
    </Box>
  );
};

export default Input;
