'use client';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{t('welcome')}</h1>
      <p className="text-lg mt-4">{t('description')}</p>
    </div>
  );
}
