import axios from 'axios';

export default addProductToDatabase = async (title, price, quantity) => {
  const result = await axios.post('/api/products', {
    title,
    price: Number(price),
    quantity: Number(quantity)
  });
  return result.data
}

export default getProductsFromDatabase = async (title, price, quantity) => {
  const result = await axios.get('/api/products')
  return result.data
}