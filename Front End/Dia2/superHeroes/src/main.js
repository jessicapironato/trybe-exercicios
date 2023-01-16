import './style.css';
import Swal from 'sweetalert2';

const imagem = document.getElementById('image');
const heroName = document.getElementById('name');
const btnGetHero = document.getElementById('button');

const getRandomNember = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
};

const getHero = () => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then((response) => response.json())
        .then((data) => {
            const num = getRandomNember(data.length);
            const { images, name } = data[num];
            heroName.innerHTML = name;
            imagem.src = images.md;
            console.log(heroName);
            console.log(num);
            console.log(data);
        }).catch((erro) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: erro.mesage,
            footer: '<a href="">Why do I have this issue?</a>',
        }));
};

btnGetHero.addEventListener('click', getHero);
