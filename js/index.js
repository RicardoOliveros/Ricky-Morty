AOS.init();
let boton = document.getElementById("mode");
let before = document.getElementById("beforeBtn");
let after = document.getElementById("afterBtn");
let NumberPage = 1;

boton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
})




const Main = document.getElementById('root');

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

btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

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
