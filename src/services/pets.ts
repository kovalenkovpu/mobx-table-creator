const PET_URL = 'https://petstore.swagger.io/v2/pet/findByStatus';

export const STATUS_MAP = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

type Status = keyof typeof STATUS_MAP;

export interface GetPetsParams {
  status: Status;
}

function getPets(params: GetPetsParams) {
  const query = new URLSearchParams(Object.entries(params));

  return fetch(`${PET_URL}?${query}`);
}

export {
  getPets,
};