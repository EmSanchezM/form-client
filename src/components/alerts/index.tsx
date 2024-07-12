import { useEffect, useState } from 'react';

import { ALERT_KINDS } from '../../lib/constants/alerts.contstants';
import { toastAlert } from '../../lib/events/alert-events';

import CheckCircleIcon from '../icons/check-circle.icon';
import CrossCircleIcon from '../icons/cross-circle.icon';

import style from './alerts.module.css';

const ICONS = {
  [ALERT_KINDS.SUCCESS]: CheckCircleIcon,
  [ALERT_KINDS.ERROR]: CrossCircleIcon
};

const STYLES = {
  [ALERT_KINDS.SUCCESS]: style.success,
  [ALERT_KINDS.ERROR]: style.error
};

const Alert = () => {
  const alert = useAlert();

  if (!alert) return null;

  const Icon = ICONS[alert.kind];
  const className = STYLES[alert.kind];

  if (!Icon || !className) return null;

  return (
    <div className={className}>
      <Icon className={style.icon} />
      <p>{alert.message}</p>
    </div>
  );
};

const useAlert = () => {
  const [alert, setAlert] = useState<{ kind: string; message: string } | undefined>();

  useEffect(() => {
    if (!alert) return;

    const timeoutId = setTimeout(() => setAlert(undefined), 2500);

    return () => clearTimeout(timeoutId);
  }, [alert]);

  useEffect(() => {
    const callback = (alertData: { kind: string; message: string } | undefined) => setAlert(alertData);

    const handler = toastAlert.subscribe(callback);

    return () => toastAlert.unsubscribe(handler);
  }, []);

  return alert;
};

export default Alert;