//traer los datos de internet APi
const axios = require("axios") 
//usar fetch
async function apiData(option){
  const url = `https://rickandmortyapi.com/api/${option}/`;
	let response = await axios.get(url);
	return response.data;
}


async function apiDataByTitle(name,option){
  const url = `https://rickandmortyapi.com/api/${option}/?name=${name}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports= {
  apiData,
  apiDataByTitle
}