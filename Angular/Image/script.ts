const imgref = document.getElementById("Img") as HTMLImageElement

function MouseIn(){
    const valref = document.getElementsByName("val")
    valref.forEach((radio)=>{
        radio.addEventListener("change",()=>{
            const sel = radio as HTMLInputElement
            if(sel.checked){
                imgref.src=`${sel.value}.png`
            }
        })   
     })
}