const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'userInfoDB';

async function importJSON() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection('userinfos');

    // Read JSON file
    const filePath = path.join(__dirname, 'userinfos.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Insert JSON data into MongoDB
    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} documents were inserted`);

  } catch (error) {
    console.error('Error importing JSON data:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

importJSON();
