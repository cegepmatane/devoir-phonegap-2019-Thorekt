var GpuVue = (function () {
    pageGpu = document.getElementById("page-gpu").innerHTML;

    return function (gpu)
    {
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageGpu;
            document.getElementById("gpu-nom").innerHTML = gpu.nom;
            document.getElementById("gpu-marque").innerHTML = gpu.marque;
            document.getElementById("gpu-frequence").innerHTML = gpu.frequence;
            document.getElementById("gpu-nombreCoeur").innerHTML = gpu.nombreCoeur;
        }
    }

})();