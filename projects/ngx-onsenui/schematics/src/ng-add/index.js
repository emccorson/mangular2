"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("./package-config");
/**
 * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
 * automatically executed if developers run `ng add ngx-onsenui`.
 */
function default_1(options) {
    return (tree, context) => {
        context.logger.log('info', `🔍 Installing packages...`);
        package_config_1.addPackageToPackageJson(tree, 'onsenui', '^2.10.0');
        package_config_1.addPackageToPackageJson(tree, 'ngx-onsenui', '^7.0.0');
        const installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map