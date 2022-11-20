import { Box, IconButton } from "@mui/material";
import Link from "next/link";
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
          borderBottom: (theme) => `1px solid ${theme.palette.gray2}`,
          marginBottom: "15px",
        }}
        component="header"
      >
        <IconButton disableRipple href="/" LinkComponent={Link}>
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
