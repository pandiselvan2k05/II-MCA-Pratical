const optionals:string[] = ["%","AC","Del","=","7","8","9","*","4","5","6","-","1","2","3","+","0",".","(",")"]
const optional = document.getElementById("op") as HTMLDivElement
const inputEle = document.getElementById("num") as HTMLInputElement
optionals.forEach(op => {
    const But = document.createElement("p") as HTMLParagraphElement
    But.innerText = `${op}`
    But.id = op.toString()
    But.className = "flex justify-center items-center cursor-pointer w-20 h-15 border-2 bg-white text-lg rounded-xl"
    optional.appendChild(But)
    But.addEventListener('click',(e)=>{
        if(op == "AC"){
            inputEle.value = ""
        }
        else if(op == "C"){
            inputEle.value = inputEle.value.substring(0,inputEle.value.length-1)
        }
        
    })
});