let dice_array = ['dice1.png','dice2.png','dice3.png', 'dice4.png', 'dice5.png', 'dice6.png']
let random_num1 = Math.floor(Math.random() * (dice_array.length))
let random_num2 = Math.floor(Math.random() * (dice_array.length))
let random_img1 = dice_array[random_num1]
let random_img2 = dice_array[random_num2]


    document.querySelector('.dice_images').innerHTML = `<img src="images/${random_img1}" alt="dice"> <img src="images/${random_img2}" alt="dice">`

    if(random_img1 > random_img2){
        document.querySelector('.container h1').innerHTML = "player 1 won"
    }
    else if(random_img1 === random_img2){
        document.querySelector('.container h1').innerHTML = "draw"
    }
    else{
        document.querySelector('.container h1').innerHTML = "player 2 won"
    }
