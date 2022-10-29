export interface ITag {
  title: string;
  link: string;
}

export interface IWord {
  slug: string;
  title: string;
  labels: string[];
  tags: ITag[];
  body: string;
}
