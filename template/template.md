# Static Resources

## goal

while app.on("request") and req.method = "GET", first match the filename requested and the files in the in the public folder(where static resources are stored usually), once the matched file is found, use the fs module to read files and return the content in the file.
