'use client';

import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng); // ✅ Using i18n here
      router.push(`/${lng}`);
    }
  };

  return (
    <div className="flex space-x-2">
      {['en', 'fr', 'es'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-3 py-1 rounded ${
            i18n.language === lng
              ? 'bg-blue-700 text-white'
              : 'bg-gray-300 text-black'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
