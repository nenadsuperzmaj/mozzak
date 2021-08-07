document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
	var x = document.getElementsByClassName("leagueheader");
	//console.log(x);
	
	// for (i = 0; i < x.length; i++) {
	// 	x[i].style.borderLeft = "25px solid green";
	// };

	document.addEventListener('click', function (event) {

	var nazivTakmicenja = "";
	var tekst = "";
	var obradjeniTekst = "";

	if (event.target.className == "leagueheader") {
		nazivTakmicenja=event.target.innerText;
		console.log(nazivTakmicenja);
		var brojParova = event.target.parentElement.children.length;
		var utakmice = [];
		iscepkaniTekst = [];

		for (i=1;i<brojParova;i++) {
			utakmice.push(event.target.parentElement.children[i].children[0]);

			console.log(utakmice);
		}
		
		for (i=0;i<brojParova-1;i++) {
			//console.log(utakmice);
			var trenutnaUtakmica = utakmice.shift();
			//console.log(utakmice);
			console.log(trenutnaUtakmica.innerText);

			tekst=trenutnaUtakmica.innerText;

			iscepkaniTekst = tekst.split(/\r?\n/);

			if (!(iscepkaniTekst[4].includes("+"))) {
				// obradjeniTekst+=iscepkaniTekst[0]+": ("+iscepkaniTekst[4]+") "+iscepkaniTekst[2]+" ("+iscepkaniTekst[5]+") "+iscepkaniTekst[3]+" ("+iscepkaniTekst[6]+")\n";
				obradjeniTekst+=iscepkaniTekst[0]+": ("+iscepkaniTekst[7]+") "+iscepkaniTekst[5]+" ("+iscepkaniTekst[8]+") "+iscepkaniTekst[6]+" ("+iscepkaniTekst[9]+")\n";
			}



			
			}
		
	copyStringToClipboard(obradjeniTekst);
	alert("Kvote za "+nazivTakmicenja+" su iskopirane.");
		
	function copyStringToClipboard (str) {
		// Create new element
		var el = document.createElement('textarea');
		// Set value (string to be copied)
		el.value = str;
		// Set non-editable to avoid focus and move outside of view
		el.setAttribute('readonly', '');
		el.style = {position: 'absolute', left: '-9999px'};
		document.body.appendChild(el);
		// Select text inside element
		el.select();
		// Copy text to clipboard
		document.execCommand('copy');
		// Remove temporary element
		document.body.removeChild(el);
	}

	}




}, false);




  };
  
};