var ListeGpuVue = (function () {
    pageListeGpu = document.getElementById("page-liste-gpu").innerHTML;

    return function (listeGpuDonnee)
    {
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageListeGpu;
            var listeGpu = document.getElementById("liste-gpu");

            var texteLi ="";
            for (var numeroGpu in listeGpuDonnee){
                texteLi += '<li><a href="#gpu/'+listeGpuDonnee[numeroGpu].id+'">'
                    +listeGpuDonnee[numeroGpu].nom +'</a>' +
                    '<a href="#modifier-gpu/'+listeGpuDonnee[numeroGpu].id+'">'
                    +'<button> Modifier </button></a></li>';
            }
            listeGpu.innerHTML = texteLi;
        }
    }

})();