document.addEventListener('DOMContentLoaded', function () {
    const selectCategoria = document.getElementById('categoria');
    const selectSubCategoria = document.getElementById('subCategoria');
    const labelSubcategoria = document.getElementById('labelSubcategoria');
    const camposSubcategoria = document.getElementById('camposSubcategoria');

    console.log("scripts.js carregado");

    // Mapeie pelas IDs reais do seu banco (use strings pra evitar confusão)
    const regrasSubcategoria = {
        "1": () => campoFuncionario() + dataHoraFato(), // subcategoria id=1
        "2": () => campoFuncionario() + campoVelocidade() + campoVeiculo() + dataHoraFato(), // id=2
        "3": () => campoFuncionario() + campoVeiculo() + dataHoraFato() ,// id=3
        "6": () => campoFuncionario() + campoVelocidade() + campoVeiculo() + dataHoraFato(), // id=2
    };

    // Ao mudar categoria: popula subcategorias vindas do PHP (obj subcategorias)
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
                opt.value = String(sub.id); // value = id da subcategoria no banco
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

        // tenta achar regra de forma segura (string/number)
        let regra = null;
        if (subId && Object.prototype.hasOwnProperty.call(regrasSubcategoria, subId)) {
            regra = regrasSubcategoria[subId];
        } else if (subId && Object.prototype.hasOwnProperty.call(regrasSubcategoria, Number(subId))) {
            regra = regrasSubcategoria[Number(subId)];
        }

        if (regra) {
            try {
                camposSubcategoria.innerHTML = regra();
                console.log("campos renderizados para subId:", subId);
            } catch (err) {
                console.error("Erro ao executar a regra da subcategoria:", err);
                camposSubcategoria.innerHTML = '<p style="color:red">Erro ao gerar campos desta subcategoria.</p>';
            }
        } else {
            // fallback informativo (útil pra saber que falta mapear)
            const nome = this.selectedOptions[0] ? this.selectedOptions[0].dataset.nome : '';
            camposSubcategoria.innerHTML = `<p>Nenhuma regra configurada para a subcategoria "<strong>${nome}</strong>" (id=${subId}).</p>`;
            console.warn("Nenhuma regra encontrada para subId:", subId);
        }
    });

});
