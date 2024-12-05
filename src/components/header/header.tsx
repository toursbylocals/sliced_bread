"use client";

import '../../app/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">        
            <div className="logo">
                <h1 className="text-lg font-bold">Blue Water</h1>
            </div>          
            <nav className="space-x-6">
                <a
                    href="#advantages"
                    className="text-white hover:text-gray-300"
                >
                    {t('nav_advantages')}
                </a>
                <a
                    href="#order"
                    className="text-white hover:text-gray-300"
                >
                    {t('nav_order')}
                </a>
            </nav>         
            <div className="language-selector">
                <select
                    onChange={handleLanguageChange}
                    defaultValue="en"
                    className="bg-white text-black border border-gray-300 rounded p-2"
                >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>
        </header>
    );
};