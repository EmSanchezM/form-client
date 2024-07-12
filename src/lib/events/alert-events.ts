import { ALERT_KINDS } from "../constants/alerts.contstants";

const EVENT_NAME = "alert";

const subscribe = (callback) => {
  const handler = (ev) => callback(ev.detail);

  document.addEventListener(EVENT_NAME, handler);

  return handler;
};
const unsubscribe = (handler) =>
  document.removeEventListener(EVENT_NAME, handler);

const emitEvent = (kind: string, message: string) => {
  const event = new CustomEvent(EVENT_NAME, {
    detail: { kind, message },
  });

  document.dispatchEvent(event);
};

const success = (message: string) => emitEvent(ALERT_KINDS.SUCCESS, message);
const error = (message: string) => emitEvent(ALERT_KINDS.ERROR, message);

export const toastAlert = {
  success,
  error,
  subscribe,
  unsubscribe,
};
