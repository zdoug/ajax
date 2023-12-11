window.addEventListener("load", () => {
    let form = document.querySelector("#form");
    let result = document.querySelector("p#result");
    
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formValues = {
            "nome": form.nome.value,
            "email": form.email.value
        };
        callAjax(formValues);    
    });
    
    let callAjax = (data) => {
        let ajaxObject = new XMLHttpRequest();
        ajaxObject.open("POST", "submit.php");
        ajaxObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajaxObject.onreadystatechange = function() {
            if(ajaxObject.readyState==4) {
                if(ajaxObject.status==200) {
                    result.classList.add("open");
                    result.innerHTML = "Deu certo: " + data.nome + " " + data.email + ".";
                    setTimeout(() => {
                        result.classList.remove("open");
                    },3000);
                }
            }
        }
        ajaxObject.send("nome=" + data.nome + "&email=" + data.email);
    } 
});
