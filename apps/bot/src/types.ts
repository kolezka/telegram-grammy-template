import { Context, SessionFlavor } from 'grammy';
import { I18nFlavor } from '@grammyjs/i18n';

export type SessionData = {
  // Add session properties
};

export type MyContext<C extends Context = Context> = C &
  SessionFlavor<SessionData> &
  I18nFlavor;
