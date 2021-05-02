let myImage = document.querySelector("img")
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src')
    if (mySrc == './images/flower-girl.png') {
        myImage.setAttribute('src', './images/grass-mask.png')
    }
    else {
        myImage.setAttribute('src', './images/flower-girl.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
const welcomePrefix = 'A warm welcome to: '
function setUserName() {
    let myName = prompt('Please enter your name')
    let greetingMsg = welcomePrefix
    if (myName !== null) {
        if (myName === '') {
            setUserName()
        }
        else {
            localStorage.setItem('name', myName)
            greetingMsg += myName
            myHeading.textContent = greetingMsg
        }
    }
}

let storedName = localStorage.getItem('name')
if (!storedName) {
    setUserName()
}
else {
    myHeading.textContent = welcomePrefix + storedName
}

myButton.onclick = setUserName
