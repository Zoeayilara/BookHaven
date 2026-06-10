import { Handler } from '@netlify/functions';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const mediaData = JSON.parse(event.body || '{}');
    
    // Get current file from GitHub
    const owner = process.env.GITHUB_OWNER || '';
    const repo = process.env.GITHUB_REPO || '';
    const path = 'client/public/media-content.json';
    
    let sha = '';
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
      });
      if ('sha' in data) {
        sha = data.sha;
      }
    } catch (error) {
      // File doesn't exist yet
    }

    // Update file in GitHub
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'Update media content',
      content: Buffer.from(JSON.stringify(mediaData, null, 2)).toString('base64'),
      sha: sha || undefined,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Save error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Save failed' }),
    };
  }
};
