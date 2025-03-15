import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('test'); // Replace 'yourdatabase' with your actual database name

      const content = req.body.content;

      const result = await db.collection('blogPosts').insertOne({ content });

      res.status(201).json({ message: 'Content saved successfully', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: 'Error saving content' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
