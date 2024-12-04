"use client";

import React from 'react';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
  const { t } = useTranslation();

  return (<section id="advantages">
    <h2>{t('advantage_title')}</h2>       
    <ul>
        <li>{t('advantage_1')}</li>
        <li>{t('advantage_2')}</li>
        <li>{t('advantage_3')}</li>
        <li>{t('advantage_4')}</li>
        <li>{t('advantage_5')}</li>			 
    </ul>
</section>
  );
};

export default Advantages;