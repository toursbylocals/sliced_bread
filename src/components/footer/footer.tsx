"use client";

import React from 'react';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (<footer>
		<div>&copy; 2024 {t('copyright')}</div>
	</footer>
  );
};

export default Footer;