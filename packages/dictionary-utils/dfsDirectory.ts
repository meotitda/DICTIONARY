import fs from "fs";

const dfsDirectory = (root: string, callback: (curr: string) => any) => {
  const isVisited = new Set();

  const _dfsDirectory = (curr) => {
    isVisited.add(curr);

    if (fs.lstatSync(curr).isFile()) {
      callback(curr);
      return;
    }

    const lists = fs.readdirSync(curr);

    lists.map((next) => {
      if (!isVisited.has(next)) {
        _dfsDirectory(`${curr}/${next}`);
      }
    });
  };

  _dfsDirectory(root);
};

export default dfsDirectory;
