function atualizarRelogio() {
    var dataAtual = new Date();
    var dataFormatada  = dataAtual.toLocaleString('pt-br');
    document.getElementById("data-atual").innerText = "Data Atual: " + dataFormatada;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

async function enviarDados() {
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome_aluno").value;
    const nascimento = document.getElementById("nasc_aluno").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    const { data, error } = await supabaseClient.from('alunos').insert([
        { matricula, nome, nascimento, sexo }
    ]);
    if (error) {
        console.error('Erro ao enviar dados:', error);
    } else {
        console.log('Dados enviados com sucesso:', data);
    }
    alert("Dados enviados com sucesso!");
    document.querySelector("form").reset();







}