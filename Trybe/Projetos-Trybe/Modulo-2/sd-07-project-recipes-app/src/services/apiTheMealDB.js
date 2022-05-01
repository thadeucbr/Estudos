const apiTheMealDB = async (searchParam) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/${searchParam}`;
  try {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export default apiTheMealDB;
