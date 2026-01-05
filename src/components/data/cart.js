import axios from 'axios';
import { ref } from 'vue';

const DB_URL = 'https://YOUR_PROJECT_id.firebaseio.com';
const newItemName = ref('');
const message = ref('');

const addDataToFirebase = async () => {
  if (!newItemName.value) return;

  // The data you want to save
  const dataToAdd = {
    name: newItemName.value,
    timestamp: new Date().toISOString()
  };

  try {
    const response = await axios.post(DB_URL, dataToAdd);
    

  } catch (error) {
    console.error('Error adding data:', error);
    message.value = 'Failed to add data.';
  }
};