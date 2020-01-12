
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noahsuperadmin:********@cluster0-7cgkm.mongodb.net/noahdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("noahdb").collection("questions");
  
  var myobj = { name: "Company Inc", address: "Highway 40" };
    
  collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  client.close();
  
});
