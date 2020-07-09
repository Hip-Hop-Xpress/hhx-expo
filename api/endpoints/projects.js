import API from '../api';

const projectsEndpoint = '/v1/projects';

/**
 * Performs a GET request to the Projects endpoint on the HHX API
 * @returns an axios response (data accessed through .data field)
 */
const fetchProjects = async () => {
  const response = await API.get(projectsEndpoint);
  return response;
}

export default fetchProjects;