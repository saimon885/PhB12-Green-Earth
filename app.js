// catagori api to json
const catagory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCatagory(data.categories));
};
// all plants catagory
const plantsAll = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => allPlants(data.plants));
};
// remove active
const removeActive = () => {
  const ctbtn = document.querySelectorAll(".catagory-btn");
  ctbtn.forEach((btn) => btn.classList.remove("active"));
};
// specipic data
const speceiPic = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const cataId = document.getElementById(`catagory-${id}`);
      cataId.classList.add("active");

      singleCataGorys(data.plants);
    });
};
const singleCataGorys = (singleValu) => {
  const allPlants = document.getElementById("all-plants");
  allPlants.innerHTML = "";
  singleValu.forEach((value) => {
    const crateSing = document.createElement("div");
    crateSing.innerHTML = `<div class="bg-white shadow p-4 rounded-2xl flex flex-col justify-between h-full">
    <div>
      <img class="w-full md:w-[300px] h-[200px] mx-auto rounded-2xl" src="${value.image}" alt="">
      <h1 onclick="mymodal.showModal()" class="font-semibold mt-2">${value.name}</h1>
      <p class="mt-2">${value.description}</p>
      <div class="flex justify-between mt-2">
        <div class="bg-[#DCFCE7] text-[#15803D] px-2 rounded-xl">${value.category}</div>
        <div class="font-semibold">${value.price}</div>
      </div>
    </div>
    <button class="btn btn-soft text-white bg-[#15803D] w-full rounded-3xl mt-3 cartbtn">Add to Cart</button>
  </div>`;
    allPlants.appendChild(crateSing);
  });
};

const cardConatiner = document.getElementById("all-plants")
cardConatiner.addEventListener("click",(e) => {
  if(e.target.innerText === "Add to Cart"){
    alert("Your Item to Cart.")
    const cartcont = document.getElementById("Cart-cont")
  const treename = e.target.parentNode.childNodes[1].childNodes[7].childNodes[1].innerText
  const treePrice = Number(e.target.parentNode.childNodes[1].childNodes[7].childNodes[3].innerText)
   const total = document.getElementById("totals")
   const crateCart = document.createElement("div")
   crateCart.innerHTML += `<div id="remItem" class="flex justify-between items-center px-1 rounded-2xl bg-[#F0FDF4] mb-2">
          <div>
            <h1 class="text-[13px] font-semibold">${treename}</h1>
          <h2 class="text-[#1F2937]"><span>৳</span> ${treePrice}</h2>
          </div>
          <button id="remove-item">❌</button>
        </div>
        `
   cartcont.appendChild(crateCart);
  }
})


// const remove = document.getElementById("Cart-cont")
// remove.addEventListener("click", (e) => {
//   console.log(e.target);
//   const closeopt = e.target.innerText
//   closeopt.addEventListener("click", (n) => {
//     console.log(n);
//   })
// })



// document.getElementById("remove-item").addEventListener("click", () => {
//   const removeItem = document.getElementById("remItem")
//   removeItem.innerHTML= ""
// })


// for(let heart of HeartClass){
//     heart.addEventListener("click",function(){
//         const heartNumber = element("heartNumber").innerText;
//         const heartNumberConvert = Number(heartNumber);
//         const totalHeart = heartNumberConvert + 1;
//         document.getElementById("heartNumber").innerText = totalHeart;
//     })


// const totalOpt = document.getElementById("all-plants")
// cardConatiner.addEventListener("click",(e) => {
//   const sumclass = document.getElementsByClassName("cartbtn")
//   sumclass.forEach()
 
//   // const treename = e.target.parentNode.childNodes[1].childNodes[7].childNodes[1].innerText
//   let treePrice = Number(e.target.parentNode.childNodes[1].childNodes[7].childNodes[3].innerText)
// // let sum = 0;
//  let tot = sum+treePrice
//  console.log(tot);

  //  const cratetotal = document.createElement("div")
  //  cratetotal.innerHTML = "6564"
  //  total.appendChild(cratetotal);
   
// })


const allPlants = (allDatas) => {
  const AllPlants = document.getElementById("all-plants");
  allDatas.forEach((plant) => {
    const crateAllPlants = document.createElement("div");
    crateAllPlants.innerHTML = `<div id="card-container" class="bg-white shadow p-4 rounded-2xl flex flex-col justify-between h-full">
    <div>
      <img class="w-full md:w-[300px] h-[250px] mx-auto rounded-2xl" src="${plant.image}" alt="">
      <h1 class="font-semibold mt-2">${plant.name}</h1>
      <p class="mt-2">${plant.description}</p>
      <div class="flex justify-between mt-4">
        <div class="bg-[#DCFCE7] text-[#15803D] px-2 rounded-xl">${plant.category}</div>
        <div class="font-semibold">${plant.price}</div>
      </div>
    </div>
    <button class="btn btn-soft text-white bg-[#15803D] w-full rounded-3xl mt-3 cartbtn totalBTn">Add to Cart</button>
  </div>`;
    AllPlants.appendChild(crateAllPlants);

    // add to cart section
  });
};


const displayCatagory = (datas) => {
  const catagorys = document.getElementById("catagorys");
  datas.forEach((data) => {
    const createcatagory = document.createElement("div");
    createcatagory.innerHTML = `<div id="catagory-${data.id}" onclick="speceiPic(${data.id})"  class="w-full transition cursor-pointer p-1 catagory-btn">${data.category_name}</div>`;
    catagorys.appendChild(createcatagory);
  });
};

catagory(); //close catagori function
plantsAll(); //plants all
