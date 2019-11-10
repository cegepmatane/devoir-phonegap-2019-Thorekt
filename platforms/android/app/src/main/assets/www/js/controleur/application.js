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

        }else if (hash.match(/^#modifier-gpu\/([0-9]+)/)) {

            var navigation = hash.match(/^#modifier-gpu\/([0-9]+)/);
            var idGpu = navigation[1];
            var modiferGpuVue = new ModifierGpuVue(actionModifierGpu, gpuDAO.chercherGpuParId(idGpu));
            modiferGpuVue.afficher();

        }else {

             var navigation = hash.match(/^#gpu\/([0-9]+)/);
             var idGpu = navigation[1];
             var listeGpuDonnee = gpuDAO.lister();
             var gpuVue = new GpuVue(listeGpuDonnee[idGpu]);
             gpuVue.afficher();

         }
    }

    var actionAjouterGpu = function (gpu) {
        gpuDAO.ajouter(gpu);
        window.location.hash = "#";
    }

    var actionModifierGpu = function (gpu) {
        gpuDAO.modifier(gpu);
        window.location.hash = "#";
    }

    initialiser();
})();