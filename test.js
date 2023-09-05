let count=0
let total=0
let totalStr="Total entires: "
function increment(){
    count+=1
    document.getElementById("count-el").innerText = count
}
let a=0
let frase="Previous entires: "
function save(){
    if (count>0){
        if (a==0){
            frase+=count
            a=1
        }
        else{
            frase+=" - "+count
        }
        document.getElementById("save-el").innerText = frase
    }
    total+=count
    document.getElementById("total-el").innerText = totalStr+total
    count=0
    document.getElementById("count-el").innerText = count
}
function reset(){
    count=0
    document.getElementById("count-el").innerText = count
    frase="Previous entires: "
    document.getElementById("save-el").innerText = frase
    a=0
    total=0
    totalStr="Total entires: "
    document.getElementById("total-el").innerText = "Total entires: 0"
}
