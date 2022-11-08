type ValueOf<T> = T[keyof T];

export const ELabel = {
  Common: "Common",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Devops: "Devops",
} as const;

export type TLabel = ValueOf<typeof ELabel>;

export const ELabelUrl = {
  Common:
    "https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png",
  Frontend:
    "https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Frontend.png",
  Backend:
    "https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png",
  DADatabaseTABASE:
    "https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Database.png",
  Devops:
    "https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Devops.png",
} as const;

export type TLabelUrl = ValueOf<typeof ELabelUrl>;

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
  OpenRoundBrackets: "(",
  ClosedRoundBrackets: ")",
  A: "a",
  OpenSqureBracket: "[",
  CloseSqureBracket: "]",
  Eqaul: "=",
  Slash: "/",
  DoubleQuote: '"',
  Dash: "-",
} as const;

export interface ITag {
  title: string;
  link: string;
}

export interface IWord {
  slug: string;
  title: string;
  labels: TLabel[];
  tags: ITag[];
  body: string;
}
