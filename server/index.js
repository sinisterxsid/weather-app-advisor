const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/generate-outfit', async (req, res) => {
  const { temp, condition } = req.body;

  // Determine season context
  let season = '';
  if (temp >= 30) {
    season = 'hot summer';
  } else if (temp >= 20) {
    season = 'warm spring';
  } else if (temp >= 10) {
    season = 'cool autumn';
  } else {
    season = 'cold winter';
  }

  // Smarter query
  const query = `${season} street fashion outfit, ${condition} weather, stylish clothing`;
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        per_page: 10,
        orientation: 'portrait',
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    const results = response.data.results;
    if (!results.length) throw new Error('No images found');

    const randomImage = results[Math.floor(Math.random() * results.length)];
    const imageUrl = randomImage.urls.regular;

    res.json({ imageUrl });
  } catch (error) {
    console.error('❌ Unsplash API error:', error.message);
    res.status(500).json({ error: 'Image fetch failed' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
