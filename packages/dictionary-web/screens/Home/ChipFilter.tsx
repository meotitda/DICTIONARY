import { Box, Chip } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const filters = {
  FRONTEND: "FRONTEND",
  BACKEND: "BACKEND",
  COMMON: "COMMON",
  DATABASE: "DATABASE",
  DEVOPS: "DEVOPS",
} as const;

type FilterKeys = keyof typeof filters;

type FilterToggle = {
  [key in FilterKeys]?: boolean;
};

interface ChipFilterProps {
  selected?: FilterToggle;
}

const ChipFilter: FC<ChipFilterProps> = ({ selected }) => {
  const _selected = Object.keys(filters).reduce(
    (object, key) => Object.assign(object, { [key]: false }),
    {} as FilterToggle
  );
  Object.assign(_selected, selected);
  const generateFilterQuery = (filter: FilterKeys) => {
    const tempSelected = Object.assign({}, _selected);
    tempSelected[filter] = !tempSelected[filter];
    const filters = Object.entries(tempSelected).map(([key, value]) =>
      value ? key : ""
    );
    return filters.join(",");
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        paddingLeft: "10px",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {Object.values(filters).map((filter) => (
        <Link
          key={filter}
          href={{
            query: {
              filter: generateFilterQuery(filter),
            },
          }}
        >
          <Chip
            className={_selected[filter] ? "selected" : ""}
            sx={{
              "&.selected": {
                backgroundColor: (theme) => theme.palette.primary1,
              },
              backgroundColor: (theme) => theme.palette.primary2,
              color: (theme) => theme.palette.common.white,
              fontSize: "12px",
              padding: "2px 5px",
              height: "24px",
              marginRight: "5px",
            }}
            label={filter}
          />
        </Link>
      ))}
    </Box>
  );
};

export default ChipFilter;
