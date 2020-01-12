
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noahsuperadmin:********@cluster0-7cgkm.mongodb.net/noahdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("noahdb").collection("questions");

  var myquery = { address: "Highway 39" };
  var newvalues = { $set: {name: "Mickey", address: "Highway 39" } };

  collection.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  client.close();
  
});