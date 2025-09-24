<?php
require 'conexao.php';

// consulta categorias
$sqlCat = "SELECT id, nome FROM categoria_ocorrencia ORDER BY nome";
$queryCat = mysqli_query($conn, $sqlCat);

// consulta subcategorias
$sqlSub = "SELECT id, categoria_id, nome FROM subcategoria_ocorrencia ORDER BY nome";
$querySub = mysqli_query($conn, $sqlSub);

// organiza subcategorias agrupadas pela categoria
$subcategorias = [];
while ($row = mysqli_fetch_assoc($querySub)) {
    $subcategorias[$row['categoria_id']][] = $row;
}
?>
<form action="" method="post">
    <label for="categoria">Categoria:</label>
    <select name="categoria" id="categoria" required>
        <option value="">-- Selecione --</option>
        <?php while ($row = mysqli_fetch_assoc($queryCat)): ?>
            <option value="<?= $row['id'] ?>">
                <?= htmlspecialchars($row['nome']) ?>
            </option>
        <?php endwhile; ?>
    </select>

    <label for="subCategoria" id="labelSubcategoria" style="display:none;">Subcategoria:</label>
    <select name="subCategoria" id="subCategoria" style="display:none;">
        <option value="">-- Selecione --</option>
    </select>

    <div id="camposSubcategoria"></div>

    <button type="submit">Enviar</button>
</form>

<script>
    // subcategorias vindas do banco
    const subcategorias = <?php echo json_encode($subcategorias ?? []); ?>;
</script>
<script src="./assets/js/components.js"></script>
<script src="./assets/js/scripts.js"></script>
