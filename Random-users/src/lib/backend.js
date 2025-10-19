import axios from "axios";

const dataRequest = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomusers',
    params: { page: '1', limit: '10' },
    headers: { accept: 'application/json' }
  };
  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

const dataUserRequest = async (id) => {
  const options = {
    method: 'GET',
    url: `https://api.freeapi.app/api/v1/public/randomusers/${id}`,
    headers: { accept: 'application/json' }
  };
  try {
    const { data } = await axios.request(options);
    return data;
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}

const randomUserGeneration = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomusers/user/random',
    headers: { accept: 'application/json' }
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { dataRequest, dataUserRequest, randomUserGeneration };
