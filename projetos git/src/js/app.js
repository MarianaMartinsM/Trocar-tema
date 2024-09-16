       // Alternar para "Boa noite" quando clicar em "Bom dia"
       document.getElementById('bomdia').addEventListener('click', function() {
        document.body.classList.add('boa-noite-tema');
        document.body.classList.remove('bom-dia-tema');

        // Esconder "Bom dia" e mostrar "Boa noite"
        document.getElementById('bomdia').classList.add('hidden');
        document.getElementById('boanoite').classList.remove('hidden');
    });

    // Alternar para "Bom dia" quando clicar em "Boa noite"
    document.getElementById('boanoite').addEventListener('click', function() {
        document.body.classList.add('bom-dia-tema');
        document.body.classList.remove('boa-noite-tema');

        // Esconder "Boa noite" e mostrar "Bom dia"
        document.getElementById('boanoite').classList.add('hidden');
        document.getElementById('bomdia').classList.remove('hidden');
    });