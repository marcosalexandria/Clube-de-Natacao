const tratandoONome=(nome)=>{
    let traco=""; //String que vai receber os traços
    //contador que vai percorrer os caracteres do parametro (nome)
    for(let i=0;i<nome.length;i++){
        //Se o caractere encontrado não for o espaço, traco recebe "-"
        if(nome.charAt(i)!= " "){
            traco+="-";
        //Se for um espaço, traco vai receber um espaço
        }else{
            traco+=" ";
        }
        //Só vai mostrar os traços a baixo do nome, quando eles tiverem o mesmo número de caracteres.
        if(traco.length<nome.length){
            continue;
        }
        console.log(nome);
        console.log(traco);
    }
}
const categoria=(idade)=>{
    //Manipulando o paramentro idade para mostrar a categoria do sujeito.
    if(idade<=12){
        console.log(`Você tem ${idade} anos, sua categoria é: INFANTIL!`);
    }else if(idade>12&&idade<18){
        console.log(`Você tem ${idade} anos, sua categoria é: JUVENIL!`);
    }else if(idade>=18){
        console.log(`Você tem ${idade} anos, sua categoria é: ADULTA!`);
    }
}

tratandoONome("Marcos Santos de Alexandria");
categoria(12);