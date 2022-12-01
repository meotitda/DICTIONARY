export const getWords = () => {
  return Array(10).fill({
    title: "AST",
    body: "AST",
    slug: "A",
    labels: ["Frontend", "Common"],
    tags: [
      {
        title: "test",
        link: "rr",
      },
      {
        title: "test2",
        link: "rr2",
      },
    ],
  });
};
