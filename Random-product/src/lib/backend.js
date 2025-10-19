import axios from "axios";


const getProductById = async (id) => {

  const options = {
    method: 'GET',
    url: `https://api.freeapi.app/api/v1/public/randomproducts/${id}`,
    headers: { accept: 'application/json' }
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const getRandomProduct = async () => {

  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomproducts/product/random',
    headers: { accept: 'application/json' }
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const getAllProducts = async () => {

  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomproducts',
    params: {
      page: '1',
      limit: '10',
      inc: 'category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid',
      query: 'mens-watches'
    },
    headers: { accept: 'application/json' }
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export {
  getAllProducts,
  getRandomProduct,
  getProductById
}
