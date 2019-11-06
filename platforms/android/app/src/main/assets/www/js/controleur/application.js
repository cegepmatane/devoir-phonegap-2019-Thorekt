(function () {

    var gpuDAO = null;

    function initialiser() {
        window.addEventListener("hashchange", naviguer);
        gpuDAO = new GpuDAO();
        naviguer();
    }

    var naviguer = function () {
    var hash = window.location.hash;

        if (!hash) {
            var listeGpuDonnee = gpuDAO.lister();
            var listeGpuVue = new ListeGpuVue(listeGpuDonnee);
            listeGpuVue.afficher();
        }else if (hash.match(/^#ajouter-gpu/)) {
            var ajouterGpuVue = new AjouterGpuVue(actionAjouterGpu);
            ajouterGpuVue.afficher();
        }
    }

    var actionAjouterGpu = function (gpu) {
        gpuDAO.ajouter(gpu);
        window.location.hash = "#";
    }

    initialiser();
})();