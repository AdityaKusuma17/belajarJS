// mENGAMBIL ID 3

const fullname = document.getElementById('fullname')
const alamat = document.getElementById('alamat')


const BASE_URL = "https://jsonplaceholder.typicode.com/users/3";


async function getDataUsers(){
    try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    fullname.innerText = data.name;
    alamat.innerText = data.address.street;

    console.log("INI DATANYA BRO :", {data});
    } catch (error) {
        console.error("Ini error bro: ", {error})
    }
}

getDataUsers();