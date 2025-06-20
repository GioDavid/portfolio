import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './i18n';

export async function createTranslation(lng: string, ns: string = 'common') {
  const i18n = createInstance();
  await i18n
    .use(initReactI18next)
    .init(getOptions(lng, ns));

  return {
    t: i18n.t,
    i18n,
  };
} 