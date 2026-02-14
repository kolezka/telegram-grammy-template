import { Context, SessionFlavor } from 'grammy';
import { I18nFlavor } from '@grammyjs/i18n';
import { FileFlavor } from '@grammyjs/files'

export type SessionData = {
  // Add session properties
};

export type MyContext<C extends Context = Context> = FileFlavor<C> &
  SessionFlavor<SessionData> &
  I18nFlavor;
