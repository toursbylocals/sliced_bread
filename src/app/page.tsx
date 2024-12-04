"use client";

import React from 'react';
import Advantages from '../components/advantages/advantages';
import OrderForm from '../components/orderform/orderform';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="hero relative h-[60vh] bg-blue-500 flex justify-center items-center text-white">
                <div className="overlay absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center px-4">{t('slogan')}</h1>
            </div>
            <section className="py-16">
                <Advantages />
            </section>
            <section className="py-16">
                <OrderForm />
            </section>
        </div>
    );
}
