import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/shows?q=all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const fetchShowSummary = async (showId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shows/${showId}`);
    return response.data.summary;
  } catch (error) {
    console.error('Error fetching show summary:', error);
    throw error;
  }
};
