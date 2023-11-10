// lib/notification.ts
import { writable } from "svelte/store";

type Notification = {
  color:
    | "default"
    | "form"
    | "none"
    | "red"
    | "gray"
    | "yellow"
    | "green"
    | "indigo"
    | "purple"
    | "pink"
    | "blue"
    | "light"
    | "dark"
    | "dropdown"
    | "navbar"
    | "navbarUl"
    | "primary"
    | "orange";
  message: string;
};

export const notifications = writable<Notification[]>([]);

export function toast(notification: Notification) {
  notifications.update((state) => [notification, ...state]);
  setTimeout(removeToast, 2000);
}

function removeToast() {
  notifications.update((state) => {
    return state.slice(0, state.length - 1);
  });
}
