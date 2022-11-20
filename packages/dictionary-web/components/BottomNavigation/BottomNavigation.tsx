import {
  Paper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
} from "@mui/material";
import { useRouter } from "next/router";
import HomeSVG from "../../svgs/HomeSVG";
import InfoSVG from "../../svgs/InfoSVG";
import PencliSVG from "../../svgs/PencliSVG";
import BottomNavigationAction from "./BottomNavigationAction";
import { PATH } from "./navigationRoutingTable";

const BottomNavigation = () => {
  const router = useRouter();
  const value = router.pathname;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          router.push(newValue);
        }}
      >
        <BottomNavigationAction
          value={PATH.HOME}
          label="홈"
          icon={<HomeSVG />}
        />
        <BottomNavigationAction label="단어추가" icon={<PencliSVG />} />
        <BottomNavigationAction
          value={PATH.ABOUT}
          label="About"
          icon={<InfoSVG />}
        />
      </MuiBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;
