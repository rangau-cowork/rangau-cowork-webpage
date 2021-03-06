import React, { useState } from 'react';

import config from '../config/index.json';

const Features = () => {
  const [showAllDescription, setShowAllDescription] = useState(false);

  const { features } = config;
  const { title, subtitle } = features;
  return (
    <div className={`py-12 bg-background min-h-1/2`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-emerald-400 font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            In Städten ist Coworking längst etabliert. Coworking auf dem Land
            bietet viel unerschöpftes Potential. Gerade im{' '}
            <span className="font-bold underline decoration-2 decoration-emerald-400">
              Rangau fehlt ein solches zukunftsweisendes Angebot
            </span>{' '}
            bisher.
            <div
              className={
                showAllDescription
                  ? 'hidden text-sm text-emerald-400 hover:underline cursor-pointer'
                  : 'text-sm text-emerald-400 hover:underline cursor-pointer'
              }
              onClick={() => setShowAllDescription(!showAllDescription)}
            >
              Mehr...
            </div>
            <div className={showAllDescription ? '' : 'hidden'}>
              Die Bedürfnisse der beteiligten Akteure sind jedoch vielfältig und
              bringen deshalb ein breites Spektrum an Herausforderungen mit
              sich. Die Interessen von{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Nutzern
              </span>
              ,{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Gründern
              </span>{' '}
              und{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Betreibern
              </span>{' '}
              haben für uns die gleiche Relevanz wie die Belange von{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Politik
              </span>{' '}
              und{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Zivilgesellschaft
              </span>
              . Auch{' '}
              <span className="font-bold underline decoration-2 decoration-emerald-400">
                Investoren
              </span>{' '}
              und Unternehmen auf der Suche nach Arbeitsorten für ihre
              Angestellten binden wir aktiv ein.
              <br />
              Wir kennen die Wünsche aller Beteiligten und bieten Lösungen für
              deren spezifische Anforderungen zum Coworking im Rangau.
            </div>
            <div
              className={
                showAllDescription
                  ? 'text-sm text-emerald-400 hover:underline cursor-pointer'
                  : 'hidden text-sm text-emerald-400 hover:underline cursor-pointer'
              }
              onClick={() => setShowAllDescription(!showAllDescription)}
            >
              Weniger...
            </div>
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div
                  className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-emerald-400 border-4`}
                >
                  <img
                    className={`inline-block h-6 w-6 rounded-full`}
                    src="/assets/images/location-marker.svg"
                    alt="location"
                  />
                  {''}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Lokal
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Wir wissen, wie Coworking auch außerhalb von Städten
                funktioniert. Eine starke{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  Bindung an die lokale Wirtschaft
                </span>{' '}
                ist ein Kernfaktor zum Erfolg. Der Rangau bietet mit seiner
                vielfältigen Wirtschaftskraft enormes Potential in allen
                Aspekten regionaler Wertschöpfung.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div
                  className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-emerald-400 border-4`}
                >
                  <img
                    className={`inline-block h-6 w-6 rounded-full`}
                    src="/assets/images/chip.svg"
                    alt="chip"
                  />
                  {''}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Digital
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Digitale Konzepte weisen den Weg in die Zukunft und ermöglichen
                räumlich flexibilisiertes Arbeiten. Mit unserer Expertise
                ermöglichen wir die effiziente,{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  digitale Lösung von Problemstellungen
                </span>{' '}
                in Coworking-Spaces.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div
                  className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-emerald-400 border-4`}
                >
                  <img
                    className={`inline-block h-6 w-6 rounded-full`}
                    src="/assets/images/chat-alt-2.svg"
                    alt="chat"
                  />
                  {''}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Sozial
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Wir sind davon überzeugt, dass Coworking-Projekte auf dem Land
                nur in Gemeinschaft funktionieren. Deshalb setzen wir uns dafür
                ein, dass alle Interessensgruppen in die Entwicklung einbezogen
                werden.{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  Starke Dorfgemeinschaften
                </span>{' '}
                und ein{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  aktives Vereinsleben
                </span>{' '}
                bieten beste Voraussetzungen für Coworking-Projekte im Rangau.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div
                  className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-emerald-400 border-4`}
                >
                  <img
                    className={`inline-block h-6 w-6 rounded-full`}
                    src="/assets/images/globe.svg"
                    alt="globe"
                  />
                  {''}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Nachhaltig
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Für uns ist Nachhaltigkeit nicht nur ein Trend. Mit Beratung und
                Betreuung über die Gründungsphase hinaus schaffen wir{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  langfristigen Mehrwert
                </span>{' '}
                für alle Coworking-Akteure.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
