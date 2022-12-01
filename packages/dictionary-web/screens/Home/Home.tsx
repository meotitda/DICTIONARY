import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getWords } from "../../apis/getWords.api";
import SearchBar from "../../components/SearchBar";
import ChipFilter from "./ChipFilter";
import WordList from "./WordList";

const Home = () => {
  const router = useRouter();
  const rawFilters = (router.query.filter as string) || "";

  const filterList = rawFilters.split(",");

  const selected = filterList.reduce((object, filter) => {
    Object.assign(object, { [filter]: true });
    return object;
  }, {});

  const { data } = useQuery({
    queryKey: ["getWords"],
    queryFn: getWords,
  });

  console.log("query", data);

  return (
    <Box>
      <SearchBar linkComponent />
      <ChipFilter selected={selected} />
      <WordList words={data} />
    </Box>
  );
};

export default Home;
