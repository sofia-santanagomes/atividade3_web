function login(){
    let usuario;
    let senha;

    usuario = prompt("Informe o usuário: ");
    console.log(usuario);
    senha = prompt("Informe a senha: ");
    console.log(senha);

    if(usuario == "aluno" && senha == "123" || usuario == "professor" && senha == "456"){
        alert(`Seu login está correto!!`)
    }else{
        alert(`Login invalido!!`);
    }
}