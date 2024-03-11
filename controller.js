console.log("Hello")

const theFaces = [
    {
        id: 1,
        img: '/images/face-1.png'
    },

    {
        id: 2,
        img: '/images/face-2.png'
    },
    {
        id: 3,
        img: '/images/face-3.png'
    },
    {
        id: 4,
        img: '/images/face-4.png'
    },
    {
        id: 5,
        img: '/images/face-5.png'
    },
    {
        id: 6,
        img: '/images/face-6.png'
    },
    {
        id: 7,
        img: '/images/face-7.png'
    },
    {
        id: 8,
        img: '/images/face-8.png'
    },
    {
        id: 9,
        img: '/images/face-9.png'
    },
    {
        id: 10,
        img: '/images/face-10.png'
    }
]

const projectedImage = document.querySelector('.top-image')
const userChoice = document.querySelector('.bottom-image')
let theFirstBox = document.querySelector('.first-box')
const playButton = document.querySelector('#thebutton')

playButton.addEventListener('click', clickPlayButton);

function clickPlayButton() {
    // Bring back top image - randomly
    // location.reload();
    controller1()

}

// The game controller


function controller1 (){

let randomValue = Math.floor(Math.random() * theFaces.length)
console.log(randomValue)

//Set the image to be matched
projectedImage.src = theFaces[randomValue].img

//Store the image to be matched with the id
let loadedImage = []
if(loadedImage.length>0){
    loadedImage.length = 0
}

loadedImage.push(theFaces[randomValue].id)

 // Test
 theFirstBox.style.display = 'block'
if(theFirstBox.style.display == 'none'){
    console.log("It will not show")
}else{
    console.log("It will show")

}
//Show the face to be matched and then remove it
let removeTopImage = setInterval(()=>{theFirstBox.style.display = 'none'}, 2500)

//Reel out all the faces in the database
let currentFaces = theFaces.length

function endRandomFaces(){
    currentFaces--
    console.log(currentFaces)
    userChoice.src = theFaces[currentFaces].img
    userChoice.setAttribute('id', theFaces[currentFaces].id)
    console.log(loadedImage[0])
    if(currentFaces === 0){
        clearInterval(countDownFaces)
    }
}

let countDownFaces = setInterval(endRandomFaces, 2000)
//Click and see the id number
userChoice.addEventListener('click', (e)=>{
    let getId = e.target.id
    let getIdReal = parseInt(getId)

   // If nothing is selected -- tell me
    if(loadedImage[0] === getIdReal){
        console.log(loadedImage[0], getIdReal)
        console.log("They Matched!")
        clearInterval(countDownFaces)
        // clearInterval(removeTopImage)
    }else{
        console.log(loadedImage[0], getIdReal)
        console.log("No Match!")
        clearInterval(countDownFaces)
        // clearInterval(removeTopImage)

    }
})

}




// Have a Restart Button




// Page loads with a description of the game and selection of beginner (1 - face), intermediate (2 - faces), Expert (3 - 0r 4 - faces)
// Match more than two faces at once
// Score points 
// Count down timer

