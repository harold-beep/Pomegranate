import { Box } from "@mui/material";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <Box className="container">{children}</Box>;
};

export default Container;
