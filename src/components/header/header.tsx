"use client";

import '../../app/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;

    i18n.changeLanguage(selectedLanguage);
  };

  return (<header>
    <div className="logo">
        <h1>Blue Water</h1>
    </div>
    <nav>
        <a href="#advantages">{t('nav_advantages')}</a>
        <a href="#order">{t('nav_order')}</a>        
    </nav>
    <div className="language-selector">
        <select onChange={handleLanguageChange} defaultValue="en">
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div> 
</header>
  );
};

export default Header;