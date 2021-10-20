var bgImg
var cat

function preload() {
    //carregue as imagens aqui
bgImg = loadImage("garden.png")
catimg1



}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600)
    gato.addAnimation("imgSentado")
    gato.scale = 0.2

}

function draw() {

    background();
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
