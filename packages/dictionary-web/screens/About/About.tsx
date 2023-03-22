import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getWords } from "../../apis";

interface AboutProps {
  title: string;
}

const About: FC<AboutProps> = ({ title }) => {
  const { data } = useQuery(["getWord", title], () => getWords());

  data?.data.items;
  return <Box>About</Box>;
};

export default About;
