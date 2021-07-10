var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_img_width = 30;
block_img_height = 30;
var player_object = "";
var block_img_object = "";
function player_update() {
        fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img){
    block_img_object = Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(block_img_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("shift + p key pressed");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("shift + m key pressed");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up arrow key pressed");
    }

    if (keyPressed == '40') {
        down();
        console.log("down arrow key pressed");
    }

    if (keyPressed == '37') {
        left();
        console.log("left arrow key pressed");
    }

    if (keyPressed == '39') {
        right();
        console.log("right arrow key pressed");
    }

    if (keyPressed == '87') {
        new_img('wall.jpg');
        console.log("w key pressed/ wall block");
    }

    if (keyPressed == '71') {
        new_img('ground.png');
        console.log("g key pressed/ ground block");
    }

    if (keyPressed == '76') {
        new_img('light_green.png');
        console.log("l key pressed/ light green block");
    }

    if (keyPressed == '84') {
        new_img('trunk.jpg');
        console.log("t key pressed/ trunk block");
    }

    if (keyPressed == '82') {
        new_img('roof.jpg');
        console.log("r key pressed/ roof block");
    }

    if (keyPressed == '89') {
        new_img('yellow_wall.png');
        console.log("y key pressed/ yellow wall block");
    }

    if (keyPressed == '68') {
        new_img('dark_green.png');
        console.log("d key pressed/ dark green block");
    }

    if (keyPressed == '85') {
        new_img('unique.png');
        console.log("u key pressed/ unique block");
    }

    if (keyPressed == '67') {
        new_img('cloud.jpg');
        console.log("c key pressed/ cloud block");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        console.log("block_img_height =" + block_img_height);
        console.log("When Up Arrow Key Is Pressed, X = " + player_x + "When Up Arrow Key Is Pressed, Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        console.log("block_img_height =" + block_img_height);
        console.log("When Down Arrow Key Is Pressed, X = " + player_x + "When Down Arrow Key Is Pressed, Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_img_width;
        console.log("block_img_width =" + block_img_width);
        console.log("When Left Arrow Key Is Pressed, X = " + player_x + "When Left Arrow Key Is Pressed, Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 970) {
        player_x = player_x + block_img_width;
        console.log("block_img_width =" + block_img_width);
        console.log("When Right Arrow Key Is Pressed, X = " + player_x + "When Right Arrow Key Is Pressed, Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}