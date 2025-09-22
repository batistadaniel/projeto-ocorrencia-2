document.addEventListener("DOMContentLoaded", () => {
    fetch("listar_situacao.php")
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text);
                });
            }
            return response.json();
        })
        .then(data => {
            const select = document.getElementById("situacoe_id");
            select.innerHTML = '<option value="">Selecione...</option>';

            data.forEach(dep => {
                const option = document.createElement("option");
                option.value = dep.id;
                option.textContent = dep.nome;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar situacoes:", error);
            document.getElementById("situacoe_id").innerHTML = '<option>Erro ao carregar</option>';
        });
});
