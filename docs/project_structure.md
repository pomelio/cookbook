---
id: project_sturcture
---
# Project structure and development tools
> The project is hosted on a github repository. The development tools are located on the development server.

@[youtube](https://www.youtube.com/watch?v=lKNB3ZeTYiI)

## Project directory structure
```

---/project root
     ---/bin
        ---/modules
     ---/docs
     ---/public
```


- The `bin` directory is the root directory for all program source codes. The files saved under this folder are call `pages`. All http requests will be sent to the `bin/index.wby` page by default. Developer can create other `pages`.
- The `docs` is the root directory of project private documents. The documents can be mustache template files, json files. These files can not be publicly accessed.
- The `public` is the root folder of project public files. These files can be accessed publicly such as js, css and image files.
- The `bin/modules` directory is for user defined modules. The `pages` can `import` these modules by the `import statement`.


![project file system structure](/public/images/project_file_structure.png)
