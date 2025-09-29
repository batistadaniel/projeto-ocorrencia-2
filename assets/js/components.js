function campoFuncionario() {
    return `
        <div>
            <label for="crachaFuncionario">Cracha: </label>
            <input type="text" name="crachaFuncionario" id="crachaFuncionario">
            <label for="nomeFuncionario">Nome: </label>
            <input type="text" name="nomeFuncionario" id="nomeFuncionario">
            <label for="setorFuncionario">Setor: </label>
            <input type="text" name="setorFuncionario" id="setorFuncionario">

            <img id="fotoFuncionario" src="" alt="Foto do funcionário" style="max-width:100px; display:none;">
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

function campoVeiculo() {
    return `
        <div>
            <label for="prefixo">Prefixo:</label>
            <input type="text" name="prefixo" id="prefixo" required>
            <label for="setorVeiculo">Setor do veiculo:</label>
            <input type="text" name="setorVeiculo" id="setorVeiculo" required>
            <label for="linha">Linha:</label>
            <input type="text" name="linha" id="linha" required>
            <label for="setorLinha">Setor da linha:</label>
            <input type="text" name="setorLinha" id="setorLinha" required>
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

function campoDescricao () {
    return `
        <div>
            <label for="descricao">Descricao do fato:</label>
            <textarea name="descricao" id="descricao" cols="30" rows="10" placeholder="Descreva os fatos e observacoes aqui!"></textarea>
        </div>
    `;
}

function campoMotivoSAC_1 () {
    return `
        <select name="motivo_sac_1" id="motivo_sac_1">
            <option value="">Selecione...</option>
            <option value="1">Passou atrasado</option>
            <option value="2">Passou adiantado</option>
            <option value="3">Furo de horário - não passou</option>
            <option value="4">Saída antecipada ou atrasada do terminal</option>
        </select>
    `;
}

function campoMotivoSAC_2 () {
    return `
        <select name="motivo_sac_2" id="motivo_sac_2">
            <option value="">Selecione...</option>
            <option value="21">Desvio de itinerário</option>
            <option value="22">Percurso incompleto</option>
        </select>
    `;
}

function campoMotivoSAC_3 () {
    return `
        <select name="motivo_sac_3" id="motivo_sac_3">
            <option value="">Selecione...</option>
            <option value="31">Acidente no interior do ônibus</option>
            <option value="32">Agressão física</option>
            <option value="33">Agressão moral</option>
            <option value="34">Atividades particulares durante viagem</option>
            <option value="35">Desatenção</option>
            <option value="36">Desrespeito ao falar com passageiro</option>
            <option value="37">Desrespeito com idoso/deficiente</option>
            <option value="38">Direção perigosa</option>
            <option value="39">Elogio ao funcionário</option>
            <option value="310">Trafegando com itinerário desligado ou de especial</option>
            <option value="311">Não espera embarcar/desembarcar</option>
            <option value="312">Não para no ponto</option>
            <option value="313">Velocidade incompatível com a via</option>
            <option value="314">Fumando</option>
            <option value="315">Consumindo bebida alcoólica</option>
        </select>
    `;
}

function campoMotivoSAC_4 () {
    return `
        <select name="motivo_sac_4" id="motivo_sac_4">
            <option value="">Selecione...</option>
            <option value="41">Interior do ônibus molhado</option>
            <option value="42">Itinerário ilegível</option>
            <option value="43">Ônibus em condições ruins</option>
            <option value="44">Ônibus quebrado</option>
            <option value="45">Ônibus superlotado</option>
        </select>
    `;
}

function campoMotivoSAC_5 () {
    return `
        <select name="motivo_sac_5" id="motivo_sac_5">
            <option value="">Selecione...</option>
            <option value="51">Carona</option>
            <option value="52">Cobrador fica com dinheiro e passa um cartão</option>
        </select>
    `;
}

function campoMotivoSAC_6 () {
    return `
        <select name="motivo_sac_6" id="motivo_sac_6">
            <option value="">Selecione...</option>
            <option value="61">Alteração tabela horária</option>
            <option value="62">Outras</option>
        </select>
    `;
}

