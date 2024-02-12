import axios from 'axios';

export const addProductToDatabase = async (title, price, quantity) => {
  const result = await axios.post('/api/products', {
    title,
    price: Number(price),
    quantity: Number(quantity)
  });
  return result.data
}

export const getProductsFromDatabase = async () => {
  const result = await axios.get('/api/products')
  return result.data
}

export const deleteListItem = async (id) => {
  console.log(id)
  await axios.delete(`/api/products/${id}`)
}

export const editListItem = async (id, title, price, quantity) => {
  const result = await axios.put(`/api/products/${id}`, {
    title,
    price,
    quantity
  });
  return result.data;
}