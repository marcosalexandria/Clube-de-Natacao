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
tratandoONome("Marcos Santos de Alexandria")