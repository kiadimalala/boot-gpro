export let DPT = [
    "DB",
    "DGEAE",
    "DSP",
    "DPE",
    "SAF",
    "SPERS",
    "SCI",
    "SAI",
    "SCGA",
    "SSEB",
    "SPE",
    "SCOM",
    "PRMP",
    "CIFAG",
    "CA",
  ];

export const dashboardVM = function (route, param) {
    $(".dashboard__content").empty();
    DPT.forEach(function (item, index) {
      let href = $.router.href("direction", { directionId: index });
      let template = `<a href= "${href}"> <button class="dashboard__item hover:bg-blue-500 hover:text-gray-100 focus:outline-none" >
    <h1 class=" w-full text-center text-3xl md:text-3xl sm:text-xl"> ${item} </h1>
    </button> </a>`;
      $(".dashboard__content").append(template);
     
    });
    $(".dashboard__content")
      .append(`<div class="dashboard__add   focus:outline-none  ">
        <span class="item_logo   lg:h-16 lg:w-16  md:h-10 md:w-10 sm:h-6 sm:w-6  lg:text-3xl sm:text-xl   "><i class="fas fa-plus    "></i></span>
        <input id="add__input" class="add__input   md:pl-12 sm:pl-8 lg:pl-16  focus:outline-none focus:opacity-100 focus:bg-gray-100  focus:opacity-100 md:text-xl sm:text-xl lg:text-3xl " placeholder="Ajouter" type="text">
      </div> `);

    //Ajouter la valeur saisi quand on appuie sur "ENTREE"
    $(document).on("keypress", "#add__input", function (e) {
      let dpt = $("#add__input").val();
      let item_template = `<a href="#/dashboard/direction/${DPT.length}"><button class="dashboard__item  " >
      <h1 class ="text-center w-full md:text-3xl sm:text-xl"> ${dpt} </h1>
      </button></a>`;
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

  