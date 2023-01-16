import './style.css';
import Swal from 'sweetalert2';

const imagem = document.getElementById('image');
const heroName = document.getElementById('name');
const btnGetHero = document.getElementById('button');
const urlApi = ('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');

const getRandomNember = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
};

// opção com .then
// const getHero = () => {
//     fetch(urlApi)
//         .then((response) => response.json())
//         .then((data) => {
//             const num = getRandomNember(data.length);
//             const { images, name } = data[num];
//             heroName.innerHTML = name;
//             imagem.src = images.md;
//             console.log(heroName);
//             console.log(num);
//             console.log(data);
//         }).catch((erro) => Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: erro.mesage,
//             footer: '<a href="">Why do I have this issue?</a>',
//         }));
// };

// btnGetHero.addEventListener('click', getHero);

const getHero = async () => {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        const num = getRandomNember(data.length);
        const { images, name } = data[num];
        imagem.src = images.md;
        heroName.innerHTML = name;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: erro.mesage,
            footer: '<a href="">Why do I have this issue?</a>',

        });
    }
};
btnGetHero.addEventListener('click', getHero);
