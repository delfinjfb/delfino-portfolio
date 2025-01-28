import { fetchPortfolioEntries } from '@/utils/contentful';
import Image from 'next/image';

export default async function HomePage() {
  const portfolioEntries = await fetchPortfolioEntries();

  if (!portfolioEntries || portfolioEntries.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Delfino Portfolio</h1>
        <p className="text-gray-500">No portfolio entries found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Delfino Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioEntries.map((entry, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            {entry.imageUrl && (
              <Image
                src={`https:${entry.imageUrl}`}
                alt={entry.siteTitle || 'Portfolio Image'}
                width={400}
                height={300}
                className="rounded-lg"
              />
            )}
            <h2 className="text-xl font-bold text-white mt-2">
              {entry.siteTitle}
            </h2>
            <p className="text-gray-300 mt-2">{String(entry.description)}</p>
            <div className="mt-2">
              {entry.tags &&
                typeof entry.tags === 'string' &&
                entry.tags.split(' ').map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 text-white text-sm rounded px-2 py-1 mr-2"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
