import { Stack } from "@mui/material";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Stack>
      <Header />
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AppLayout;
