/* API Endpoints
 * breeds list: https://dog.ceo/api/breeds/list/all
 * get single breed image: https://dog.ceo/api/breed/{breed}/images/random
 */

// This function returns [breeds]
// dom selection

const selectE1 = document.querySelector(" #dog-breeds");
console.log(selectE1);

function getDogsBreed() {
    return fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => res.json())
      .then((data) => Object.keys(data.message))
      .catch((err) => console.log(err));
  }
  
function renderoption(){
    getDogsBreed().then((breeds)=> {
        for(let breed of breeds){
            const option = document.createElement("option");
            option.textContent=breed;
            selectE1.appendChild(option);
        }
    });
}
renderoption();