# MongoDB

## connect

- start the service
  `net start mongodb`
- connect to the database
  `mongoose.connect(uri)`

## Create

- database
- collection
  User as the collection name for the following examples
- document
  1. create the document with mongoose.model constructor function
  2. save it in the database

## Read

### all

- `User.find([queries])`

### one

- `User.findOne([queries])`

### conditional

- greater than
  `$gt:20`
- less than
  `$lt:20`
- include
  `$in:20`
- queries
  `User.find()`.select('name', 'email', '-\_id')
- sort
  `User.find()`.sort('age')
  `User.find()`.sort('-age')

## Update

## Delete

- one
  `User.findOneAndDelete({queries})`
- many
  `deleteMany({queries})`
