window.addEventListener("load", () => {
    let form = document.querySelector("#form");
    let result = document.querySelector("p#result");
    // https://javascript.info/xmlhttprequest
    
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // https://developer.mozilla.org/en-US/docs/Web/API/FormData
        let formValues = new FormData(form);
        callAjax(formValues);    
    });
    
    let callAjax = (data) => {
        let ajaxObject = new XMLHttpRequest();
        ajaxObject.open("POST", "submit.php");
        ajaxObject.onreadystatechange = () => {
            if(ajaxObject.readyState == 4) {
                if(ajaxObject.status == 200) {
                    result.classList.add("open");
                    result.innerHTML = "Deu certo: " + data.get("nome") + " " + data.get("email") + ".";
                    setTimeout(() => {
                        result.classList.remove("open");
                    }, 3000);
                }
            }
        }
        ajaxObject.send(data);
    } 
});
