import API from '../api';

const fetchVariations = async () => {
  const response = await API.get('/v1/variations');

  console.log(response);
  console.log(response.data);
  return response.data;
}

export default fetchVariations;