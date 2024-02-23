import { Button } from "@mui/material";
import { ReactNode } from "react";

const PomoButtons = ({
  children,
  props,
}: {
  children: ReactNode;
  props: any;
}) => {
  return <Button {...props}>{children}</Button>;
};

export default PomoButtons;
