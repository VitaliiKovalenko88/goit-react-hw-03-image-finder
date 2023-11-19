import axios from 'axios';

const API_KEY = '22469389-b601f8ee0455705c879309776';
const BASE_URL = 'https://pixabay.com/api';
axios.defaults.baseURL = BASE_URL;

export const getImageWithQuery = async (nameQuery, page) => {
  const { data } = await axios.get(
    `?q=${nameQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data
};