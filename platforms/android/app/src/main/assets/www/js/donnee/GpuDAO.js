var GpuDAO = function () {

    var listeGpu = null;
    var initialiser = function(){
        if(!listeGpu){
            listeGpu = [];
        }
    }

    this.lister = function(){
        if (localStorage['gpu']){
            listeGpu = JSON.parse(localStorage['gpu']);

            for (position in listeGpu){
                var cadeau = new Cadeau (
                    listeGpu[position].nom,
                    listeGpu[position].marque,
                    listeGpu[position].frequence,
                    listeGpu[position].nombreCoeur,
                    listeGpu[position].id
                );
                listeGpu[position] = cadeau;
            }
            return listeGpu;
        }
    }

    initialiser();
}