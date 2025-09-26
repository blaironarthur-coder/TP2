window.onload = function () {
    let sections = document.querySelectorAll("#lienImages, #elements, #progressions");
    let checkboxes = document.querySelectorAll("#menu input[type='checkbox']");
    sections.forEach(section => section.style.display = "none");
    checkboxes.forEach(cb => cb.checked = false);

    checkboxes.forEach(cb => {
        cb.addEventListener("change", function () {
            let id = this.value;
            let section = document.getElementById(id);

            if (this.checked) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
	
    let lienWiki = document.querySelector("a[href='https://www.wikipedia.org']");
    if (lienWiki) {
        lienWiki.href = "https://fr.wikipedia.org";
    }

    let bouton = document.querySelector("button");
    let inputTexte = document.getElementById("texte");

    bouton.addEventListener("click", function () {
        let valeur = inputTexte.value.trim();
        if (valeur !== "Oui" && valeur !== "Non") {
            inputTexte.value = "Il faut mettre Oui ou Non";
        }
    });

    document.getElementById("label1").textContent = "HP";
    document.getElementById("label2").textContent = "Casque";
    document.getElementById("label3").textContent = "Bluetooth";
    let radios = document.querySelectorAll("input[name='choix']");
    let typeVolume = document.getElementById("typeVolume");

    function majTypeVolume() {
        let choix = document.querySelector("input[name='choix']:checked").value;
        if (choix === "1") typeVolume.textContent = "HP";
        if (choix === "2") typeVolume.textContent = "Casque";
        if (choix === "3") typeVolume.textContent = "Bluetooth";
    }

    majTypeVolume();
    radios.forEach(radio => radio.addEventListener("change", majTypeVolume));
    let volume = document.getElementById("volume");
    let valeurVolume = document.getElementById("valeurVolume");
    volume.max = 100;
    console.log("Valeur max du volume :", volume.max);

    function majValeurVolume() {
        valeurVolume.textContent = "Valeur actuelle : " + this.value;
    }

    majValeurVolume.call(volume);
    volume.addEventListener("input", majValeurVolume);
	let checkboxMute = document.getElementById("ouinon");
    let labelMute = document.querySelector("label[for='ouinon']");
    
	if (labelMute) {
		labelMute.textContent = "Mute";
	}

    checkboxMute.addEventListener("change", function () {
        if (this.checked) {
			volume.disabled = true;
		} 
		else {
			volume.disabled = false;
        }
    });
	
	let divLienImages = document.getElementById("lienImages");

	if (divLienImages) {
		let img = document.createElement("img");
		img.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
		img.width = 200;
		img.alt = "Logo UPHF";

		divLienImages.appendChild(img);
	}
    let dateInput = document.getElementById("date");
    dateInput.addEventListener("change", function () {
        if (this.value) {
            let annee = new Date(this.value).getFullYear();
            console.log("Année choisie :", annee);
        }
    });

    let progress1 = document.getElementById("progress1");
    let progress2 = document.getElementById("progress2");
    progress1.value = 0;
    progress2.value = 0;
	
    let interval = setInterval(function () {
        if (progress1.value < 100) progress1.value += 5;
        if (progress2.value < 100) progress2.value += 5;

        if (progress1.value >= 100 && progress2.value >= 100) {
            clearInterval(interval);
        }
    }, 1000);
};
