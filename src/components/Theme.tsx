import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: "#000",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
          },
        },
      },
      MuiStack: {
        styleOverrides: {
          root: {
            backgroundColor: "#E4FDE1",
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
