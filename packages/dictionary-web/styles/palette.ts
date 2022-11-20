/* eslint-disable @typescript-eslint/no-empty-interface */
import createPalette from "@mui/material/styles/createPalette";

interface PaletteCommonOverrides {
  primary1: string;
  primary2: string;
  secondary1: string;
  secondary2: string;
  gray1: string;
}

declare module "@mui/material/styles" {
  interface Palette extends PaletteCommonOverrides {}
  interface PaletteOptions extends PaletteCommonOverrides {}
}

const palette = createPalette({
  primary1: "#B98A76",
  primary2: "#EED6BC",
  secondary1: "#DE956D",
  secondary2: "#F6CAAF",
  gray1: "#FFF",
});

export default palette;
