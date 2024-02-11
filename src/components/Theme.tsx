import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: "#1d1c1a",
            padding: 0,
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
