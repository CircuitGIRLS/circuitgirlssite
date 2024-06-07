
function toggleform() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function toggleForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
function login() {
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;

    // Verificar se o usuário existe no localStorage
    if (localStorage.getItem(username) === password) {
        document.getElementById("loginMessage").innerText = "Login bem-sucedido!";
        setTimeout(function() {1
            window.location.href = "inicio.html";
        }, 2000); // Tempo em milissegundos (2 segundos)
    } else {
        document.getElementById("loginMessage").innerText = "Usuário ou senha incorretos!";
    }
}

function validarEmail(email) {
    // Expressão regular para validar o formato do email
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function cadastrar() {
    var username = document.getElementById("Usuario").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Senha").value;

    // Verificar se todos os campos foram preenchidos
    if (username && email && password) {
        // Verificar se o endereço de e-mail é válido
        if (validarEmail(email)) {
            // Verificar se o usuário já existe no localStorage
            if (localStorage.getItem(username)) {
                document.getElementById("cadastroMessage").innerText = "Usuário já cadastrado!";
            } else {
                // Cadastrar novo usuário no localStorage
                localStorage.setItem(username, password);
                document.getElementById("cadastroMessage").innerText = "Cadastro bem-sucedido! Redirecionando...";

                // Redirecionar para outra página após 2 segundos
                setTimeout(function() {1
                    window.location.href = "inicio.html";
                }, 2000); // Tempo em milissegundos (2 segundos)
            }
        } else {
            document.getElementById("cadastroMessage").innerText = "Por favor, insira um endereço de e-mail válido!";
        }
    } else {
        document.getElementById("cadastroMessage").innerText = "Por favor, preencha todos os campos!";
    }
}
var modal = document.getElementById('contactModal');
var btn = document.getElementById('contactBtn');
var span = document.getElementById('closeBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
