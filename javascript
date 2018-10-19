const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag= document.querySelector(`input[name="typesize"]`)
const outputTag = document.querySelector("textarea.output")
const originalText= outputTag.value
const typesizeOutput= document.querySelector("span.typesize-output")
const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutPut= document.querySelector("span.lineheight-output")
const itatlicTag= document.querySelector(`input[name="italic"]`)
const typefaceTag= document.querySelector(`select`)
const fontweightTag= document.querySelector("span.fontweight-output")
const colorTags = document.querySelectorAll("div.colors div")

//when I type in my sentence tag, update the output tag accordingly
//If there is not value put in the original text
sentenceTag.addEventListener("keyup", function () {
if (this.value){
  outputTag.innerHTML= this.value
} else { outputTag.value= originalText
  }
})

//when I type in my output Tag, update the sentence tag accordingly
outputTag.addEventListener("Keyup", function() {
  sentence.value=this.value
})

// when I change my typesize slider, update the text next to it AND
// change the outputTag's font size

typesizeTag.addEventListener("input", function() {
  outputTag.style.fontsize=this.value +"px"
  typesizeOutput.innerHTML = this.value + "pixels"
})
fontweightTag.addEventListener("input", function() {
  outputTag.style.fontweight= this.value
  fontweightOutput.innerHTML= this.value
})

lineheightTag.addEventListener("input", function(){
  outputTag.style.lineheight= this.value
  lineheightOutput.innerHTML= this.value
  
})
//when I change my italic checkbox, update the font style to either
//normal or italic if it's checked or not

Italic.addEventListener("change", function (){
  if (this.checked){
    outputTag.style.fontstyle="italic"
    
  } else {
    outputTag.style.fontstyle=normal
  }
})

//when I change my select for typeface, update the font family
typefaceTag.addEventListener("input", function() {
  outputTag.style.fontFamily = this.value
})
//go through all of my color tags, then...
//when I click one of them, change the background color and 
//the text color
colorTags.forEach(tag => {
  tag.addEventListener("click", function() {
   outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color= this.style.color
  })
                      
                     
})
