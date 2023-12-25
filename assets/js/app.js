const radioButtons = document.getElementsByName("tipoCalc");

radioButtons.forEach((trigger)=>{
    trigger.addEventListener('change',(e)=>{

        const divs =document.querySelectorAll('.Calc');

        for(let x = 0; x<divs.length;x++){

            divs[x].style.display = 'none'

        }

        const valor = trigger.value;

        const divDesejada = document.querySelector('.Calc.' + valor);

        divDesejada.style.display = 'block';

    })
})

const textbox = document.getElementById("VidaUtil");

const select = document.getElementById("tipoObj");

const obs = document.getElementById("checkObs");

const checkBox = document.getElementById("VidaUtilConh");

checkBox.addEventListener('change',(e)=>{

    if(checkBox.checked){

        textbox.disabled=true;
        select.style.display="block";
        obs.style.display="block";
        carregarCategorias()


    }else{

        textbox.disabled=false;
        select.style.display="none";
        obs.style.display="none";

    }

})

function carregarCategorias(){

    taxaDep.forEach(function(taxa){

        var opc = document.createElement('option');
        opc.value = taxa.taxa;
        opc.text = taxa.Descricao;
        select.add(opc);
    })

}



function calcLinear(){


const valProd = document.getElementById("ValProd");
const valSuc = document.getElementById("ValSuc");
const vidaUtil = document.getElementById("VidaUtil");
const tempoUso = document.getElementById("tempoUso");
const DepPeriodo = document.getElementById("DepPeriodo");
const DepTotal = document.getElementById("DepTotal");
const ValorDep = document.getElementById("ValDep");

var valorProduto = parseFloat(valProd.value)
var valorSucata = parseFloat(valSuc.value)
var VU = parseFloat(vidaUtil.value)
var tempUso = parseInt(tempoUso.value)

    let prodDep = 0;
    let valDep = 0;
    let taxaDep =0;
    console.log(valProd.value);
    

    if(checkBox.checked){
        
        var selectValue = parseFloat(select.value);
        taxaDep = (valorProduto - valorSucata) * (selectValue);
        console.log(selectValue);

    }else{

        
        taxaDep = (valorProduto - valorSucata) / VU;

    }

    valDep = taxaDep * tempUso;
    prodDep = valorProduto - valDep;

    console.log(valDep)
    console.log(prodDep)

    DepPeriodo.textContent = "Valor da depreciação na unidade de tempo escolhida por você: " + taxaDep
    DepTotal.textContent = "Valor da depreciação Total: " + valDep;
    ValorDep.textContent = "Valor do produto Depreciado: " + prodDep

}

function somaDig(){

    const valProd = document.getElementById("ValProdSoma");
    const valSuc = document.getElementById("ValSucSoma");
    const vidaUtil = document.getElementById("VidaUtilSoma");
    const tempoUso = document.getElementById("tempoUsoSoma");
    const DepPeriodo = document.getElementById("DepPeriodoSoma");
    const DepTotal = document.getElementById("DepTotalSoma");
    const ValorDep = document.getElementById("ValDepSoma");

    var valorProduto = parseFloat(valProd.value)
    var valorSucata = parseFloat(valSuc.value)
    var VU = parseFloat(vidaUtil.value)
    var tempUso = parseInt(tempoUso.value)

    let prodDep = valorProduto;
    let valDep = 0;
    let taxaDep = 0;
    let somaDig = 0;

    for (var x = 1; x<=VU; x++){
        
        somaDig = somaDig + x;

    }

    for(var x = tempUso; x>=1; x--){

        taxaDep = x * (valorProduto-valorSucata) / somaDig;
        valDep = valDep + taxaDep;
        prodDep = prodDep - taxaDep;
        console.log(taxaDep+" | "+valDep+" | "+prodDep)

    }
    console.log(taxaDep);
    DepPeriodo.textContent = "Valor da depreciação no último período: " + taxaDep
    DepTotal.textContent = "Valor da depreciação Total: " + valDep;
    ValorDep.textContent = "Valor do produto Depreciado: " + prodDep

}

function calcUniProd(){


    const ValProd = document.getElementById("ValProdUni");
    const ValSuc = document.getElementById("ValSucUni");
    const CiclosEst = document.getElementById("CiclosEst");
    const CiclosUti = document.getElementById("CiclosUti");
    const DepPeriodo = document.getElementById("PercentualUsado");
    const DepTotal = document.getElementById("DepTotalUni");
    const ValorDep = document.getElementById("ValDepUni");
    
    var valorProduto = parseFloat(ValProd.value)
    var valorSucata = parseFloat(ValSuc.value)
    var ciclosEsti = parseFloat(CiclosEst.value)
    var ciclosUtili = parseInt(CiclosUti.value)
    
    let prodDep = 0;
    let valDep = 0;
    let taxaDep =0;
        
    
    taxaDep = ciclosUtili/ciclosEsti;    
    valDep = (valorProduto-valorSucata)*taxaDep;
    prodDep = valorProduto - valDep;

    console.log(valDep)
    console.log(prodDep)
    
    DepPeriodo.textContent = "Percentual de depreciação: " + taxaDep
    DepTotal.textContent = "Valor da depreciação Total: " + valDep;
    ValorDep.textContent = "Valor do produto Depreciado: " + prodDep
    
}





