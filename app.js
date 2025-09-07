// catagori api to json
const catagory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCatagory(data.categories));
};
// all plants catagory
const plantsAll = () => {
fetch("https://openapi.programming-hero.com/api/plants")
.then(res => res.json())
.then(data => allPlants(data.plants))
}
// specipic data
const speceiPic = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => singleCataGorys(data.plants))
}
const singleCataGorys = (singleValu) => {
    const allPlants = document.getElementById("all-plants")
    allPlants.innerHTML = "";
    singleValu.forEach(value =>{
        const crateSing = document.createElement("div");
        crateSing.innerHTML = `<div class="bg-white shadow p-4 space-y-4 h-full">
          <img  class=" w-full md:w-[250px] h-[200px] mx-auto" src="${value.image}" alt="">
          <h1 class="font-semibold">${value.name}</h1>
          <p>${value.description}</p>
          <div class="flex justify-between">
            <div class="bg-[#DCFCE7] text-[#15803D] px-2">${value.category}</div>
            <div class="font-semibold">৳${value.price}</div>
          </div>
          <button class="btn btn-soft text-white bg-[#15803D] w-full">Add to Cart</button>
        </div>`
        allPlants.appendChild(crateSing)
    })
}



const allPlants = (allDatas) => {
    const AllPlants = document.getElementById("all-plants");
    allDatas.forEach(plant => {
        const crateAllPlants = document.createElement("div")
        crateAllPlants.innerHTML = `<div class="bg-white shadow p-4 space-y-4 h-full">
          <img  class=" w-full md:w-[250px] h-[200px] mx-auto" src="${plant.image}" alt="">
          <h1 class="font-semibold">${plant.name}</h1>
          <p>${plant.description}</p>
          <div class="flex justify-between">
            <div class="bg-[#DCFCE7] text-[#15803D] px-2">${plant.category}</div>
            <div class="font-semibold">৳${plant.price}</div>
          </div>
          <button class="btn btn-soft text-white bg-[#15803D] w-full">Add to Cart</button>
        </div>`
        AllPlants.appendChild(crateAllPlants)
    })
}

const displayCatagory = (datas) => {
  const catagorys = document.getElementById("catagorys");
  datas.forEach((data) => {
    const createcatagory = document.createElement("div");
    createcatagory.innerHTML = `<div onclick="speceiPic(${data.id})"  class="w-full hover:bg-[#15803D] hover:text-white transition cursor-pointer p-1">${data.category_name}</div>`;
    catagorys.appendChild(createcatagory);
  });
};
catagory(); //close catagori function
plantsAll() //plants all