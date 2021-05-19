import React from "react";
import { render } from "react-dom";
import { Subject } from "rxjs";
import isEmpty from "lodash-es/isEmpty";
import ActiveAlerts from "./active-alerts.component";
import { AlertDescriptor, AlertNotification } from "./alert.component";

const alertsSubject = new Subject<AlertNotification>();
let alertId = 0;

export function renderAlerts(target: HTMLElement | null) {
  if (target) {
    render(<ActiveAlerts subject={alertsSubject} />, target);
  }
}

function isNotEmpty(description: React.ReactNode) {
  return typeof description === "string"
    ? description.trim().length > 0
    : typeof description === "object"
    ? !isEmpty(description)
    : false;
}

export function showAlert(alert: AlertDescriptor) {
  if (alert && isNotEmpty(alert.description)) {
    setTimeout(() => {
      // always use in subsequent cycle
      alertsSubject.next({
        ...alert,
        id: alertId++,
      });
    }, 0);
  } else {
    console.error(
      `showAlert must be called with an object having a 'description' property that is a non-empty string or object`
    );
  }
}
