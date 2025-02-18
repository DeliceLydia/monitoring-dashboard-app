import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const fetchAllWebsites = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/websites`);
    return response.data.websites;
  } catch (error) {
    console.error('Error fetching websites:', error);
    throw error;
  }
};

export const addNewWebsite = async (websiteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/websites`, websiteData);
    return response;
  } catch (error) {
    console.error('Error adding new website:', error);
    throw error;
  }
};

export const deleteWebsite = async (websiteId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/websites/${websiteId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting website:', error);
    throw error;
  }
};
