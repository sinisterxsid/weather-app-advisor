export const getAIOutfitImage = async (temp, condition) => {
  try {
    const res = await fetch('https://weather-app-advisor-backend.onrender.com/generate-outfit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ temp, condition }),
    });

    const data = await res.json();
    return data.imageUrl;
  } catch (err) {
    console.error('Image fetch error:', err.message);
    return null;
  }
};
