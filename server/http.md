# Http and server

## Create a web server

- require http module
- setup callbacks to respond through requests events
- listen to the port for services

## Http protocols

- rules for how server response to clients' requests
- both responses and requests included headers
- `app.on('request', (req,res=>{}))`

whenever there is a request event happen, a callback function can be used to respond to it and the request info can be accessed through the request object

## Headers

- the data included in the requests and responses
- request:

  1. method
  2. url
  3. request info

- response:
  1. status code
  2. content info( type,length)

## Request info

- GET:

  1. included in the uri
  2. use url module's parse() to extract req.url

- POST:
  1. to get the data tranferred through post request
  2. it can be accessed through data event in the req body
     `req.on('data', chunk=>{})`
  3. once data transferred is done, the end event is called and can be used to acess the result data
     `req.on('end',()=>{console.log(querystring.parse(postData));});`

## Route

the mapping relations between the requests and responses

- use url.parse() method to parse the req.url into object
  `{pathname} = url.parse(req.url)`

## Static resources

- files like css js html image
  they are usually inside the public folder
- first to see if can find a file name match the url and use fs module to read the file and return back the result

## Dynamic resources

same url responds with different pages to different request

## How client side make requests

- Get method:
  1. through address url
  2. link tag's href attribute
  3. script tag's src attribute
  4. img tag's src attribute
  5. form tag with get method
- Post method
  1. form tag with post method
