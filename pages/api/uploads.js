// pages/api/uploads.js
import clientPromise from '../../lib/mongodb';
import formidable from 'formidable-serverless';
import { ObjectId } from 'mongodb';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since formidable will handle it
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/uploads'); // Ensure this directory exists
  form.keepExtensions = true; // Keep file extensions

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const file = files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      // Save file to the database or file system as needed
      const client = await clientPromise;
      const db = client.db('test');

      // Example: Save file metadata to the database
      const result = await db.collection('uploads').insertOne({
        filename: file.name,
        filepath: file.path,
        createdAt: new Date(),
      });

      res.status(200).json({
        url: `/uploads/${file.name}`, // The URL to access the uploaded file
        id: result.insertedId,
      });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
