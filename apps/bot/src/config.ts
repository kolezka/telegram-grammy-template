import { readEnvironmentVariable } from '@kolezka/utils';

export const Config = {
  authToken: readEnvironmentVariable('TELEGRAM_BOT_TOKEN'),
} as const;
