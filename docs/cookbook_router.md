# Cookbook app router
> Every http `request` will be sent to the `router Page`, and then `dispatch` to other `Pages` by the `router page`.

![platform structure](/docs/wby_platform.png)

## router page
> the path of router page is `/bin/index.wby`

github [router page's source code](https://github.com/pomelio/cookbook/blob/main/bin/index.wby) 

```
import ext.web as web;
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

explanation:
- line 1: import the [web](/docs/ext_http_context.md) module
- line 2: import the [string](/docs/std_string.md) module
- line 3: import the `DownloadDocs` module

The above 3 lines import 3 built-in modules. All the functions included in the 3 above modules can be referenced in the `router page`.

- line 6: get the http request `url path`. 

- line 8 - 10: when the url path is `/`, we change the path value to the `/docs/start.md`, because we like the request with `/` path to be routed to the `/docs/start.md` markdown document.

- line 12 - 13: when the url path value `endsWith` `.md`, we dispatch this request to the `markdown` page to handle the request. We will explain the `markdown` page later.

- line 14 - 15: when the url path value `starsWith` `/docs`, The request is to downlod the documents such as the `js` or `css` or other resources, we dispatch the request to the `DownloadDocs` module's `download` function to handle the downloading request. 

- line 16 - 17, otherwise we response with status code 404 which is not found.

