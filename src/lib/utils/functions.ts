export const debounce = (callback: (arg0: any) => void, delay: number | undefined) => {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (event: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(event);
    }, delay);
  };
};