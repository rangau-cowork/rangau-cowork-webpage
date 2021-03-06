import React from 'react';

import Link from 'next/link';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-emerald-400 xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Wir sind eine Initiative, die sich für Coworking im Rangau stark
          macht. Dabei verstehen wir uns als{' '}
          <span className="font-bold underline decoration-2 decoration-emerald-400">
            zentraler Ansprechpartner für alle Coworking-Begeisterten der Region
          </span>
          . Durch Analysen, Gespräche und Veranstaltungen evaluieren wir
          vorhandene Potenziale und unterstützen aufkeimende Initiativen.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href={mainHero.primaryAction.href} passHref>
              <a
                target={mainHero.primaryAction.target}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-emerald-400 hover:bg-border hover:text-emerald-400 md:py-4 md:text-lg md:px-10 shadow-md`}
              >
                {mainHero.primaryAction.text}
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-emerald-400 text-secondary bg-background hover:bg-border hover:text-emerald-400 md:py-4 md:text-lg md:px-10 shadow-md`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
