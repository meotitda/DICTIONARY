import { Configuration, Plugin, Project } from "@yarnpkg/core";
import { BaseCommand } from "@yarnpkg/cli";
import { runner } from "dictionary-scripts";

class DictionaryRunner extends BaseCommand {
  static paths = [["d", "runner"]];

  async execute() {
    const configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins
    );
    const { project } = await Project.find(configuration, this.context.cwd);
    const rootPath = project.topLevelWorkspace.cwd;
    runner(rootPath);

    console.log("No Problem :)");
  }
}

const plugin: Plugin = {
  commands: [DictionaryRunner],
};

export default plugin;
