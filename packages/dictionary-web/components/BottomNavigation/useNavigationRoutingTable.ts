import { useRouter } from "next/router";

const useNavigationRoutingTable = () => {
  const router = useRouter();

  const PATH = {
    HOME: "/",
    WRITE: "/write",
    ABOUT: "/about",
    SEARCH: "/search",
  };

  const NavigationRoutingTable = {
    [PATH.HOME]: () => router.push(PATH.HOME),
    [PATH.WRITE]: () =>
      window.open("https://meotitda.github.io/DICTIONARY-EDITOR/"),
    [PATH.ABOUT]: () => router.push(PATH.ABOUT),
  };

  return [PATH, NavigationRoutingTable];
};

export default useNavigationRoutingTable;
