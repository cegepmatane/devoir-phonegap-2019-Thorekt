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
                var gpu = new Gpu (
                    listeGpu[position].nom,
                    listeGpu[position].marque,
                    listeGpu[position].frequence,
                    listeGpu[position].nombreCoeur,
                    listeGpu[position].id
                );
                listeGpu[position] = gpu;
            }
            return listeGpu;
        }
    }
    
    this.ajouter = function(gpu){
        if (listeGpu.length > 0){
            gpu.id = listeGpu[listeGpu.length-1].id + 1;
        }else {
            gpu.id = 0;
        }
        
        listeGpu[gpu.id] = gpu;
        localStorage['gpu'] = JSON.stringify(listeGpu);
        console.log("JSON.stringify(listeGpu) : "+ localStorage['gpu']);
    }

    initialiser();
}