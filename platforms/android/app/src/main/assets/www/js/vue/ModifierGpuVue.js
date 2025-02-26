var ModifierGpuVue = (function () {
    pageModifierGpu = document.getElementById("page-modifier-gpu").innerHTML;


    return function (actionModifierGpu, gpu) {
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageModifierGpu;

            document.getElementById("gpu-nom").value = gpu.nom;
            document.getElementById("gpu-marque").value = gpu.marque;
            document.getElementById("gpu-frequence").value = gpu.frequence;
            document.getElementById("gpu-nombreCoeur").value = gpu.nombreCoeur;
            console.log(gpu.frequence);

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", enregistrer)
        }

        var enregistrer = function(evenement)
        {
            evenement.preventDefault();

            gpu.nom = document.getElementById("gpu-nom").value;
            gpu.marque = document.getElementById("gpu-marque").value;
            gpu.frequence = document.getElementById("gpu-frequence").value;
            gpu.nombreCoeur = document.getElementById("gpu-nombreCoeur").value;

            actionModifierGpu(gpu);

        }
    }
})();