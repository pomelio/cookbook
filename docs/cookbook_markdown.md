---
id: markdown_page
---
# Markdown Page
> The `markdown` page is for generating a html page from a markdown document on the right side and a side bar on the left side.

The markdown documents are saved under the `/docs` folder. The side bar which is a json file saved as 📄  [/docs/side_bar.json](https://github.com/pomelio/cookbook/blob/main/docs/side_bar.json)


## page template
> The `html` of the markdown page is from a `mustache` template. The file is at 📄 [/docs/layout.mustache](https://github.com/pomelio/cookbook/blob/main/docs/layout.mustache)

The page includes 2 parts, the left part is a `side bar` and the right part is a `markdown document` output.

![side bar and content](/public/images/side_bar_content.png)

The page `title` is from the markdown document's first `heading` element. The first paragraph element is the page's `excerpt` which is the content of `description meta` element content. These are used for improving SEO ranking.

![side bar and content](/public/images/title_excerpt.png)

## side bar
> The side bar is at left side of a page. It is based on a [bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/). The content of the side bar is from a json file name 📄  [/docs/side_bar.json](https://github.com/pomelio/cookbook/blob/main/docs/side_bar.json).

### JSON data
> The `side bar` is a json file. It include a `title` and `sections`. Each `section` has a `title` and `topics`. Each `topic` includes a `title` and a `path` to a markdown document.


```
{
  "title": "chatsarah.com",
  "sections":[
    {
      "title": "Cook book",
      "topics":[
        {
          "title": "What the platfrom is",
          "md": "/docs/what_platform_is.md"
        },
        {
          "title": "project files structure",
          "md": "/docs/project_structure.md"
        },
        {
          "title": "entry point",
          "md": "/docs/entry_point.md"
        },
        {
          "title": "github integration",
          "md": "/docs/github_integration.md"
        },
        {
          "title": "debug project",
          "md": "/docs/debug.md"
        },
        {
          "title": "hello world",
          "md": "/docs/hello_world.md"
        }
      ]
    },
    {
      "title": "open source Cookbook",
      "topics":[
        {
          "title": "introduction",
          "md": "/docs/cookbook.md"
        },
        {
          "title": "project structure",
          "md": "/docs/cookbook_structure.md"
        },
        {
          "title": "page router",
          "md": "/docs/cookbook_router.md"
        },
        {
          "title": "markdown page",
          "md": "/docs/cookbook_markdown.md"
        },
        {
          "title": "response static files",
          "md": "/docs/ext_download_docs.md"
        }
      ]
      ...
    }
    
  ]
}
```


### bootstrap NavBar
> The Navbar template is located at 📄 [/docs/sidebar.mustache](https://github.com/pomelio/cookbook/blob/main/docs/sidebar.mustache)

```
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">

    <a class="navbar-brand" href="#">{{title}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-start overflow-auto" id="navbarSupportedContent">
        {{{sections_html}}}
    </div>
</nav>
```
- line 3: the `title` variable value is from json data top `title` property.
- lin 8: this is the `sections_html`

please see the following screenshot
![title sections](/public/images/title_sections.png)

#### each section

the section template 📄  [/docs/sidebar_section.mustache](https://github.com/pomelio/cookbook/blob/main/docs/sidebar_section.mustache)
A side bar includes multi sections. Each section populate template with variables.

```
<div id='section_{{i}}'>
    <button class='btn text-bg-primary' data-bs-toggle="collapse" role="button" aria-expanded="false" data-bs-target="#sec_{{i}}" aria-controls="sec_{{i}}">{{title}}</button>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="sec_{{i}}">
    {{#topics}}
    <li class="nav-item">
        <a class="nav-link {{#active}}active{{/active}}" href="{{md}}">{{title}}</a>
    </li>
    {{/topics}}
    </ul>
</div>
```
- line 1: {{{i}}} is from the for loop of the below screenshot
- line 2: {{{title}}} is from section title
- line 4 - 8: loop to render a `topic` from variable `topics`.
- line 6: this is a topic's `active` property, `title` property and `md` property. The line 25 of below screenshot `...t` is a topic variable spead which include property `title` and `md`.

![section_topics](/public/images/section_topics.png)



## markdown page 📄  [/bin/markdown.wby](https://github.com/pomelio/cookbook/blob/main/bin/markdown.wby)
```
import ext.web as web;
import ext.MarkDownIt as md;
import std.string as str;
import ext.mustache as mch;
import ext.Docs as docs;
import std.array as arr;

let ppath = web.path();
if ppath == '/' {
  ppath = '/docs/start.md';
}

let side_bar_data = docs.get_data('/docs/side_bar.json');

let side_bar_json = parse_json(side_bar_data);

let sections = side_bar_json['sections'];

let section_html_list = [];

for (let i = 0; i < len(sections); i++) {
  let section = sections[i];
  let topics = section['topics'];
  topics = arr.map(topics, |t|=>{
    return {...t, active: t['md'] == ppath};
  });
  
  let title = section['title'];
  let section_html = mch.render('/docs/sidebar_section.mustache');
  arr.push(section_html_list, section_html);
}

let title = side_bar_json['title'];
let sections_html = arr.join(section_html_list, '');

let side_bar_html = mch.render('/docs/sidebar.mustache');

let PAGE_URL = 'https://' + web.hostname() + ppath;
let PAGE_IDENTIFIER = ppath;

let md_result = md.render(ppath);
let title = md.get_meta(md_result, 'title');
let content = md.get_html(md_result);
if title == undefined {
  title = 'chatsarah.com';
}
let description = md.get_meta(md_result, 'description');
let html = mch.render('/docs/layout.mustache');

web.body(html);
```
- line 1: import the web module which is for helping to handle http request response
- line 2: import the MarkdownIt module which is for process markdown document.
- line 3: import the string module which is for helping to process string.
- line 4: import the mustache module which is for helping to process template.
- line 5: import the Docs module which is to get the string from a document.
- line 6: import the array module which to process array.

- line 8: get the http `request`` url `path`.
- line 9 - 10: when the http request url path is `/`, change the value to `/docs/start.md`.

- line 13: get the `/docs/side_bar.json` to string value.

- line 15: parse the json string to a map variable.
- line 17: get the section array value from the side bar map with key `sections`.

- line 19 - 36: generate the sections html

- line 19: init a empty array value for sections html
- line 21: loop a `sections` array variable.
- line 22: get a `section` map variable
- line 23: get the `topics` array variable from a `section` variable.
- line 24 - 26: map each `topic` of a section and add a `active` property to the topic when the topic's `md` string value same as the current request's `path` which is saved in the `ppath` variable. we will high light the `topic` link of the topic when the current topic's `markdown` document is rendered.
- line 28: get the section's `title`
- line 29: render the `section` template into a `html`, the `section` template path is `/docs/sidebar_section.mustache`. The template will use the above variables `title` and `topics`
- line 30: add the section's html into the sections html array.

- line 33: get the side bar `title`.
- line 34: join the array of sections html array variable into string variable `sections_html`.
- line 36: render the side bar with the mustach tempate `/docs/sidebar.mustache`. The template will use the above `title` and `sections_html`

- line 38: The `PAGE_URL` is for integration the third party comment platform [disqus](https://disqus.com/).
- line 39: The `PAGE_IDENTIFIER` is for disqus

- line 41: call the markdownit module's render method to parse the markdown document.
- line 42: get the title of the markdown document which is from the first heading element of the markdown document.
- line 43: get the html content of the markdown document.
- line 44 - 46: set the default page's title.
- line 47: get the excerpt of the markdown document which is from the first paragraph of the markdown document.
- line 48: get the html content of the markdown page template is from `/docs/layout.mustache`. It uses the variable of `title` for page title, `excerpt` for the meta description, `sections_html` for side bar,`content` from the markdown output. `PAGE_URL` and `PAGE_IDENTIFIER` for the `disqus` integration.
- line 50: output the `html` string value to the http response `body`.