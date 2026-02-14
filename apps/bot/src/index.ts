import 'dotenv/config';

import { Bot, session } from 'grammy';
import { generateUpdateMiddleware } from 'telegraf-middleware-console-time';

import { Config } from './config';
import type { MyContext } from './types';
import { createI18n } from './i18n';

const bot = new Bot<MyContext>(Config.authToken);

bot.use(generateUpdateMiddleware());
bot.use(session());
bot.use(createI18n());

bot.use(async (ctx) => {
  ctx.reply(ctx.t('hello'));
});
