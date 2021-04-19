$(".frase");
var frase = $(".frase").text();
var frase = $(".frase").text();
frase.split(" ");
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;


var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {

});

var conteudo = campo.val();
var qtdPalavras = conteudo.split(/\S+/).length - 1;
$("#contador-palavras").text(qtdPalavras);

var qtdCaracteres = conteudo.length;
$("#contador-caracteres").text(qtdCaracteres);

var conteudo = campo.val();

//Retira os espaço da String 
var conteudoSemEspaco = conteudo.replace(/\s+/g,'');

var qtdCaracteres = conteudoSemEspaco.length;
$('#contador-caracteres').text(qtdCaracteres);