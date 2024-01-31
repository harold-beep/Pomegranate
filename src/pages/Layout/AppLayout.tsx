import { Paper, Typography } from "@mui/material";
import Header from "../../components/Header/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Paper>
        <Typography>this is the container of the sub apps</Typography>
      </Paper>
    </>
  );
};

export default AppLayout;
