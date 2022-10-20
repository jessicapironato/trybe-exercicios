let pecaXadrex ="";

switch (pecaXadrex.toLowerCase()){
    case "rainha":
        console.log(" A Rainha movimenta: Diagonal, horizontal e vertical");
        break;
    case "bispo":
        console.log(" O Bispo movimenta: Diagonal");
        break;
    case "rei":
        console.log("O rei movimenta: uma casa para qualquer direção");
        break;
    case "peão":
        console.log("O peão movimenta: uma casa pra frente");
        break;
    case "cavalo":
        console.log("o cavalo movimenta: em L");
        break;
    case "torre":
        console.log("A torre covimenta: horizontal e vertical");
        break;
    default:
        console.log("Peça inválida");
        break;
}