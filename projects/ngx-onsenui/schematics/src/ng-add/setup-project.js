"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../utils");
const config_1 = require("@schematics/angular/utility/config");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const change_1 = require("@schematics/angular/utility/change");
/** Name of the ngx-onsenui module. */
const moduleName = 'OnsenModule';
/**
 * Scaffolds the basics of a Angular Material application, this includes:
 *  - Add Packages to package.json
 *  - Adds pre-built themes to styles.ext
 *  - Adds OnsenModule to app.module
 */
function default_1(options) {
    return schematics_1.chain([
        addCustomElementsSchema(options),
        addOnsenModule(options),
        addOnsenStyles(options),
        updateTsLint(),
        showCompleteMessage()
    ]);
}
exports.default = default_1;
/**
 * Updates JSON file
 */
function updateJsonFile(host, path, callback) {
    const source = host.read(path);
    if (source) {
        const sourceText = source.toString('utf-8');
        const json = core_1.parseJson(sourceText);
        callback(json);
        host.overwrite(path, JSON.stringify(json, null, 4));
    }
    return host;
}
/**
 * Updates tslint.json
 */
function updateTsLint() {
    return (host) => {
        if (!host.exists('src/tslint.json')) {
            return host;
        }
        return updateJsonFile(host, 'src/tslint.json', (tslint) => {
            if (!tslint.rules) {
                tslint.rules = {};
            }
            if (!tslint.rules['component-selector']) {
                tslint.rules['component-selector'] = [
                    true,
                    'element',
                    'app',
                    'kebab-case'
                ];
            }
            const s = tslint.rules['component-selector'][2];
            if (Array.isArray(s)) {
                tslint.rules['component-selector'][2] = [...s, 'ons-page'];
            }
            else {
                tslint.rules['component-selector'][2] = [s, 'ons-page'];
            }
        });
    };
}
/**
 * Adds an animation module to the root module of the specified project.
 */
function addOnsenModule(options) {
    return (host, context) => {
        const workspace = config_1.getWorkspace(host);
        const project = utils_1.getProjectFromWorkspace(workspace, options.project);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, utils_1.getProjectMainFile(project));
        if (!utils_1.hasNgModuleImport(host, appModulePath, moduleName)) {
            // Do not add the OnsenModule module if the project already explicitly uses
            // the BrowserAnimationsModule.
            utils_1.addModuleImportToRootModule(host, moduleName, 'ngx-onsenui', project);
        }
        context.logger.log('info', `✅️ ${moduleName} is imported`);
        return host;
    };
}
/**
 * Adds CUSTOM_ELEMENTS_SCHEMA to the root module of the specified project.
 */
function addCustomElementsSchema(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = utils_1.getProjectFromWorkspace(workspace, options.project);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, utils_1.getProjectMainFile(project));
        const moduleSource = utils_1.getSourceFile(host, appModulePath);
        if (!moduleSource) {
            throw new schematics_1.SchematicsException(`Module not found: ${appModulePath}`);
        }
        const changes = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, appModulePath, 'schemas', 'CUSTOM_ELEMENTS_SCHEMA', '@angular/core');
        const declarationRecorder = host.beginUpdate(appModulePath);
        for (const change of changes) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);
        return host;
    };
}
/**
 * Adds Onsen UI styles to the specified project.
 */
function addOnsenStyles(options) {
    return (host, context) => {
        const workspace = config_1.getWorkspace(host);
        const project = utils_1.getProjectFromWorkspace(workspace, options.project);
        const onsenTheme = `./node_modules/onsenui/css/onsenui.css`;
        const onsenComponentsTheme = `./node_modules/onsenui/css/onsen-css-components.css`;
        addThemeStyleToTarget(project, 'build', host, onsenTheme, workspace);
        addThemeStyleToTarget(project, 'build', host, onsenComponentsTheme, workspace);
        addThemeStyleToTarget(project, 'test', host, onsenTheme, workspace);
        addThemeStyleToTarget(project, 'test', host, onsenComponentsTheme, workspace);
        context.logger.log('info', `✅️ Added Onsen UI theme to styles`);
        return host;
    };
}
/** Adds a theming style entry to the given project target options. */
function addThemeStyleToTarget(project, targetName, host, assetPath, workspace) {
    const targetOptions = utils_1.getProjectTargetOptions(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [assetPath];
    }
    else {
        const existingStyles = targetOptions.styles.map((s) => typeof s === 'string' ? s : s.input);
        for (let stylePath of existingStyles.entries()) {
            // If the given asset is already specified in the styles, we don't need to do anything.
            if (stylePath === assetPath) {
                return;
            }
        }
        targetOptions.styles.unshift(assetPath);
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
/**
 * Show complete message.
 */
function showCompleteMessage() {
    return (host, context) => {
        context.logger.log('info', `🎉 Hooray! ngx-onsenui is successfully installed.`);
        context.logger.log('info', `♨️ For more information, see https://onsen.io/v2/api/angular2/`);
        return host;
    };
}
//# sourceMappingURL=setup-project.js.map