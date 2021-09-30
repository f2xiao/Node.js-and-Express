# Art Template

## what does it do?

template engine replaces variables in the static template files with actual value (parsing), and transform the template into an html file sent to the client

## Use

1. install

   ```dotnetcli
   npm install art-template
   ```

2. import module

   ```dotnetcli
   const template =- require('art-template
   ```

3. incidate where the template files are and the data to be rendered

   ```dotnetcli
   const html = template(‘template file url’, data object);
   ```

4. uses template syntax in the template files

## Syntax

1. standard syntax

   ```dotnetcli
   {{if user}}
       <h2>{{user.name}}</h2>
   {{/if}}
   ```

   ```dotnetcli
   <h2>{{value}}</h2>
   <h2>{{a ? b : c}}</h2>
   <h2>{{a + b}}</h2>
   ```

2. original syntax

   ```dotnetcli
   <% if (user) { %>
   <h2> <%= user.name %></h2>
   <% } %>
   ```

   ```dotnetcli
   <h2><%= value %></h2>
   <h2><%= a ? b : c %></h2>
   <h2><%= a + b %></h2>
   ```

3. render template

   ```dotnetcli
   var template = require('art-template');
   var html = template(__dirname + '/tpl-user.art', { user: { name: 'aui' } });
   ```

4. Core method

   ```dotnetcli
   // render template basing on template name template(filename, data);

   // compile source of template as function
   template.compile(source, options);

   // compile source of template as function and immediately invoke it
   template.render(source, data, options);
   ```

## Output

js expressions

```
   <li>{{data.name}}</li>
   <li><%= data.age%></li>
   <li>{{2+2}}</li>
   <li><%= 1+1==2 ? 'yes' :'no'%></li>
   <li><%= 1<2 ? 'yes' :'no'%></li>
```

## Raw output

by default, template engine doesn't parse html tags inside the data value because of security reason since bad website can use alter tag for ads purposes. However, if you want to parse html tag, follow the following syntax:

```
{{@ $data['content']}}
```

or

```
<%- data%>
```

## Conditions

if and if else if

```
{{each data}}
<li>{{$index}} {{$value}}</li>
{{/each}}
```

## loop

arrays and objects

## Sub templates

It shares the html in the specifiled sub template file

```

// Standard
{{include 'fileURL'}}

//Original
<% include 'fileURL'%>

```

## Inheritance

It inherits the boilerplate html structure only, use html codes block placeholder in the layout.art (with html booilerplate), and in the content page use extend keyword to inherits them and indicate the html tags and contents inside corresponding named block

extend

```
<!--layout.art-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>

    {{block 'head'}}
    <link rel="stylesheet" href="main.css">
    {{/block}}
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>

<!--index.art-->
{{extend './layout.art'}}

{{block 'title'}}{{title}}{{/block}}

{{block 'head'}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
<p>This is just an awesome page.</p>
{{/block}}


```

## Filters

1. variables
2. root directory
3. set template default file ext

## Example - Student

### Static Resources

- goal?

while app.on("request") and req.method = "GET", first match the filename requested and the files in the in the public folder(where static resources are stored usually), once the matched file is found, use the fs module to read files and return the content in the file.

```

```
