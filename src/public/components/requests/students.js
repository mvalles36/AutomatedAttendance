import axios from 'axios';

const storeStudentData = async function(studentData) {
  try {
    const response = await axios.post('/studentUpload', studentData);
    return response.status === 201;
  } catch (err) {
    // todo: better error handling
    console.warn(err);
  }
}

export { storeStudentData };