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
        }
    }

    initialiser();
})();