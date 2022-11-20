import {
  createTheme,
  GlobalStyles,
  ThemeProvider as MuiProvider,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";
import globalsCSS from "./globals.css";
import palette from "./palette";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    palette,
  });

  return (
    <MuiProvider theme={theme}>
      <GlobalStyles styles={globalsCSS} />
      {children}
    </MuiProvider>
  );
};

export default ThemeProvider;
