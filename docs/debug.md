# Project debugging

> Only the development environment can debug programs. The production environment can not.

- The debugger is a web program
- After the debugger is turned on, all subsequent http requests will be intercepted by the debugger. Therefore, after debugging, please close the debugger, otherwise subsequent http requests will always be intercepted by the debugger.
- The debugger can set breakpoints, step through debugging, inspect variable values, etc.

  ![debug button](/docs/github_debug_button.png)

  ![debug start](/docs/debug_start.png)

  ![debug details](/docs/debugger_details.png)
 
