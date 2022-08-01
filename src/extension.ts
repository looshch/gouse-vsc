import * as vscode from 'vscode';
import * as cp from 'child_process';

const installMissing = (cb: () => void) => {
  cp.exec('whereis -q gouse', (err, stdout) => {
    if (err) return vscode.window.showErrorMessage(err.message);
    if (stdout) return cb();
    vscode.window.showErrorMessage('gouse is not installed.', 'Install')
      .then(install => {
        if (!install) return;
        cp.exec('go install github.com/looshch/gouse@latest', err => {
          if (err) return vscode.window.showErrorMessage(err.message);
          cb();
        });
      });
  });
}

const toggle = () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;
  // Save a file so gouse modifies its latest version.
  editor.document.save()
    .then(() => cp.exec('gouse -w ' + editor.document.uri.fsPath, err => {
      const msg = err?.message;
      if (!msg) return;
      if (msg.includes('command not found')) return installMissing(toggle);
      vscode.window.showErrorMessage(msg);
    }));
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('gouse.toggle', toggle));
}