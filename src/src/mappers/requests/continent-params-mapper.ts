import toString from 'lodash/toString';
import type { ContinentQueryRequest } from '../../types/continent';

const mapQueryParams = (request: ContinentQueryRequest): URLSearchParams => {
  const params = new URLSearchParams();

  if (request.page) {
    params.set('page', toString(request.page));
  }

  if (request.size) {
    params.set('size', toString(request.size));
  }

  if (request.sortBy) {
    params.set('sortBy', toString(request.sortBy));
  }

  if (request.sortDirection) {
    params.set('sortDirection', toString(request.sortDirection));
  }

  if (request.filter?.code) {
    params.set('code', toString(request.filter?.name));
  }

  if (request.filter?.name) {
    params.set('name', toString(request.filter?.name));
  }

  return params;
};

export default mapQueryParams;
