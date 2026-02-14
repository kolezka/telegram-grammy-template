import 'dotenv/config';

import { Bot, session } from 'grammy';
import { generateUpdateMiddleware } from 'telegraf-middleware-console-time';
import { hydrateFiles } from '@grammyjs/files';
import { ignoreOld } from 'grammy-middlewares';

import { Config } from './config';
import type { MyContext } from './types';
import { createI18n } from './i18n';

const bot = new Bot<MyContext>(Config.authToken);

bot.api.config.use(hydrateFiles(bot.token));

bot.use(ignoreOld());
bot.use(generateUpdateMiddleware());
bot.use(session());
bot.use(createI18n());

bot.use(async (ctx) => {
  ctx.reply(ctx.t('hello'));
});

async function handleShutdown(signal: string) {
  console.debug(`bot.stop() by ${signal}`);
  await bot.stop();
  process.exit(0);
}

process.once('SIGINT', () => handleShutdown('SIGINT'));
process.once('SIGTERM', () => handleShutdown('SIGTERM'));

bot
  .start({
    onStart: (botInfo) => console.debug(`Bot started: ${botInfo.username}`)
  })
  .catch((error) => {
    console.error(`Error at bot.start(): ${error}`);
  })
 