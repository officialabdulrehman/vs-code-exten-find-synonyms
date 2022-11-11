// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const snippetCreate = vscode.commands.registerCommand('synonym-finder.snippetCreate', () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showErrorMessage(`No editor found`);
      return
    }

    const snippet = new vscode.SnippetString()


    editor.insertSnippet(snippet)



    // editor.options.lineNumbers = vscode.TextEditorLineNumbersStyle.Relative


    /* 
      input file path
      read file
      make them persist
      execute command
        quickpane
        select file type
      modal opens, type dynamic input
      generate file
    */


  });


  context.subscriptions.push(snippetCreate);
}

// This method is called when your extension is deactivated
export function deactivate() { }
