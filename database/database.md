# MongoDB

![mindmap]()

## Connect

- start the service
  `net start mongodb`
- import mongoose module
  `const mongoose = require("mongoose");`
- connect to the database
  `mongoose.connect(uri)`

## Create

- database
  `mongoose .connect("mongodb://localhost/playground")`
- collection
  User as the collection name for the following examples
  1. create collection schema
     `const userSchema = new mongoose.Schema({rules});`
  2. create a model with the schema rules
     `const User = mongoose.model("User", userSchema);`
- document
  1. Method 1: create the document with mongoose.model constructor function and save it in the database
     `const course = new Course({fields}); course.save();`
  2. Method 2: use modelName.create() method (return Promise)
     `Course.create({fields})`

## Import

- command line
  `mongoimport -d DBName -c CollectionName --file fileURL `
  `mongoimport -d playground -c users --file ./user.json`

## Read

- all
  `User.find([queries])`
- one
  `User.findOne([queries])`
- conditional
  1.  greater than
      `$gt:20`
  2.  less than
      `$lt:20`
  3.  include
      `$in:20`
  4.  queries
      `User.find()`.select('name', 'email', '-\_id')
  5.  sort
      `User.find()`.sort('age')
      `User.find()`.sort('-age')

## Update

- one
  `User.updateOne({queries}, {field to update})`
- many
- `User.updateMany({}, {age: 18})`

## Delete

- one
  `User.findOneAndDelete({queries})`
- many return {n:n, ok: 1}
  `deleteMany({queries})`

## Validation (no.176)

### type All

- required: true
- validate: {validator: v=> {v&&v.length >4}, message: "error"}
- default: Date.now

### type String

- type: String
- minlength: Number
- maxlength: Number
- trim: true
  `const postSchema = new Schema({ title: { type: String, required: true } });`
- enum: ['string1', 'string2']
  `category: {type: String, enum: ['html', 'css', 'javaScript']}`

### type Number

- type: Number
- min: Number range min limit
- max: Number range max limit

### type Date

- type: Date
- default: Date.now

### custom validation (no.177-178)

- validate: {validator: v=> {v&&v.length >4}, message: "error"}
- custom error message: `error.errors[att].properties.message`

## Model References

- User and Post model shares the same author, in postSchema
  ` author: { type: mongoose.Schema.Types.ObjectId, ref: "User", }`

## Note

1. One: for methods to find/update/delete one if there's multiple results matched, the first will be returned
