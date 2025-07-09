
function gerarSenha() {
    const length = parseInt(document.getElementById("tamanho").value);
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
    let senha = "";
    for (let i = 0; i < length; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("senhaGerada").textContent = senha;
}
