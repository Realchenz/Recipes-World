const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const uri = 'mongodb://localhost:27017';
const dbName = 'userDB';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function importJSON() {
    try {
      // Connect to the MongoDB server
      await client.connect();
      console.log('Connected to MongoDB server');
  
      const db = client.db(dbName);
      const collection = db.collection('users');
  
      // Read JSON file
      const filePath = path.join(__dirname, 'users.json');
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Hash passwords before inserting into the database
    jsonData.forEach(user => {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
        user.password = hashedPassword;
    });
  
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



