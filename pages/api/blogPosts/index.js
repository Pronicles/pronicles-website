// pages/api/blogPosts/index.js
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('test');

    try {
        if (req.method === 'POST') {
            const { title, content, date } = req.body;

            // Basic validation
            if (!title || !content || !date) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const result = await db.collection('blogPosts').insertOne({ title, content, date });

            // Ensure result is accessed correctly
            if (!result || !result.insertedId) {
                throw new Error('Failed to insert new post');
            }

            res.status(201).json({ _id: result.insertedId, title, content, date });
        } else if (req.method === 'GET') {
            try {
                const posts = await db.collection('blogPosts').find({}).sort({ date: -1 }).toArray();
                res.status(200).json(posts);
            } catch (getError) {
                console.error('Error fetching posts:', getError);
                return res.status(500).json({ error: 'Failed to fetch blog posts' });
            }
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
