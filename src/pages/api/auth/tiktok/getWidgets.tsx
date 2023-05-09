
export default async function handler(req, res) {
  const { NEXT_TIKTOK_CLIENT_KEY, NEXT_TIKTOK_CLIENT_SECRET } = process.env;

  try {
    // Get an access token using your client key and client secret
    const response = await fetch('https://www.tiktok.com/node/share/discover?noUser=1&count=10');

    if (!response.ok) {
      throw new Error('Failed to fetch TikTok videos');
    }

    const data = await response.json();

    // Extracting information about the first video
    const widgets: Array<any> = data.body[0].exploreList;

    // Outputting the TikTok link as JSON
    res.status(200).send(widgets);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}