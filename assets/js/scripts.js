document.addEventListener('DOMContentLoaded', function () {
    const selectCategoria = document.getElementById('categoria');
    const selectSubCategoria = document.getElementById('subCategoria');
    const labelSubcategoria = document.getElementById('labelSubcategoria');
    const camposSubcategoria = document.getElementById('camposSubcategoria');

    console.log("scripts.js carregado");

    const regrasSubcategoria = {

        // descrever CFTV aqui! id's 1 e 2
        "1": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "2": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),

        // descrever FLITS aqui! id's de 3 a 11
        "3": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "4": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "5": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "6": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "7": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "8": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "9": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoVelocidade() + campoDescricao(),
        "10": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoVelocidade() + campoDescricao(),
        "11": () => campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoVelocidade() + campoDescricao(),

        // descrever MOOVSEC aqui! id's de 12 a 37
        "12": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "13": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "14": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "15": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "16": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "17": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "18": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "19": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "20": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "21": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "22": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "23": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "24": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "25": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "26": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "27": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "28": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "29": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "30": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "31": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "32": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "33": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "34": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "35": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "36": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),
        "37": () => campoFuncionario() + dataHoraFato() + localFato() + campoDescricao(),


        // descrever SAC aqui! id's de 38 a 43
        "38": () => campoMotivoSAC_1() + campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "39": () => campoMotivoSAC_2() + campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),
        "40": () => campoMotivoSAC_3() + campoFuncionario() + campoVeiculo() + dataHoraFato() + localFato() + campoDescricao(),

        // id=1 ('Bater ponto sem uniforme', 1),
        // id=2 ('Uso de celular durante abastecimento', 1),
        // id=3 ('Pontualidade', 2),
        // id=4 ('Cumprimento de partidas', 2),
        // id=5 ('Comboio', 2),
        // id=6 ('Desvio de itinerário', 2),
        // id=7 ('Carro parado', 2),
        // id=8 ('Cumprimento de viagem', 2),
        // id=9 ('Excesso de velocidade em zona', 2),
        // id=10 ('Excesso de velocidade em zona rural', 2),
        // id=11 ('Excesso de velocidade global', 2),
        // id=12 ('Abandono de veículo', 3),
        // id=13 ('Carona', 3),
        // id=14 ('Descarte de objeto pela janela', 3),
        // id=15 ('Desvio de rota', 3),
        // id=16 ('Fora do posto de trabalho', 3),
        // id=17 ('Janela aberta após viagem', 3),
        // id=18 ('Porta aberta / Anjo da guarda', 3),
        // id=19 ('Passageiro(a) sentado(a) na tampa do motor', 3),
        // id=20 ('Acompanhado ao volante', 3),
        // id=21 ('Alimentando', 3),
        // id=22 ('Animal no veículo', 3),
        // id=23 ('Sem cinto de segurança', 3),
        // id=24 ('Dirigindo com a mão no câmbio', 3),
        // id=25 ('Dirigindo sem as duas mãos no volante', 3),
        // id=26 ('Dirigindo com o braço na janela', 3),
        // id=27 ('Dormindo', 3),
        // id=28 ('Exercitando-se dentro do veículo', 3),
        // id=29 ('Fone de ouvido', 3),
        // id=30 ('Fumando', 3),
        // id=31 ('Mexer no posicionamento da câmera', 3),
        // id=32 ('Pulando a catraca', 3),
        // id=33 ('Pulando o banco', 3),
        // id=34 ('Relacionamento dentro do veículo', 3),
        // id=35 ('Sem uniforme', 3),
        // id=36 ('Urinando', 3),
        // id=37 ('Usando celular', 3),
        // id=38 ('Horário', 4),
        // id=39 ('Percurso', 4),
        // id=40 ('Comportamento', 4),
        // id=41 ('Ônibus', 4),
        // id=42 ('Desvio de receita', 4),
        // id=43 ('Sugestão / Outros', 4);
    };

    // SAC: ids 38, 39, 40
    // ["38", "39", "40"].forEach(id => {
    //     regrasSubcategoria[id] = () => campoMotivoSAC_1();
    // });

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
