import type { IPurpose } from 'src/types';

export const BASE_URL = './data';

export const purposeModel = {
  get: (): Promise<IPurpose[]> =>
    fetch(`${BASE_URL}/mock-data.json`).then((res) => res.json()),
};
