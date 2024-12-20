const catalog = document.getElementById("catalogContent");
const noResults = document.getElementById("noResults");
//BARRA DE PESQUISA 1º
const search1 = document.getElementsByClassName("searchBar-1")[0];
search1.addEventListener("keyup", function(){
    if(search1.value.length){
        console.log(search1.value.toLowerCase());
        console.log(search1.value.length);
    }else if(search1.value.length){
        console.log(search1.value.toLowerCase());
        console.log(search1.value.length);
    }
});
//FILTRO DE PESQUISA DA BARRA 1º
search1.addEventListener("keyup", function(){
    var pesquisaProduto = document.getElementsByClassName("searchBar-1")[0].value;
    pesquisaProduto = pesquisaProduto.toLowerCase();
    var nomeProdutos = document.getElementsByClassName("productName");
    var produtos = document.getElementsByClassName("product");
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(!nomeProdutos[i].innerHTML.toLowerCase().includes(pesquisaProduto)){
            produtos[i].style.display = "none";
        }else if(nomeProdutos[i].innerHTML.toLowerCase().includes(pesquisaProduto)){
            produtos[i].style.display = "block";
        }
    }
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(catalog.getBoundingClientRect().height === 0){
            noResults.style.display = "block";
        }else if(catalog.getBoundingClientRect().height > 100){
            noResults.style.display = "none";
        }
    }
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(pesquisaProduto){
            document.getElementsByClassName("searchBar-1")[0].style.boxShadow = "-2px 2px 0px #000";
        }else if(!pesquisaProduto){
            document.getElementsByClassName("searchBar-1")[0].style.boxShadow = "-3px 3px 0px #000";
        }
    }
});
//BARRA DE PESQUISA 2º
const search2 = document.getElementsByClassName("searchBar-2")[0];
search2.addEventListener("keyup", function(){
    if(search2.value.length){
        console.log(search2.value.toLowerCase());
        console.log(search2.value.length);
    }else if(search2.value.length){
        console.log(search2.value.toLowerCase());
        console.log(search2.value.length);
    }
});
//FILTRO DE PESQUISA DA BARRA 2º
search2.addEventListener("keyup", function(){
    var pesquisaProduto = document.getElementsByClassName("searchBar-2")[0].value;
    pesquisaProduto = pesquisaProduto.toLowerCase();
    var nomeProdutos = document.getElementsByClassName("productName");
    var produtos = document.getElementsByClassName("product");
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(!nomeProdutos[i].innerHTML.toLowerCase().includes(pesquisaProduto)){
            produtos[i].style.display = "none";
        }else if(nomeProdutos[i].innerHTML.toLowerCase().includes(pesquisaProduto)){
            produtos[i].style.display = "block";
        }
    }
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(catalog.getBoundingClientRect().height === 0){
            noResults.style.display = "block";
        }else if(catalog.getBoundingClientRect().height > 100){
            noResults.style.display = "none";
        }
    }
    for(i = 0; i < nomeProdutos.length; i++){ 
        if(pesquisaProduto){
            document.getElementsByClassName("searchBar-2")[0].style.boxShadow = "-1.5px 1.5px 0px #000";
        }else if(!pesquisaProduto){
            document.getElementsByClassName("searchBar-2")[0].style.boxShadow = "-3px 3px 0px #000";
        }
    }
});