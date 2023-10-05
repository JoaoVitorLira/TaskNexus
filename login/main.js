// Seleciona o formulário de login
const form = document.querySelector('.login-form');

//Seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']");
// Dessa forma identificamos a tag pelo tipo do input dela, usamos o form ao invés do documento para indicar onde o código deve procurar esse input

const senhaInput = form.querySelector("input[type='password']");
// Seleciona o campo de entrada da senha

// Adiciona um ouvinte de eventos ao formulario para detectar quando o usuário clicar no botao
form.addEventListener('submit', (event) =>{

    // Adicionar o event,preventDefault
    event.preventDefault();

    //Obtém os valores dos campos de entrada do usuario e senha e o trim() remove os espaços em branco tanto no começo qunto no final de cada campo
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    //Verifica se os campos de usuaruo e senha estão preenchidos
    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos");
    } else if (usuario === 'usuario' && senha === 'senha') {
        //Verifica se as informações de login e senha estão corretas
        alert('Bem vindo!')
        location.replace("/tarefa/tarefa.html", ("_self"))
    }else {
        //Exibe uma mensagem de erro se as informaçoes estiverem erradas
        alert("Usuario ou senha incorreto, tente novamente")
    }

})