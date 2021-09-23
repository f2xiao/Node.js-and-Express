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

include

## Inheritance

extend

## Filters

1. variables
2. root directory
3. set template default file ext

## Example - Student

### Static Resources

- goal?

while app.on("request") and req.method = "GET", first match the filename requested and the files in the in the public folder(where static resources are stored usually), once the matched file is found, use the fs module to read files and return the content in the file.
