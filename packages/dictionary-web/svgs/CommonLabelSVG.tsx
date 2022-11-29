import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const CommonLabelSVG: FC<SvgIconProps> = ({ sx, ...props }) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        ...sx,
        width: "80px",
        height: "20px",
      }}
      width="68"
      height="15"
      viewBox="0 0 68 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="68" height="15" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_141"
            transform="scale(0.0147059 0.0666667)"
          />
        </pattern>
        <image
          id="image0_1_141"
          width="68"
          height="15"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  );
};

export default CommonLabelSVG;
