'use client';

import { useTranslation } from 'next-i18next';
import { fetchPortfolioEntries } from '@/utils/contentful';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PortfolioEntry } from '@/utils/contentful';

export default function HomePage() {
  const { t } = useTranslation();
  const [portfolioEntries, setPortfolioEntries] = useState<PortfolioEntry[]>(
    [],
  );

  useEffect(() => {
    async function fetchData() {
      const entries: PortfolioEntry[] = await fetchPortfolioEntries();
      setPortfolioEntries(entries);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioEntries.length > 0 ? (
          portfolioEntries.map((entry, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              {entry.imageUrl && (
                <Image
                  src={entry.imageUrl ?? '/fallback.jpg'} // Fallback image if `imageUrl` is null
                  alt={entry.siteTitle}
                  width={300} // Set appropriate dimensions
                  height={200}
                  layout="responsive"
                />
              )}
              <h2 className="text-xl font-bold mt-2">{entry.siteTitle}</h2>
              <p className="text-gray-700 mt-2">{entry.description}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500">⚠️ No portfolio entries found!</p>
        )}
      </div>
    </div>
  );
}
