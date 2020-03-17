document.querySelector("button").addEventListner('click' callApi)

function callApi(){
  fetch(`/api`)//after question mark everything is a params
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // document.querySelector("#placeImg").src = data
}
