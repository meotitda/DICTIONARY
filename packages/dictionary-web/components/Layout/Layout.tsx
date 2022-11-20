import { Box, IconButton } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import LogoSVG from "../../svgs/LogoSVG";
import BottomNavigation from "../BottomNavigation";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="header"
      >
        <IconButton>
          <LogoSVG
            sx={{
              width: 144,
              height: 28,
            }}
          />
        </IconButton>
      </Box>
      {children}
      <BottomNavigation />
    </Box>
  );
};

export default Layout;
