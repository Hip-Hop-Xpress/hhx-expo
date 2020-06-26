import API from '../api';

const fetchVariations = async () => {
  const response = await API.get('/v1/variations');
  return response;
}

export default fetchVariations;