AOS.init();

let boton = document.getElementById("mode")

boton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
})

const Url = 'https://rickandmortyapi.com/api/character';
const Main = document.getElementById('root');


fetch(Url)

    .then(response => {
        return response.json()
    })

    .then(data => {
        console.log(data);
        const Info = data.results
        console.log(Info)
        Info.map(item => {
            Main.innerHTML += `
        <div>
            <div class="containerCard">
                <div class="titulosCard"> 
                <h2>${item.name}</h2>
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

btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

