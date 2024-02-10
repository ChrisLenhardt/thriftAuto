import * as mongoose from 'mongoose';
import { MongoClient } from "mongodb";
// connect to database
const uri = 'mongodb+srv://chriselenhardt:Cl02082005@cluster0.t5zyoxr.mongodb.net/';
await mongoose.connect(uri);
const client = new MongoClient(uri);



const db = client.db("Cluster0");
const cars = db.collection("cars");

var cursor = cars.find();
// for await (const doc of cursor) {
//     console.dir(doc);
//   }
  Bun.serve({
    port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    fetch(req) {
      if (req.url.includes("http://localhost:8080/vehicle/")) {
        let $make = req.url.split("http://localhost:8080/vehicle/")[1];
        cursor = cars.find({ make : "Civic" })
        return new Response();
      } else {
        throw new Error("404");
      }
    },
  });
  