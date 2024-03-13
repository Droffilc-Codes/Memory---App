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

/*
    plain picture at the start
    click the play button
    random picture appears and disappears
    other pics slide show begins
    get result
*/
let randomValue
projectedImage.src = '/images/blank.png'


function clickPlayButton() {
    controller1()
 
}

// The game controller


function controller1 (){
console.log((theFirstBox.classList.contains('removeFace')))

randomValue = Math.floor(Math.random() * theFaces.length)
console.log(randomValue)

//Set the image to be matched
projectedImage.src = theFaces[randomValue].img




function removeFace (){
    if(theFirstBox.classList.contains('removeFace')){
           theFirstBox.classList.remove('removeFace')
        //    projectedImage.src = '/images/blank.png'
           console.log("Started Again!")
       }else{
           theFirstBox.classList.add('removeFace')
           console.log("deleted first box")
       }
}

// }
// //Show the face to be matched and then remove it
let timerId = null
timerId = setTimeout(removeFace, 1500)


//Reel out all the faces in the database
let currentFaces = theFaces.length

function endRandomFaces(){
    currentFaces--
    console.log(currentFaces)
    userChoice.src = theFaces[currentFaces].img
    userChoice.setAttribute('id', theFaces[currentFaces].id)
    if(currentFaces === 0){
        clearInterval(countDownFaces)
    }
}

let countDownFaces = setInterval(endRandomFaces, 2000)

//Click and see the id number
userChoice.addEventListener('click', (e)=>{
    let getId = e.target.id
    let getIdReal = parseInt(getId)
    let ourScore = theFaces[randomValue].id
   // If nothing is selected -- tell me
    if(ourScore === getIdReal){
        console.log("They Matched!")
        clearInterval(countDownFaces)
        console.log((theFirstBox.classList.contains('removeFace')))
        theFirstBox.classList.remove('removeFace')
    }else{
        console.log("No Match!")
        clearInterval(countDownFaces)
       console.log((theFirstBox.classList.contains('removeFace')))
       theFirstBox.classList.remove('removeFace')

    }
})
}





// Have a Restart Button




// Page loads with a description of the game and selection of beginner (1 - face), intermediate (2 - faces), Expert (3 - 0r 4 - faces)
// Match more than two faces at once
// Score points 
// Count down timer

