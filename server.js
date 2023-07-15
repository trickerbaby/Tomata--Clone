const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

// Replace with your own MongoDB connection string
const password = "Navya#1427";
const encodedPassword = encodeURIComponent("Navya#1427");
const uri = `mongodb+srv://trickerbaby:${encodedPassword}@cluster0.rq5ucba.mongodb.net/?retryWrites=true&w=majority`;

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}
run().catch(console.dir);



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = client.db("myDatabase");
    const usersCollection = db.collection("users");
 

    // Find a user with the specified username and password


    const user = await usersCollection.find({ username: username, password: password }).toArray();

    if (user.length === 0) {
      console.log("Unsuccessful login attempt");
      res.send({ success: false });
    } else {
      console.log("Successful login");
      res.send({ success: true });
    }
  } catch (err) {
    console.error(err);
    res.send({ success: false });
  }
});



app.post('/getrest', async (req, res) => {
  


  try {
    const db = client.db("myDatabase");
    const restcollection = db.collection("rests");
    demand = req.body['filter'];

    // Find a user with the specified username and password

        const ans = await restcollection.find(demand).toArray();

        console.log("demand is ",demand);
    if (ans.length === 0) {
      

      console.log("no data found");
      res.send({ success: false });
    } else {
      console.log("Successful login");
      console.log("sending ",ans);
      res.send(ans);
    }
  } catch (err) {
    console.error(err);
    res.send({ success: false });
  }
});





app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
