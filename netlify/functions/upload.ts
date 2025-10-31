import { Handler } from '@netlify/functions';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { file, type } = JSON.parse(event.body || '{}');
    
    if (!file) {
      return { statusCode: 400, body: JSON.stringify({ error: 'No file provided' }) };
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file, {
      resource_type: type === 'audio' ? 'video' : 'image',
      folder: 'bookhaven',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: result.secure_url }),
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Upload failed' }),
    };
  }
};
