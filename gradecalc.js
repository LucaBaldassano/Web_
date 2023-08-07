document.getElementById("checkgrade").addEventListener('click', ()=>{
    let grade = document.getElementById("grade").value
    let result = document.getElementById("result")
    if(grade >= 40){
        result.innerHTML = "Pass"
        body.style.backgroundColor = "green"
    
    }
    else{
        result.innerHTML = "Fail"
        body.style.backgroundColor = "red"
    }


})