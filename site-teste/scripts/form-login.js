        // document.querySelector("button").addEventListener("click",validarLogin);
        function validarLogin() {
            let login = document.querySelector("#login").value;
            console.log(login);
            let senha = document.querySelector("#senha").value;
            console.log(senha);
            let msg = document.querySelector("span");

            if (login == "senai" && senha == "010203") {
                msg.innerHTML = "Acesso Permitido! <a href='index.html'>Clique aqui</a>";
                msg.style = "background-color: blue";
                window.location.href = "index.html";
            } else {
                msg.innerText = "Login ou Senha incorretos!";
                msg.style = "background-color: red";
            }

            return false;
        }