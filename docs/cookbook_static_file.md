---
id: response_to_static_file
---
# Response to static file
> js, css, images These files are placed in the public folder, when accessing these files, the `send_file` of the `web` module can return these files.


## send_file(path)
> response with the static resources.

- params:
  - path: the document path.
```
import ext.web as web;
import std.string as str;


let ppath = web.path();

if ppath == '/' || str.ends_with(ppath, '.md') {
  dispatch('/markdown', {});
} elsif str.starts_with(ppath, '/public') {
  web.send_file(ppath);
} else {
  web.set_status(404);
}
```

- line 9 - 10: when the `ppath` variable value starts with the `/public`, it sends the specified resources. such as `/public/images/entry_point.png`
