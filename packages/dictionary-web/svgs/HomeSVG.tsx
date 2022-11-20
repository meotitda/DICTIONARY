import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const HomeSVG: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_110)">
        <path d="M27.2347 16.267L16.0038 5.7536L4.76602 16.2714V31.3003C4.76602 31.6884 5.06275 31.9998 5.42997 31.9998H12.453V25.4102C12.453 25.0221 12.7475 24.7084 13.1148 24.7084H18.8855C19.2527 24.7084 19.5473 25.0221 19.5473 25.4102V31.9998H26.5723C26.9396 31.9998 27.2341 31.6884 27.2341 31.3003V16.2662L27.2347 16.267Z" />
        <path d="M15.9383 0L0.000183105 14.9166L1.67905 16.9186L16.0037 3.51129L30.325 16.9186L32.0006 14.9166L16.0659 0L16.004 0.0758083L15.9388 0H15.9383Z" />
        <path d="M4.76602 2.14729H8.80633L8.77112 4.67673L4.76599 8.50118V2.14729H4.76602Z" />
      </g>
    </SvgIcon>
  );
};

export default HomeSVG;
