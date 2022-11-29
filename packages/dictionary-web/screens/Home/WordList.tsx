import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react";
import { Word } from "../../pages/api/types";

const LabelLogo = dynamic(() => import("./LabelLogo"));

interface WordListProps {
  words: Word[];
}

const WordList: FC<WordListProps> = ({ words }) => {
  return (
    <Box>
      {words.map((word) => (
        <Box
          sx={{
            padding: "10px 20px",
            borderBottom: (theme) => `1px solid ${theme.palette.gray2}`,
          }}
          key={word.title}
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
