import { Configuration, Plugin, Project } from "@yarnpkg/core";
import { NodeFS, npath } from "@yarnpkg/fslib";

import { BaseCommand } from "@yarnpkg/cli";
import { runner } from "dictionary-scripts";
import { Option } from "clipanion";

class DictionaryRunner extends BaseCommand {
  static paths = [["d", "runner"]];

  output = Option.String("-o,--output", {
    description:
      "파싱 결과물을 출력합니다. 예를 들어 --output ./result.json 처럼 사용할 수 있습니다.",
  });

  async execute() {
    const configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins
    );
    const { project } = await Project.find(configuration, this.context.cwd);
    const rootPath = project.topLevelWorkspace.cwd;

    const result = runner(rootPath);

    if (this.output) {
      const fs = new NodeFS();
      const output = npath.toPortablePath(this.output);

      fs.writeFileSync(output, JSON.stringify(result), { encoding: "utf-8" });
    }

    console.log("No Problem :)");
  }
}

const plugin: Plugin = {
  commands: [DictionaryRunner],
};

export default plugin;
