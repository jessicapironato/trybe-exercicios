   //Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  // - document.getElementById()
   //- document.getElementsByClassName()
   //- document.getElementsByTagName()
   //1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
   //2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
   //3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
   //4. Crie e execute uma função que corrija o texto da tag <h1>.
   //5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
   //6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console 
   
   function alteraTextParagrafo(){
      const paragrafo = document.getElementsByTagName('p')[1];
      paragrafo.innerHTML = "novo texto";
   
   }
   alteraTextParagrafo()
  //2
   function alteraCorQuadradoAmarelo (){
      const quadradoAmarelo = document.getElementsByClassName('main-content');
      quadradoAmarelo[0].style.backgroundColor = 'rgb(76,164,109)';
   }
   alteraCorQuadradoAmarelo()
  
   //3
   function alteraCorQuadradoVermelho(){
      const elementoQuadrado = document.getElementsByClassName('center-content');
      elementoQuadrado[0].style.backgroundColor= 'white';
   }
   alteraCorQuadradoVermelho();
  
   //4
   const alteraTextoH1 = () =>{
      let titulo = document.getElementsByTagName('h1')[0];
      titulo.innerHTML = "Exercício Javascript"
   }
   alteraTextoH1();
 
   //5
   
   function paragraphUpperCase() {
      let paragraph = document.getElementsByTagName('p')[0];
      paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
    }
    paragraphUpperCase();

    //6
    function mostreParagrafos(){
      let paragrafos = document.getElementsByTagName('p');
      for(let i = 0; i < paragrafos.length; i += 1){
         console.log(paragrafos[i].innerHTML)
      }
    }
    mostreParagrafos();

    