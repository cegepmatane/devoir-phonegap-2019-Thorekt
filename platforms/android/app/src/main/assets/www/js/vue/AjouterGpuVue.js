var AjouterGpuVue = (function () {
    pageAjouterGpu = document.getElementById("page-ajouter-gpu").innerHTML;

    return function (actionAjouterGpu) {
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageAjouterGpu;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrer)
        }

        var enregistrer = function(evenement)
        {
            evenement.preventDefault();

            var nom = document.getElementById("gpu-nom").value;
            var marque = document.getElementById("gpu-marque").value;
            var description = document.getElementById("gpu-frequence").value;
            var description = document.getElementById("gpu-nombreCoeur").value;

            var gpu = new Gpu(nom, marque, description, null);
            actionAjouterGpu(gpu);

        }
    }

})();