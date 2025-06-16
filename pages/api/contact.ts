import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Set this in your environment variables
const dbName = process.env.MONGODB_DB as string; // Set this in your environment variables

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return res.status(200).json({ message: 'Message received and saved successfully', name, email, userMessage: message });
  } catch (error) {
    return res.status(500).json({ message: 'Error saving message', error: (error as Error).message });
  }
}