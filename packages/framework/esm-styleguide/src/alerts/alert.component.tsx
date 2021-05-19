import React from "react";
import { ToastNotification } from "carbon-components-react";

const defaultOptions = {
  millis: 4000,
};

export interface AlertProps {
  alert: AlertNotification;
  closeAlert(): void;
}

export interface AlertDescriptor {
  millis?: number;
  kind?: string;
  title?: string;
  description?: React.ReactNode;
  caption?: React.ReactNode;
  iconDescription: string;
  timeout?: number;
}

export interface AlertNotification extends AlertDescriptor {
  id: number;
}

export type AlertType =
  | "error"
  | "info"
  | "info-square"
  | "success"
  | "warning"
  | "warning-alt";

export const Alert: React.FC<AlertProps> = ({ alert, closeAlert }) => {
  const {
    millis = defaultOptions.millis,
    kind,
    title,
    description,
    caption,
    iconDescription,
    timeout,
  } = alert;
  const [waitingForTime, setWaitingForTime] = React.useState(true);

  React.useEffect(() => {
    if (waitingForTime) {
      const timeoutId = setTimeout(closeAlert, millis);
      return () => clearTimeout(timeoutId);
    }
  }, [waitingForTime]);

  return (
    <div
      onMouseEnter={() => setWaitingForTime(false)}
      onMouseLeave={() => setWaitingForTime(true)}
    >
      <ToastNotification
        caption={caption || ""}
        subtitle={description}
        title={title || ""}
      />
    </div>
  );
};
