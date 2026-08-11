import 'server-only';

export type Locale = 'en' | 'ar';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  if (locale === 'ar') {
    return dictionaries.ar();
  }
  return dictionaries.en();
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;
