document.addEventListener('DOMContentLoaded', function () {
    const selectCategoria = document.getElementById('categoria');
    const selectSubCategoria = document.getElementById('subCategoria');
    const labelSubcategoria = document.getElementById('labelSubcategoria');
    const camposSubcategoria = document.getElementById('camposSubcategoria');

    console.log("scripts.js carregado");

    const regrasSubcategoria = {
        "1": () => campoFuncionario() + dataHoraFato(),
        "2": () => campoFuncionario() + campoVelocidade() + campoVeiculo() + dataHoraFato(),
        "3": () => campoFuncionario() + campoVeiculo() + dataHoraFato(),
        "6": () => campoFuncionario() + campoVelocidade() + campoVeiculo() + dataHoraFato(),
    };

    // SAC: ids 38, 39, 40
    ["38", "39", "40"].forEach(id => {
        regrasSubcategoria[id] = () => campoMotivoSAC_1();
    });

    // Ao mudar categoria: popula subcategorias vindas do PHP
    selectCategoria.addEventListener('change', function () {
        const categoriaId = String(this.value);
        console.log("categoria selecionada:", categoriaId);

        selectSubCategoria.innerHTML = '<option value="">-- Selecione --</option>';
        camposSubcategoria.innerHTML = '';

        if (categoriaId && subcategorias[categoriaId]) {
            labelSubcategoria.style.display = 'block';
            selectSubCategoria.style.display = 'block';

            subcategorias[categoriaId].forEach(sub => {
                const opt = document.createElement('option');
                opt.value = String(sub.id);
                opt.textContent = sub.nome;
                opt.dataset.nome = sub.nome;
                selectSubCategoria.appendChild(opt);
            });

            console.log("opções de subcategoria adicionadas:", subcategorias[categoriaId]);
        } else {
            labelSubcategoria.style.display = 'none';
            selectSubCategoria.style.display = 'none';
        }
    });

    // Ao mudar subcategoria: renderiza campos conforme regra
    selectSubCategoria.addEventListener('change', function () {
        const subId = String(this.value);
        console.log("subcategoria selecionada:", subId);
        camposSubcategoria.innerHTML = '';

        let regra = null;
        if (subId && Object.prototype.hasOwnProperty.call(regrasSubcategoria, subId)) {
            regra = regrasSubcategoria[subId];
        }

        if (regra) {
            try {
                camposSubcategoria.innerHTML = regra();
                console.log("campos renderizados para subId:", subId);

                // === REATIVA LISTENER AQUI ===
                const crachaFuncionario = document.getElementById("crachaFuncionario");
                const nomeFuncionario = document.getElementById("nomeFuncionario");
                const setorFuncionario = document.getElementById("setorFuncionario");
                const prefixo = document.getElementById("prefixo");
                const setorVeiculo = document.getElementById("setorVeiculo");
                const linha = document.getElementById("linha");
                const setorLinha = document.getElementById("setorLinha");

                crachaFuncionario?.addEventListener("blur", async () => {
                    const cracha = crachaFuncionario.value.trim();
                    if (cracha !== "") {
                        try {
                            // >>> Corrigido parâmetro para crachaFuncionario
                            const response = await fetch(`assets/php/buscar_funcionario.php?crachaFuncionario=${cracha}`);
                            const dados = await response.json();

                            if (dados.erro) {
                                nomeFuncionario.value = "";
                                setorFuncionario.value = "";
                                alert(dados.erro);
                            } else {
                                nomeFuncionario.value = dados.nome;
                                setorFuncionario.value = dados.setor_nome;
                            }
                        } catch (e) {
                            console.error("Erro ao buscar funcionário:", e);
                        }
                    }
                });

                prefixo?.addEventListener("blur", async () => {
                    const pref = prefixo.value.trim();
                    if (pref !== "") {
                        try {
                            // >>> Corrigido parâmetro para crachaFuncionario
                            const response = await fetch(`assets/php/buscar_veiculo.php?prefixo=${pref}`);
                            const dados = await response.json();

                            if (dados.erro) {
                                setorVeiculo.value = "";
                                alert(dados.erro);
                            } else {
                                setorVeiculo.value = dados.setor_veiculo;
                            }
                        } catch (e) {
                            console.error("Erro ao buscar funcionário:", e);
                        }
                    }
                });

                linha?.addEventListener("blur", async () => {
                    const lin = linha.value.trim();
                    if (lin !== "") {
                        try {
                            // >>> Corrigido parâmetro para crachaFuncionario
                            const response = await fetch(`assets/php/buscar_linha.php?linha=${lin}`);
                            const dados = await response.json();

                            if (dados.erro) {
                                setorLinha.value = "";
                                alert(dados.erro);
                            } else {
                                setorLinha.value = dados.setor_linha;
                            }
                        } catch (e) {
                            console.error("Erro ao buscar funcionário:", e);
                        }
                    }
                });

            } catch (err) {
                console.error("Erro ao executar a regra da subcategoria:", err);
                camposSubcategoria.innerHTML = '<p style="color:red">Erro ao gerar campos desta subcategoria.</p>';
            }
        } else {
            const nome = this.selectedOptions[0] ? this.selectedOptions[0].dataset.nome : '';
            camposSubcategoria.innerHTML = `<p>Nenhuma regra configurada para a subcategoria "<strong>${nome}</strong>" (id=${subId}).</p>`;
            console.warn("Nenhuma regra encontrada para subId:", subId);
        }
    });
});
