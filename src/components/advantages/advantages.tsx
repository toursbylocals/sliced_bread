"use client";

import React from 'react';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

export default function Advantages() {
    const { t } = useTranslation();

    return (
        <section id="advantages" className="py-10 px-5 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-5">{t('advantage_title')}</h2>
            <ul className="list-disc pl-8 space-y-3 inline-block text-left">
                <li className="text-lg">{t('advantage_1')}</li>
                <li className="text-lg">{t('advantage_2')}</li>
                <li className="text-lg">{t('advantage_3')}</li>
                <li className="text-lg">{t('advantage_4')}</li>
                <li className="text-lg">{t('advantage_5')}</li>
            </ul>
        </section>
    );
};
