function inserePlacar(){
    var corpoTabela = $(".placar".find("tbody");
    var usuario = "Joanne"
    var numPalavras = $("#contador-palavras").text();
    var linha = "<tr>" +
     "<td>" + usuario + "</td>" +
     "<td>" + numPalavras + "</td>"
    +"</tr>";
    corpoTabela.append(linha);
}
