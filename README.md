
# 🌤️ Weather & Outfit Advisor

I want to introduce a sleek React-based app that fetches real-time weather data and suggests AI-powered outfit images based on current conditions. This app is built using weather data from OpenWeather API, outfit suggestion images from Unsplash API, and a custom Express backend.

## 📸 Demo
Here is the link to the app deployed on Vercel using Render as the backend service
https://weather-app-advisor.vercel.app/
---

## 🧰 Tech Stack Used

- **Frontend:** React + Vite  
- **Backend:** Express.js (Node.js)  
- **APIs:** OpenWeather, Unsplash  
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 🚀 Features

- 🌍 Search weather by city name  
- 📍 Get current temperature, condition, humidity, wind, and precipitation  
- 🔮 View 4-day forecast with dynamic emoji icons  
- 🧥 Outfit image suggestions based on temperature & condition using suggestions from Unsplashed
- 📱 Fully responsive layout  

---

## ⚙️ Installation (Local Setup)

### Frontend:

```bash
cd weather-outfit-advisor
npm install
npm run dev
```

### Backend:

```bash
cd server
npm install
node index.js
```

> Ensure `.env` contains:
```
UNSPLASH_ACCESS_KEY=your_unsplash_api_key
VITE_WEATHER_API_KEY=your_weather_api_key
```

---

## 🌐 Environment Variables

- **Frontend:** `VITE_WEATHER_API_KEY`  
- **Backend:** `UNSPLASH_ACCESS_KEY`

---

## 📦 Deployment

- **Frontend:** Vercel (auto-deploy from GitHub)  
- **Backend:** Render (run `node index.js`, no build step required)

---

## 🎨 UI Design

Wireframe inspired by: [Figma Wireframe](https://www.figma.com/proto/NeEsBP4RzqfcYcIPCW16JN/Weather-App-Landing-Page?node-id=1-225)

---

## Video demonstration

https://drive.google.com/file/d/1-qn3gFDPluIqI94FOSvaxLbapffabRDq/view?usp=sharing



