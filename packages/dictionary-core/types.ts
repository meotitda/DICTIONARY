type ValueOf<T> = T[keyof T];

export const ELabel = {
  Common: "Common",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Devops: "Devops",
} as const;

export type TLabel = ValueOf<typeof ELabel>;

export const EToken = {
  Title: "Title",
  Label: "Label",
  Tag: "Tag",
  Body: "Body",
} as const;

export type TToken = ValueOf<typeof EToken>;

export const EKeyword = {
  Sharp: "#",
  Space: " ",
  LineBreak: "\n",
  Mark: "!",
  OpenAngleBrackets: "<",
  ClosedAngleBrackets: ">",
  A: "a",
  OpenSqureBracket: "[",
  CloseSqureBracket: "]",
  Eqaul: "=",
  Slash: "/",
  DoubleQuote: '"',
  Dash: "-",
} as const;
