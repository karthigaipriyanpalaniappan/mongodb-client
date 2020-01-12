
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noahsuperadmin:********@cluster0-7cgkm.mongodb.net/noahdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("noahdb").collection("questions");
  
  var query = { address: "Highway 37" };
    
  collection.find(query).toArray(function(err, result) {
    if (err) throw err;
      console.log(result);
  });

  client.close();
  
});