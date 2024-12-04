"use client";

import React from 'react';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

export default function Foooter() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div>&copy; 2024 {t('copyright')}</div>
        </footer>
    );
};