const { apiData, apiDataByTitle  } = require("./api");

const resolvers = {
    Query: {
        getAllCharacteresQuery: async(parent, args)=>{
            const results = await getResultsData("character")
            return results
        },
        getAllEpisodesQuery: async(parent, args)=>{
            const results = await getResultsData("episode")
            return results
        },
        
        getEpsodesByNameQuery: async(parent, args)=>{
            const name = args.name;
            const episode = await getDatabyName(name, "episode");
            return episode
        },
        getCharactersByNameQuery: async(parent, args)=>{
            const name = args.name;
            const character = await getDatabyName(name,"character")
            return character
        }
        


    },
}
//obteniendo info 
async function getResultsData(option){
    let response = await apiData(option);
    return response.results
}


async function getDatabyName(name,option){
    name = name.replace(/\s/g, '+');
	let response = await apiDataByTitle(name,option);
   return response.results;
}

module.exports = { resolvers };