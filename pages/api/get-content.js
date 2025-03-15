import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('test'); // Make sure 'yourdatabase' is your actual database name

      const content = await db.collection('blogPosts').find({}).toArray();

      res.status(200).json({ content });
    } catch (error) {
      console.error('Error fetching content:', error); // Log error details
      res.status(500).json({ error: 'Error fetching content' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
