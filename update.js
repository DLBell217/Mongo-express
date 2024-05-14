const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Admin:Admin@firstcluster.xdrvkoh.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster";
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
      const database = client.db('students');
      const collection = database.collection('student');
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      await collection.updateOne({"name": "dude"}, {"course": "new course"})
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
    client.close();
  }
  
  run().catch(console.dir);