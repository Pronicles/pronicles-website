// pages/api/blogPosts/[id].js
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const client = await clientPromise;
  const db = client.db('test');

  try {
    if (req.method === 'GET') {
      // Handle GET request to fetch the post by ID
      const post = await db.collection('blogPosts').findOne({ _id: new ObjectId(id) });
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } else if (req.method === 'PUT') {
      const { title, content, date } = req.body;

      // Basic validation
      if (!title || !content || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const result = await db.collection('blogPosts').updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, content, date } } // Explicitly set the fields
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json({ message: 'Post updated successfully', _id: id, title, content, date }); // Include a message and the ID
    } else if (req.method === 'DELETE') {
      const result = await db.collection('blogPosts').deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(204).end();
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }  catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
