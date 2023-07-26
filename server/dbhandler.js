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

app.get('/',(req,res)=>
{
    console.log("welcome to db handler");
    res.send("welcome to db handler");
}
);

app.get('/insert', async (req, res) => {

  try {
    const db = client.db("myDatabase");
    const restcollection = db.collection("rests");

    const rest = [
        { name: 'pind punjabi',rate:4.5,src:'https://b.zmtcdn.com/data/pictures/5/18974175/781235a2fc0c1b51ec63f4932c5ec386_o2_featured_v2.jpg?output-format=webp' ,cat:'nonveg'},
        { name: 'gola paties and confectioners',rate:3.5,src:'https://b.zmtcdn.com/data/pictures/8/19003968/d217c15402ce3ef6b44194063a77cbc8_o2_featured_v2.jpg?output-format=webp',cat:'veg' },
        { name: 'Mazeed Restaurant',rate:5,src:'https://b.zmtcdn.com/data/pictures/5/19921035/6862f1b5d21c3d756c3c744eaf6df5c3_o2_featured_v2.jpg?output-format=webp' ,cat:'nonveg'},
        { name: 'Brijwasi Centrum',rate:4.8,src:'https://b.zmtcdn.com/data/pictures/0/19026950/47cfd4569b70e288db6e2d8402d77df7_o2_featured_v2.jpeg?output-format=webp',cat:'veg'}
      ];
  
      const pizzas = [
        { name: 'Shankar and Modi Bakers Zone',rate:4, src: 'https://b.zmtcdn.com/data/dish_photos/c45/9c15b196a67a3401f6374c3e12252c45.jpg',cat:'veg' },
        { name: 'Dominos Pizza' ,rate:5,src: 'https://b.zmtcdn.com/data/dish_photos/643/32ef0972970366efec1fd0838705a643.png',cat:'veg'},
        { name: 'Bansal Bakers',rate:4.3,src:'https://b.zmtcdn.com/data/pictures/5/20306815/a36a3bd156e21877a2091ad78550dc61_o2_featured_v2.jpg',cat:'veg'},
        { name: 'Pizza Hut',rate:3.6,src:'https://b.zmtcdn.com/data/dish_photos/72c/69354100c2391f3dda1623d60e99572c.jpg',cat:'veg'}
      ];


    // Find a user with the specified username and password
    restcollection.insertMany(pizzas);
    restcollection.insertMany(rest);
    res.send("success!");

  } catch (err) {
    console.error(err);
    res.send({ success: false });
  }
});



app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
