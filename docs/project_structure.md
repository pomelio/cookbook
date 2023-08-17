# Project structure and development tools
> The project is hosted on a github repository. The development tools are located on the development server.

## Project directory structure
```

---/project root
     ---/bin
        ---/modules
     ---/docs
```


- The `bin` directory is the root directory for all program source codes. The files saved under this folder are call `pages`. All http requests will be sent to the `bin/index.wby` page by default. Developer can create other `pages`.
- The `docs` is the root directory of project documents. Project documents can be css files, js files, mustache template files, text files, json files, etc.
- The `bin/modules` directory is for user defined modules. The `pages` can `import` these modules by the `import statement`.


![project file system structure](/public/images/project_file_structure.png)
