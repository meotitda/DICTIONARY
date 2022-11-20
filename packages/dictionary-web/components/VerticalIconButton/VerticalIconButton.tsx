import { IconButton, SvgIconProps, Typography } from "@mui/material";
import { isValidElement, ReactElement } from "react";
import type { FC } from "react";

interface VerticalIconButtonProps {
  upperIcon: ReactElement<SvgIconProps>;
  text: string;
}

const VerticalIconButton: FC<VerticalIconButtonProps> = ({
  upperIcon,
  text,
}) => {
  return (
    <IconButton
      disableRipple
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isValidElement(upperIcon) && upperIcon}

      <Typography
        sx={{
          marginTop: "10px",
          color: (theme) => theme.palette.primary1,
          fontSize: 12,
        }}
      >
        {text}
      </Typography>
    </IconButton>
  );
};

export default VerticalIconButton;
