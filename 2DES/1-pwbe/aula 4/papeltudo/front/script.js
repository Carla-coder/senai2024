const dados = document.getElementById('dados');
    fetch('http://localhost:3000/item')
        .then(res => res.json())
        .then(res => {
            res.forEach(item => {
                dados.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.nome}</td>
                        <td>${item.Descrição}</td>
                        <td>${item.valor}</td>
                        <td>${item.Ação}</td>
                        <td>
                            <button onclick='del(${item.id})'>[ - ]</button>
                            <button onclick='window.location.href="./update.html?id=${item.id}&nome=${item.nome}&Descricao=${item.Descriçao}&valor=${item.valor}&Acao=${item.Ação}"'>
                                [ * ]
                            </button>
                        </td>
                    </tr>
                `;
            });
        });

    function del(id) {
        fetch(`http://localhost:3000/item/${id}`,{method: 'DELETE'})
            .then(res => res.json())
            .then(res => {
                window.location.reload();
            });
    }
