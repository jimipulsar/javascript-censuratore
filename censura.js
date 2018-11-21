
function testo_latino() {
  var testo_iniziale = "Lorem ipsum dolor sit amet, minim omnium et nam, homero soluta accumsan eu ius. Pri homero oporteat explicari ei, an velit maluisset est. Integre aliquam quaestio eum no, ea dicunt mollis nec. Vix ut wisi intellegat voluptaria, homero primis civibus at vel. Velit iriure argumentum his no. Eu nec tota iisque. Cum aliquid officiis ne, mei ut ridens invidunt consetetur. Debet option equidem eum in. Et quo enim quas delicatissimi, nec assum perpetua ut. Aeque tempor ex vim, quis quando audiam pro cu. Per te inani theophrastus, vero solum eam ei. Ut reque inermis sententiae mei. Mel eu volumus reprehendunt, et usu quodsi euismod molestie, eos simul tempor liberavisse an. Mei tale mucius eligendi eu, id invidunt definitiones vel, repudiare consectetuer mei ad. Ex tantas philosophia quo, porro reprimique persequeris ei eam. Id vel inimicus definitiones, propriae expetendis sit eu ipsum audire electram pro, sed vidit impedit assentior ea. Consulatu definiebas scribent ";
  document.writeln('<h2>Il testo da censurare è:<br></h2>' + testo_iniziale + "<br>");
  return testo_iniziale;
}

var parole_censurate = ["ipsum", "repudiare", "enim", "tempor", "cogito", "ergo", "sum"];

var i = 0;
var contatore = 0;
var sostituzione = "<strong>" + "xxx" +"</strong>";

var censura = testo_latino();

// controllo se sono presenti le parole censurate nel testo
while (i < parole_censurate.length){
  console.log(parole_censurate[i]);
  //se la parola è presente
  if(censura.toLocaleLowerCase().indexOf(parole_censurate[i]) != -1){
  // la sostituisco con i simboli xxx
    censura = censura.replace(parole_censurate[i], sostituzione);
    contatore++;
  }
  i++;
}

// Stampo il nuovo testo con le parole censurate sostituite da  xxx
var re = /produciTestoIniziale()/g;
var sostituzione = censura.replace(re, + "xxx");
document.writeln("<h2>Il testo con la censura applicata diventa:<br></h2>")
document.write(sostituzione);


//Stampo il risultato con il relativo punteggio
document.writeln("<h2>Sono state inserite " + contatore + " parole censurate su " + parole_censurate.length + " parole totali.</h2>");
