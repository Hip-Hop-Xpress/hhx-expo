import API from '../api';

const updatesEndpoint = '/v1/updates';

/**
 * Performs a GET request to the Projects endpoint on the HHX API
 * @returns an axios response (data accessed through .data field)
 */
const fetchUpdates = async () => {
  const response = await API.get(updatesEndpoint);
  return response;
}

export default fetchUpdates;