import API from '../api';

const variationsEndpoint = '/v1/variations';

/**
 * Performs a GET request to the Variations endpoint on the HHX API
 * @returns an axios response (data accessed through .data field)
 */
const fetchVariations = async () => {
  const response = await API.get(variationsEndpoint);
  return response;
}

export default fetchVariations;