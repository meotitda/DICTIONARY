import { IconButton, InputBase, Paper } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import SearchSVG from "../../svgs/SearchSVG";

interface SearchBarProps {
  linkComponent?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ linkComponent }) => {
  return (
    <Paper
      component={linkComponent ? Link : "form"}
      {...(linkComponent && { href: "/search" })}
      variant="outlined"
      sx={{
        margin: "0 10px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        autoFocus
        disabled={linkComponent}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Agnostic: 불가지론의"
        inputProps={{ "aria-label": "검색어를 입력하세요." }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchSVG />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
