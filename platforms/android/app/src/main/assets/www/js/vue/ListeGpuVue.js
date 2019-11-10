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
                texteLi += '<tr>' +
                    '<td><a href="#gpu/'+listeGpuDonnee[numeroGpu].id+'">'
                    +listeGpuDonnee[numeroGpu].nom +'</a> </td>' +
                    '<td>'
                    +listeGpuDonnee[numeroGpu].marque +' </td>' +
                    '<td><a  class="waves-effect waves-light btn" href="#modifier-gpu/'+listeGpuDonnee[numeroGpu].id+'">'
                    +'Modifier</a> </td>' +
                    '<tr>';
            }
            listeGpu.innerHTML = texteLi;
        }
    }

})();