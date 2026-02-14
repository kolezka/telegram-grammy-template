import { I18n } from '@grammyjs/i18n';
import { MyContext } from './types';

export const createI18n = () => {
  return new I18n<MyContext>({
    defaultLocale: 'en',
    directory: 'src/locales',
    useSession: true,
    fluentBundleOptions: {
      useIsolating: false,
    },
    localeNegotiator: (ctx) => {
      // Try Telegram language code
      if (ctx.from?.language_code) {
        const code = ctx.from.language_code.toLowerCase();
        // Map supported codes
        if (code === 'en' || code.startsWith('en-')) return 'en';
        if (code === 'pl' || code.startsWith('pl-')) return 'pl';
      }
      // 4. Default fallback
      return 'en';
    },
  });
};
