const imgref = document.getElementById("Img") as HTMLDivElement
const radioDiv = document.getElementById("Radio") as HTMLDivElement
const group:number[] = [2,3,4,5,6,7,8,9,10]

group.forEach((op)=>{
    const inputEle = document.createElement("input")
    inputEle.type = "radio"
    inputEle.name = "image"
    inputEle.value = op.toString()
    radioDiv.appendChild(inputEle)
})
const radioref = document.querySelectorAll('input[name="image"]') as NodeListOf<HTMLInputElement>

let index:number = 0
radioref.forEach((image,i)=>{
    image.addEventListener("change",(e)=>{
        index=i
        imgref.style.backgroundImage = `url('${image.value}.png')`
        imgref.style.backgroundSize = "cover";
        imgref.style.backgroundPosition = "center";
    })
})
setInterval(()=>{
    radioref[index].checked = true;
    imgref.style.backgroundImage = `url('${radioref[index].value}.png')`
    imgref.style.backgroundSize = "cover";
    imgref.style.backgroundPosition = "center";
    index++
    if(index>=radioref.length) index=0

},4000)