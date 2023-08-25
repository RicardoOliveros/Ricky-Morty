AOS.init();
const url = 'https://rickandmortyapi.com/api/character';
let boton = document.getElementById("mode");
let before = document.getElementById("beforeBtn");
let after = document.getElementById("afterBtn");
const Main = document.getElementById('root');
let NumberPage = 1;


// DARK MODE

boton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
})


// PAGINACION

function GetInfo(NumberPage) {
    const Url = `https://rickandmortyapi.com/api/character?page=${NumberPage}`;

    fetch(Url)

        .then(response => {
            return response.json()
        })

        .then(data => {
            console.log(data);
            const Info = data.results
            console.log(Info)
            Main.innerHTML = "";
            Info.map(item => {
                const nombre = item.name.length > 13 ? item.name.slice(0, 11) + '..' : item.name;
                Main.innerHTML += `
        <div>
            <div class="containerCard">

                <div class="titulosCard">                 
                <h2>${nombre}</h2>

                <img src="${item.image}">
                </div>

                <div class="informationCards">
                    <p>Status: ${item.status}</p>
                    <p>Species: ${item.species}</p>
                    <p>Gender: ${item.gender}</p>
                </div>
            </div>
        </div>
        `
            })
        })
}

GetInfo(NumberPage)


// BUSCADOR

const buscar = document.getElementById("btnSearch");
const inputB = document.getElementById('searchCharac');

buscar.addEventListener('click', () => {

    fetch(url)

        .then(response => {
            return response.json()
        })

        .then(data => {
            const Info = data.results;
            const word = inputB.value.toLowerCase();
            console.log(word);
            const array = Info.filter(item => item.name.toLowerCase().includes(word));
            Main.innerHTML = "";

            array.map(item => {
                const nombre = item.name.length > 13 ? item.name.slice(0, 11) + '..' : item.name;
                Main.innerHTML += `
        <div>
            <div class="containerCard">

                <div class="titulosCard">                 
                <h2>${nombre}</h2>

                <img src="${item.image}">
                </div>

                <div class="informationCards">
                    <p>Status: ${item.status}</p>
                    <p>Species: ${item.species}</p>
                    <p>Gender: ${item.gender}</p>
                </div>
            </div>
        </div>
        `
            })
        })
})

// BOTONES PARA PASAR DE PAGINA

before.addEventListener("click", () => {
    NumberPage--;
    searchCh.scrollIntoView({
        behavior: 'smooth'
    })
    GetInfo(NumberPage)
})

after.addEventListener("click", () => {
    NumberPage++;
    searchCh.scrollIntoView({
        behavior: 'smooth'
    })
    GetInfo(NumberPage)
})