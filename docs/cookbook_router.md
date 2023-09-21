---
id: router_page
---
# router page
> Every http `request` will be sent to the `router Page`, and then `dispatch` to other `Pages` by the `router page`.

![platform structure](/public/images/wby_platform.png)


> the path of router page is `/bin/index.wby`

📄  [router page's source code](https://github.com/pomelio/cookbook/blob/main/bin/index.wby) 

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

explanation:
- line 1: import the [web](/docs/ext_web.md) module
- line 2: import the [string](/docs/std_string.md) module


The above 2 lines import 2 built-in modules. All the functions included in the 2 above modules can be referenced in the `router page`.

- line 5: get the http request `url path`. 


- line 7 - 8: when the url path value is `/` or `endsWith` `.md`, we dispatch this request to the `markdown` page to handle the request. We will explain the `markdown` page later.

- line 9 - 10: when the url path value `starsWith` `/public`, The request is to downlod the documents such as the `js` or `css` or other resources, we dispatch the request to the `web` module's `send_file` function to handle the downloading request. 

- line 11 - 12, otherwise we response with status code 404 which is not found.

