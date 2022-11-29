import { Box } from "@mui/material";
import { useRouter } from "next/router";
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

  return (
    <Box>
      <SearchBar linkComponent />
      <ChipFilter selected={selected} />
      <WordList
        words={Array(10).fill({
          title: "AST",
          body: "AST",
          slug: "A",
          labels: ["Frontend", "Common"],
          tags: [
            {
              title: "test",
              link: "rr",
            },
            {
              title: "test2",
              link: "rr2",
            },
          ],
        })}
      />
    </Box>
  );
};

export default Home;
