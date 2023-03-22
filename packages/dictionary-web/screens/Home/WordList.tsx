import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";
import { Word } from "../../pages/api/types";

const LabelLogo = dynamic(() => import("./LabelLogo"));

interface WordListProps {
  words: Word[];
}

const WordList: FC<WordListProps> = ({ words }) => {
  const router = useRouter();

  const handleClick = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    title: string
  ) => {
    const target = e.target as unknown as { tagName: string };
    if (target.tagName !== "A") {
      router.push(`./${title}`);
    }
  };

  return (
    <Box>
      {words.map((word, index) => (
        <Box
          onClick={(e) => handleClick(e, word.title)}
          sx={{
            cursor: "pointer",
            padding: "10px 20px",
            borderBottom: (theme) => `1px solid ${theme.palette.gray2}`,
          }}
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.primary1,
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {word.title}
            </Typography>
            {word.labels.map((label) => (
              <LabelLogo
                sx={{ marginRight: "5px" }}
                label={label}
                key={label}
              />
            ))}
          </Box>
          {word.tags.map((tag) => (
            <Box
              component={"a"}
              target="_blank"
              href={tag.link}
              sx={{
                marginRight: "5px",
                fontSize: "12px",
                color: (theme) => theme.palette.secondary1,
              }}
              key={tag.title}
            >
              {`#${tag.title}`}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WordList;
