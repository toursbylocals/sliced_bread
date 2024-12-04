"use client";

import React from 'react'
import Advanteges from '../components/advantages/advantages'
import OrderForm from '../components/orderform/orderform'
import './i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="hero">
        <div className="overlay">
          <h1>{t('slogan')}</h1>
        </div>
	    </div>
      <Advanteges /> 
      <OrderForm />        
    </div>
  )
}
