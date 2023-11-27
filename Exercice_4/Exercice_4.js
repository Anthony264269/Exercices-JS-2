

const supprimeText = document.querySelector("button");
let inputs = document.querySelectorAll('input');
console.log(inputs);
supprimeText.addEventListener("click",function(){
    inputs.forEach(input => {
        console.log(input.value);
        input.value="";

    });
})


