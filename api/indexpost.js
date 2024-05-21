
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Dados</title>
</head>
<body>
    <h1>Atualizar Dados</h1>
    <form id="updateForm">
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome"><br>
        <label for="idade">Idade:</label><br>
        <input type="number" id="idade" name="idade"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
        <button type="submit">Enviar</button>
    </form>

    <script>
        document.getElementById('updateForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                nome: document.getElementById('nome').value,
                idade: document.getElementById('idade').value,
                email: document.getElementById('email').value
            };

            fetch('http://192.168.1.112:3000/atualizar', { // <--- Aqui você ajusta a URL para apontar para o seu servidor local
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar os dados');
            });
        });
    </script>
</body>
</html>
