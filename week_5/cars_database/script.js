const form = document.querySelector('#form');
const button = document.querySelector('#startSearch');
const lNum = document.querySelector('#license');
const cMake = document.querySelector('#carMake');
const cModel = document.querySelector('#carModel');
const cOwner = document.querySelector('#carOwner');
const CPrice = document.querySelector('#carPrice');
const cColor = document.querySelector('#carColor');
const result = document.querySelector('#result');
const newTable = document.querySelector('#dataTable');
const searchInput = document.querySelector('#search');
let cars = [];


const addCar = (e) => {
    e.preventDefault();

    let car = {
        licenseNum: lNum.value,
        carMake: cMake.value,
        carModel: cModel.value,
        carOwner: cOwner.value,
        carPrice: CPrice.value,
        carColor: cColor.value
    };

    cars.push(car);

    let row = newTable.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();

    cell1.innerHTML = car.licenseNum;
    cell2.innerHTML = car.carMake;
    cell3.innerHTML = car.carModel;
    cell4.innerHTML = car.carOwner;
    cell5.innerHTML = car.carPrice;
    cell6.innerHTML = car.carColor;

};
const runSearch = () => {

    let text;

    const search = cars.findIndex(particularCar => particularCar.licenseNum.toUpperCase() === searchInput.value.toUpperCase());

    if (search === -1) {
        text = `There's no car with that license plate added to the system, Try again?`;
    } else {
        text = `License number ${cars[search].licenseNum} is a ${cars[search].carMake} and owned by ${cars[search].carOwner}`;
    }

    result.innerHTML = text;

};

form.addEventListener('submit', addCar);