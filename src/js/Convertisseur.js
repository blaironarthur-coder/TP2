document.addEventListener("DOMContentLoaded", function () {
	const tauxUSD = 1.01;
	const tauxAUD = 1.47;

document.getElementById("convertir1").addEventListener("click", function () {
	const euros = parseFloat(document.getElementById("euro1").value);

    if (isNaN(euros) || euros <= 0) {
		alert("Veuillez entrer un montant valide en euros !");
		return;
    }

	const usd = (euros * tauxUSD).toFixed(2);
	const aud = (euros * tauxAUD).toFixed(2);

    document.getElementById("usd1").value = usd + " $ US";
    document.getElementById("aud1").value = aud + " $ AU";
	});


document.getElementById("euro2").addEventListener("input", function () {
    const euros = parseFloat(this.value);

    if (isNaN(euros) || euros <= 0) {
		document.getElementById("usd2").value = "";
		document.getElementById("aud2").value = "";
		return;
    }

    const usd = (euros * tauxUSD).toFixed(2);
    const aud = (euros * tauxAUD).toFixed(2);

    document.getElementById("usd2").value = usd + " $ US";
    document.getElementById("aud2").value = aud + " $ AU";
  });
});
