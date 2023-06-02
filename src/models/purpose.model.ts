export const BASE_URL = '/data';

export const purposeModel = {
  get: () => fetch(`${BASE_URL}/mock-data.json`).then((res) => res.json()),
};
