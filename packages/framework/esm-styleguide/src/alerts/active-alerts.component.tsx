import React from "react";
import { Subject } from "rxjs";
import { Alert, AlertNotification } from "./alert.component";

interface ActiveAlertsProps {
  subject: Subject<AlertNotification>;
}

const ActiveAlerts: React.FC<ActiveAlertsProps> = ({ subject }) => {
  const [alerts, setAlerts] = React.useState<Array<AlertNotification>>([]);

  const closeAlert = React.useCallback((alert) => {
    setAlerts((alerts) => alerts.filter((alert) => alert !== alert));
  }, []);

  React.useEffect(() => {
    const subscription = subject.subscribe((toast) =>
      setAlerts((alerts) => [
        ...alerts.filter(
          (alert) =>
            alert.title !== alert.title ||
            alert.kind !== alert.kind ||
            alert.caption !== alert.caption ||
            alert.description !== alert.description
        ),
        toast,
      ])
    );

    return () => subscription.unsubscribe();
  }, [subject]);

  return (
    <>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          alert={alert}
          closeAlert={() => closeAlert(alerts)}
        />
      ))}
    </>
  );
};

export default ActiveAlerts;
