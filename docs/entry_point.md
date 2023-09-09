---
id: entry_point
---
# Project entry point
> The entry point of a project is the `index.wby` page. The path is `/bin/index.wby`. All http requests will be sent to this page.

The `/bin/index.wby` is the router page, because all http requests are sent to this page. The router page can match the requests path or headers by regex or string matching, then it can dispatch the requests to a specified page.

## program directory structure
```

---/project root
     ---/bin
         ---/index.wby
```

- All http requests will be sent to the `/bin/index.wby` program for processing

![entry_point](/public/images/entry_point.png)
