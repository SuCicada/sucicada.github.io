var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {
    preload: preload,
    create: create,
});
function preload(){
    var data = [
        ' 333 ',
        ' 777 ',
        'E333E',
        ' 333 ',
        ' 3 3 '];
    var b = game.load.imageFromTexture('bob',data,100,10);
    // var a = game.create.texture('bob', data,100,10,0,true,function(){});
    // game.cache.addImage('bob',null,data);

    // alert(1);
}
function f(){
    console.log(b);

    // var b = game.cache.getImage('bob');
}
function create() {
    var b = game.add.sprite(0, 0, 'bob');
    // var b = game.cache.addImage('bob');


}


