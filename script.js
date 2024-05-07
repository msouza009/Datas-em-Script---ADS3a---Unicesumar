function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{0,100}$/;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexTelefone = /^\([1-9]{2}\) (9[1-9][0-9]{3}-[0-9]{4}|[2-9][0-9]{3}-[0-9]{4})$/;

    if (!regexNome.test(nome)) {
        alert('Nome inválido. Certifique-se de que o nome contém apenas letras e espaços e não excede 100 caracteres.');
        return false;
    }
    if (!regexEmail.test(email)) {
        alert('Email inválido. Certifique-se de que o email está no formato correto.');
        return false;
    }
    if (!regexTelefone.test(telefone)) {
        alert('Telefone inválido. Use o formato (XX) XXXX-XXXX ou (XX) 9XXXX-XXXX e inclua o DDD.');
        return false;
    }

    alert('Todos os dados estão válidos!');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', validarFormulario);
});
