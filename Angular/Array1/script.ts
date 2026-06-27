const but = document.getElementById("button") as HTMLDivElement
const result = document.getElementById("res") as HTMLDivElement
const naref = document.getElementById("name") as HTMLDivElement
const numref = document.getElementById("num") as HTMLInputElement
const arr:number[] = [];
const Odd = ()=>{
    naref.innerHTML = "Odd :"
    result.innerText = `${arr.filter((val)=> val % 2 == 0).join("  ,  ")}`
}
const Even = ()=>{
    naref.innerHTML = "Even :"
    result.innerText = `${arr.filter((val)=> val % 2 != 0).join("  ,  ")}`
}
const Filter = ()=>{
    naref.innerHTML = "Filter :"
    result.innerText = `${arr.filter((val)=> val > parseInt(numref.value)).join("  ,  ")}`
}
const Add = ()=>{
    const num:number = parseInt(numref.value)
    arr.push(num)
    numref.value = ""
    naref.innerHTML = "Add :"
    result.innerHTML = `Element Add Successfully.`
}
const pow = ()=>{
    const power = arr.map(i=>i*i)
    naref.innerHTML = "Power"
    result.innerHTML = `${power}`
}
const Delete = ()=>{
    naref.innerHTML = "Delete Last Element :"
    if(arr.length == 0){ 
        result.innerHTML = 'All Array Element are Delete'
        return
    }
    result.innerText = `Delete Element : ${arr.pop()}`
}
const Display =()=>{
    naref.innerHTML = "Display"
    result.innerHTML = `Array Element : ${arr.join("  ,  ")}`
}
const pass = ()=>{
    naref.innerHTML = "Passitive OR Negative :"
    const re = arr.every((val)=> 0 < val)
    if(re){
        result.innerHTML = `The all element are Passitive`
    }
    else{
        result.innerHTML = `any one element are Negative`
    }
}
const fun = [Display,Delete,Odd,Even,Filter,pow,pass]
const op = ["Display","Delete","Odd","Even","Filter","Power","Passitive or Negative"]

op.forEach((val,index)=>{
    const button = document.createElement('input')
    button.name = "Array"   
    button.type="radio"
    button.onclick = ()=>{
            fun[index]()
    }
    button.innerText = val
    button.className="w-3 h-3 m-1 p-2"
    const lab = document.createElement('label')
    lab.className ="text-lg"
    lab.innerHTML = val
    but.appendChild(button)
    but.appendChild(lab)
})
