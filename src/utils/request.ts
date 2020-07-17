export const getRequestInJSON = (url: string) => {
  return fetch(url).then((response) => response.json());
};
