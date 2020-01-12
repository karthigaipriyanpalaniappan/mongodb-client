
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noahsuperadmin:********@cluster0-7cgkm.mongodb.net/noahdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("noahdb").collection("questions");
  
  var delQuery = { address: "Highway 40" };
    
  collection.deleteOne(delQuery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });

  client.close();
  
});
