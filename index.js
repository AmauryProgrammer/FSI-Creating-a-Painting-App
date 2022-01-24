let selectedColor = 'blue'
const painting = document.querySelector('.painting')
const choice = document.querySelectorAll('.color-choice')
//let colorArray = document.querySelectorAll(".color-choice")

// here we click on a pixel on the canvas
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

//here we choose our colors
const colorChoices = document.querySelectorAll('.color-choice')
for(let i = 0; i < colorChoices.length; i ++){
    colorChoices[i].addEventListener('click', function(){
        selectedColor = colorChoices[i].id
        console.log(selectedColor)
    })
}