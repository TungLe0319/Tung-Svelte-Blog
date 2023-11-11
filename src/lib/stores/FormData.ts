
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
interface FormData {
  id: string;
  title: string;
  img: string;
  subtitle: string;
  content: string;
  categories: string[]; // Array of selected categories
  published: boolean;
}

const initialFormData: FormData = {
  id: "",
  title: "",
  img: "",
  subtitle: "",
  content: "",
  categories: [],
  published: false,
};

export const formData: Writable<FormData> = writable(initialFormData);

export function updateFormData(newData: FormData) {
  formData.set(newData);
}
