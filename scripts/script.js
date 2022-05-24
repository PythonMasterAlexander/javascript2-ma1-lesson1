//Make a Api request to this endpoint https://www.breakingbadapi.com/api/characters
const apiAdress = "https://www.breakingbadapi.com/api/characters";

const pageContainer = document.querySelector(".main__section--container");

async function apiRequest(url) {

  const response = await fetch(url);
  const apiResponseResult = await response.json();

  //apiResponseResult return is an array of objects
  for(let i = 0; i < apiResponseResult.length; i++) {

    const allNamesInObject = apiResponseResult[i].name;
    console.log(allNamesInObject);
  }

  //Get the properties name, birthday and nickname
  //Return only the first 7 elements
  //Return them on the page in three span elements

  console.log(apiResponseResult);
}

apiRequest(apiAdress);
