import { Paper, BottomNavigation as MuiBottomNavigation } from "@mui/material";
import { useRouter } from "next/router";
import HomeSVG from "../../svgs/HomeSVG";
import InfoSVG from "../../svgs/InfoSVG";
import PencliSVG from "../../svgs/PencliSVG";
import BottomNavigationAction from "./BottomNavigationAction";
import useNavigationRoutingTable from "./useNavigationRoutingTable";

const BottomNavigation = () => {
  const router = useRouter();
  const [PATH, NavigationRoutingTable] = useNavigationRoutingTable();
  const value = router.pathname === PATH.SEARCH ? PATH.HOME : router.pathname;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, value) => {
          const newPath = value as keyof typeof PATH;
          const route = NavigationRoutingTable[newPath] as
            | (() => Promise<boolean>)
            | (() => Window | null);
          route();
        }}
      >
        <BottomNavigationAction
          value={PATH.HOME}
          label="홈"
          icon={<HomeSVG />}
        />
        <BottomNavigationAction
          value={PATH.WRITE}
          label="단어추가"
          icon={<PencliSVG />}
        />
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
