let campoIdade;
let campoFantasia;
let campoTerror;
let campoAventura;
let campoRomance;
let campoFicçãoCientifica;
let campoDrama;


function setup() {
  createCanvas(800, 400);
  createElement("h2", "BIBI recomenda filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("0");
  campoFantasia = createCheckbox("Gosta de filmes de Fantasia ?");
  campoTerror = createCheckbox("Gosta de filmes de Terror ?");
  campoAventura = createCheckbox("Gosta de filmes Aventura ?");
  campoRomance = createCheckbox("Gosta de filmes de Romance ?");
  campoFicçãoCientifica = createCheckbox("Gosta de fimes de Ficção Ciêntifica ?");
  campoDrama = createCheckbox("Gosta de fimes de Drama ?");
}

function draw() {
  background("rgb(210,180,140)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeFicçãoCientifica = campoFicçãoCientifica.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(
    idade,
    gostaDeFantasia,
    gostaDeTerror,
    gostaDeRomance,
    gostaDeFicçãoCientifica,
    gostaDeAventura,
    gostaDeDrama
  );
  
 fill(color(120, 124, 107));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(
  idade,
  gostaDeFantasia,
  gostaDeAventura,
  gostaDeRomance,
  gostaDeTerror,
  gostaDeFicçãoCientifica,
  gostaDeDrama
) 
{
  if (idade >= 18) {
    if (idade >= 16) {
      if(gostaDeFicçãoCientifica || gostaDeFantasia) {
     return "Shingueki no kiojin";      
      } else {
     return "Neon Genesis Evangelion";
      }
    } else {
      if (idade >= 14) {
        if(gostaDeRomance || gostaDeAventura) {
   return "Que chegue até você:Kimi ni Todoke";             
        } else{
  return "The boy and the heron";        
        }
      } else {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Your name?";
        } else {
          return "Yuyu hakusho";
        }
      }
    }
  } else {
    if (gostaDeDrama || gostaDeTerror) {
          return "Serial Experiments Lain";
    } else {
         return "Death note";
    }
  }
}