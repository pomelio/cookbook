# DownloadDocs
> This module is for helping to downloading the static resources.

## download(path)
> response with the static resources.

- params:
  - path: the document path.
```
import ext.HttpContext as web;
import std.string as str;
import ext.DownloadDocs as dd;


let ppath = web.path();

if ppath == '/' {
  ppath = '/docs/start.md';
}

if str.ends_with(ppath, '.md') {
  dispatch('/markdown', {});
} elsif str.starts_with(ppath, '/docs') {
  dd.download(ppath);
} else {
  web.set_status(404);
}
```

- line 14 - 15: when the `ppath` variable value starts with the `/docs`, it downloads the specified resources. such as `/docs/entry_point.png`