function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(function() {
    alert('Texto copiado com sucesso!');
  }, function(err) {
    console.error('Erro ao copiar texto: ', err);
    alert('Erro ao copiar texto. Verifique o console.');
  });
}
