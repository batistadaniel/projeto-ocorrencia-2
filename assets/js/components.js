function campoFuncionario() {
    return `
        <div>
            <label for="crachaFuncionario">Cracha: </label>
            <input type="text" name="crachaFuncionario" id="crachaFuncionario" required>
            <labe for="nomeFuncionario"l>Nome: </labe>
            <input type="text" name="nomeFuncionario" id="nomeFuncionario">
            <label for="setorFuncionario">Setor: </label>
            <input type="text" name="setorFuncionario" id="setorFuncionario">

            <img id="fotoFuncionarioPreview" src="" alt="Foto do funcionário" style="max-width:100px; display:none;">
        </div>
    `;
}

function dataHoraFato() {
    return `
        <div>
            <label for="dataHoraFato">Dia e Horario do Fato:</label>
            <input type="datetime-local" name="dataHoraFato" id="dataHoraFato" required>
        </div>
    `;
}

function campoVelocidade() {
    return `
        <div>
            <label for="velocidadeReal">Velocidade Real:</label>
            <input type="text" name="velocidadeReal" id="velocidadeReal" required>
            <label for="velocidadeParametrizada">Velocidade Parametrizada:</label>
            <input type="text" name="velocidadeParametrizada" id="velocidadeParametrizada" required>
        </div>
    `;
}

function campoVeiculo() {
    return `
        <div>
            <label for="prefixo">Prefixo:</label>
            <input type="text" name="prefixo" id="prefixo" required>
            <label for="linha">Linha:</label>
            <input type="text" name="linha" id="linha" required>
            <label for="setorVeiculo">Setor:</label>
            <input type="text" name="setorVeiculo" id="setorVeiculo" required>
        </div>
    `;
}

function campoDescricao () {
    return `
        <div>
            <label for="descricao">Descricao do fato:</label>
            <textarea name="descricao" id="descricao" cols="30" rows="10" placeholder="Descreva os fatos e observacoes aqui!"></textarea>
        </div>
    `;
}