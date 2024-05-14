const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Admin:Admin@firstcluster.xdrvkoh.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("students");
    const collection = database.collection("student");
    let item = collection.find({ _id: 3 });
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log(item);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
  client.close();
}

run().catch(console.dir);
