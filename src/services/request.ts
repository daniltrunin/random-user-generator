const request = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) throw new Error(`Error: ${response.status}. ${response.text}`);

    const result = await response.json();
    // console.log('Вывод результат функции request внутри неё: ', result.results[0]);
    return result.results[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default request;
