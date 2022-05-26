//Make a Api request to this endpoint https://www.breakingbadapi.com/api/characters
const apiAdress = "https://www.breakingbadapi.com/api/characters";

const pageContainer = document.querySelector(".main-section__api-content-container");

async function apiRequest(url) {

  try {
    const response = await fetch(url);
    const apiResponseResult = await response.json();

    //Display the loading indicator while api call is loading
    pageContainer.innerHTML = ""

    for(let i = 0; i < apiResponseResult.length; i++) {

      //Get the properties name, birthday and nickname
      const namesInApi = apiResponseResult[i].name;
      const birthdaysInApi = apiResponseResult[i].birthday;
      const nicknamesInApi = apiResponseResult[i].nickname;
      const occupationInApi = apiResponseResult[i].occupation;

      //Return only the first 7 elements
      if(i === 7) {
        break
      }

      //Return them on the page in three span elements
      pageContainer.innerHTML += `
        <span>Name: </span><span>${namesInApi}</br></span>
        <span>Birthday: </span><span>${birthdaysInApi}</br></span>
        <span>Nickname: </span><span>${nicknamesInApi}</br></span>
      `;

      for(let i = 0; i < occupationInApi.length; i++) {
        const occupation = occupationInApi[i];
        pageContainer.innerHTML += `
          <span>${occupation}</span>
        `;
      }
    }
  }

  catch(error) {
    console.log(error);
  }
}

apiRequest(apiAdress);
