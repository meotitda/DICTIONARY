import { FC } from "react";
import type { TLabel } from "@dictionary/core";
import FrontendLabelSVG from "../../svgs/FrontendLabelSVG";
import BackendLabelSVG from "../../svgs/BackendLabelSVG";
import DevopsLabelSVG from "../../svgs/DevopsLabelSVG";
import CommonLabelSVG from "../../svgs/CommonLabelSVG";
import DatabaseLabelSVG from "../../svgs/DatabaseLabelSVG";
import { SvgIconProps } from "@mui/material";

interface LabelLogoProps extends SvgIconProps {
  label: TLabel;
}

const LabelTable = {
  Frontend: FrontendLabelSVG,
  Backend: BackendLabelSVG,
  Common: CommonLabelSVG,
  Database: DatabaseLabelSVG,
  Devops: DevopsLabelSVG,
};

const LabelLogo: FC<LabelLogoProps> = ({ label, ...props }) => {
  const LabelSVG = LabelTable[label];

  return <LabelSVG {...props} />;
};

export default LabelLogo;
