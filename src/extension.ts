import * as vscode from 'vscode'
import * as cp from 'child_process'

const toggle = () => {
	const editor = vscode.window.activeTextEditor
	if (!editor) return
	// Save a file so gouse modifies its latest version.
	editor.document.save().then(() =>
		cp.exec('gouse -w ' + editor.document.uri.fsPath, (err) => {
			const msg = err?.message
			if (!msg) return
			vscode.window.showErrorMessage(msg)
		}),
	)
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('gouse.toggle', toggle),
	)
}
