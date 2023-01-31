/* extension.ts
 * 
 * By: Liam Strand
 * On: Summer 2022
 * 
 * Provides a shim connecting the language server to VS Code. Handles making
 * requests to the language server and reporting responses.
 * 
 * Also handles most dependency management.
 * 
 */

import * as vscode from 'vscode';
import {configuration} from './configuration';

export function activate(ctx: vscode.ExtensionContext) {
    // ctx.subscriptions.push(vscode.languages.setLanguageConfiguration('scheme', configuration));
}

export function deactivate() {
    // 
}
