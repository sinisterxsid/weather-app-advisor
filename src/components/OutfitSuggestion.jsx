import React from 'react';
import './OutfitSuggestion.css';

const OutfitSuggestion = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="outfit-card">
      <img src={imageUrl} alt="AI Suggested Outfit" />
    </div>
  );
};

export default OutfitSuggestion;
