# .Net Core Test Explorer for Visual Studio Code

Run your .Net Core tests using the 
[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer).

<!--- add gif --->

## Features

* Shows a Test Explorer in the Test view in VS Code's sidebar with all detected tests and suites and their state
* Adds CodeLenses to your test files for starting and debugging tests
* Adds Gutter decorations to your test files showing the tests' state
* Adds line decorations to the source line where a test failed
* Shows a failed test's log when the test is selected in the explorer
* Lets you choose test suites that should be run automatically after each assembly change

## Getting started

* Install the extension and restart VS Code
* Set test console runner path (see Configuration options table below).
* Open the Test view
* Run / Debug your tests using the icons in the Test Explorer or the CodeLenses in your test file

## Configuration

### Options

Property                        | Description
--------------------------------|---------------------------------------------------------------
`dotnetCoreExplorer.searchpatterns`  		| The glob describing the location of your test assemblies (relative to the workspace folder) (default: `"**/bin/**/*.{dll,exe}"`)
`dotnetCoreExplorer.skippattern`	| Assemblies to skip from searching for tests.(default: exclude any files starting with nunit.\*.dll or xunit.\*.dll)



## Troubleshooting
If the Test view doesn't show your tests or anything else doesn't work as expected, you can check any error messages from the runner in `NXunit Test` output channel. Also you can turn on diagnostic logging using  the following configuration options
(note: in multi-root workspaces, these options are always taken from the first workspace folder):
* `dotnetCoreExplorer.logpanel`: Write diagnotic logs to an output panel

If you think you've found a bug, please [file a bug report](https://github.com/Derivitec/vscode-dotnet-adapter/issues).