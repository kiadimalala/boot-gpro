let vm = {};
(function () {
  //Gestion page login
  vm.loginVM = function () {
    sessionStorage.setItem("authenticate", false);

    //  Login
    $("#soumettre").click(function () {
      if (
        $("#matricule").val() === "0001" &&
        $("#password").val() === "password"
      ) {
        sessionStorage.setItem("authenticate", true);
        $.router.go("admin.dashboard");
      }
    });
  };

  //Gestion page département
  vm.dashboardVM = function () {
    let DPT = [];
    //Récupérer les départements du localStorage
    $(document).ready(function () {
      let local_DPT = JSON.parse(localStorage["DPT"]);
      local_DPT.forEach((dpt) => {
        let template = `<div class="dashboard__item bg-gray-200 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer " >
        <h1 class=" w-full text-center text-3xl"> ${dpt} </h1>
        </div>`;
        $(".dashboard__add").before(template);
        //Redirection vers page département sur click
        $(".dashboard__item").click(function () {
          $.router.go("admin.departement");
        });
      });
    });

    //Ajouter la valeur saisi quand on appuie sur "ENTREE"
    $(document).on("keypress", "#add__input", function (e) {
      let dpt = $("#add__input").val();
      let item_template = `<div class="dashboard__item bg-gray-200 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer " >
      <h1 class ="text-center w-full text-3xl"> ${dpt} </h1>
      </div>`;
      if (dpt === "") {
        console.log("saisir");
      } else {
        if (e.which === 13) {
          //Push des valeurs saisie dans l'array DPT
          DPT.push(dpt);
          // Stocké l'array DPT dans le local Storage
          let DPT__JSON = JSON.stringify(DPT);
          localStorage.setItem("DPT", DPT__JSON);
          e.preventDefault();
          //réinisialisé  l'input
          $("#add__input").val(null);
          //ajout au DOM de la valeur saisie
          $(".dashboard__add").before(item_template);
        }
      }
    });
  };

  //Gestion page Département
  vm.dptVM = function () {
    let services = ["SSB", "SRF", "SSSA", "SSPI", "SRB"];
    $(document).ready(function () {
      console.log($.router.getCurrentRoute());
      services.forEach((service) => {
        let template = `<div
      class="dpt__item mb-6 bg-gray-200 bg-opacity-50 grid-rows-3 w-64 h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer ">
      <h1 class=" w-full text-center text-3xl"> ${service} </h1>
  </div>`;
        $(".dpt__services").append(template);
      });
    });
  };
})();
