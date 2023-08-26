const orderData = (data, order) => {
  const sortedData = data.sort((a, b) => {
    if (order === 'desc') {
      return a.id < b.id ? 1 : -1;
    }

    return a.id > b.id ? 1 : -1;
  });

  return sortedData;
} 

module.exports = { orderData }