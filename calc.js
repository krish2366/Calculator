let output = document.querySelector(".output");

let btns = document.querySelectorAll(".btn");


Array.from(btns).forEach((btn) => {
   
    btn.addEventListener("click",(e) =>{
        if(btn.textContent === "=" ){
            output.textContent = eval(output.textContent);
            
        }else if(btn.textContent === "AC" ){
            output.textContent = "";
        }else{
            output.textContent += btn.textContent;
            

        }
    })

    
})

