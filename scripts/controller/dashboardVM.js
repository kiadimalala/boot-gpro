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
      let template = `<a href= "${href}"> <button class="dashboard__item bg-gray-200 hover:bg-blue-500 hover:text-gray-100 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer m-1 " >
    <h1 class=" w-full text-center text-3xl"> ${item} </h1>
    </button> </a>`;
      $(".dashboard__content").append(template);
     
    });
    $(".dashboard__content")
      .append(`<div class="dashboard__add m-1 bg-gray-200 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer ">
        <span class="absolute item_logo m h-16 w-16 flex justify-center items-center text-3xl text-gray-200"><i class="fas fa-plus    "></i></span>
        <input id="add__input" class="h-16 w-full pl-16 rounded-lg opacity-25 focus:outline-none focus:opacity-100 focus:bg-gray-100 text-gray-500 focus:opacity-100  " placeholder="Ajouter" type="text">
      </div> `);

    //Ajouter la valeur saisi quand on appuie sur "ENTREE"
    $(document).on("keypress", "#add__input", function (e) {
      let dpt = $("#add__input").val();
      let item_template = `<a href="#/dashboard/direction/${DPT.length}"><button class="dashboard__item bg-gray-200 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer " >
      <h1 class ="text-center w-full text-3xl"> ${dpt} </h1>
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

  