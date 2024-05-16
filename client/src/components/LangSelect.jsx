import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const LanguageSelect = () => {
    const [t, i18n] = useTranslation("global");

    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Boshlang'ich til ingliz tilini tanlash
  
    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
      if(e.target.value === "en"){
        handlechangeLanguage("en")
      }
      if(e.target.value === "uz"){
        handlechangeLanguage("uz")
      }
      if(e.target.value === "ru"){
        handlechangeLanguage("ru")
      }
    }
  return (
    <div>
      <h3>Select Your Language:</h3>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="uz">French</option>
            <option value="ru">Spanish</option>
          </select>
      <p>Selected Language: {t(selectedLanguage)}</p>
    </div>
  );
};

export default LanguageSelect;
