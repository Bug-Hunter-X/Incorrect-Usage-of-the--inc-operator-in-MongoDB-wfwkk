```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("652057759821")},{$inc:{incorrectField:"1"}})
```