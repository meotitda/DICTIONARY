import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps,
} from "@mui/material";
import { FC } from "react";

const BottomNavigationAction: FC<BottomNavigationActionProps> = ({
  sx,
  ...props
}) => {
  return (
    <MuiBottomNavigationAction
      {...props}
      disableRipple
      sx={{
        ...sx,
        color: (theme) => theme.palette.primary2,
        "&.Mui-selected": {
          fontSize: "12px",
          color: (theme) => theme.palette.primary1,
        },
        ".MuiBottomNavigationAction-label": {
          marginTop: "2px",
        },
        ".MuiBottomNavigationAction-label.Mui-selected": {
          fontSize: "12px",
        },
      }}
    />
  );
};

export default BottomNavigationAction;
