
export default async function handler(req, res) {
  const { NEXT_TIKTOK_CLIENT_KEY, NEXT_TIKTOK_CLIENT_SECRET } = process.env;

  try {
    // Get an access token using your client key and client secret
    const response = await fetch('https://open-api.tiktok.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: NEXT_TIKTOK_CLIENT_KEY,
        app_secret: NEXT_TIKTOK_CLIENT_SECRET
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch TikTok access token');
    }

    const data = await response.json();
    const accessToken = data.access_token;

    const video = await fetch(`https://api.tiktok.com/aweme/v1/trending/feed/?count=30&access_token=${accessToken}`);

    if (!video.ok) {
      throw new Error('Failed to fetch TikTok videos');
    }
    const datas = await video.json();
    const videos = datas.aweme_list;

    const selectedVideo = videos[Math.floor(Math.random() * videos.length)];
    const author = selectedVideo.author;
    const username = author.unique_id.replace(/\s/g, '');
    const videoId = selectedVideo.aweme_id;

    const url = `https://www.tiktok.com/embed/v2/${videoId}?lang=en-US&author=${username}&embedType=widget`;

    const iframeCode = `<iframe src="${url}" width="360" height="640" frameborder="0"></iframe>`;
    res.status(200).send({ iframeCode });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}