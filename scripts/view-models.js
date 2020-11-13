var vm = {};
(function () {
  let DPT = [
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
  let DRT = [
    [
      { name: "SSB", subs: ["SCME", "SREX", "SAEPB", "SLF", "SLR"] },
      { name: "SFR", subs: [] },
      { name: "SSSA", subs: [] },
      { name: "SSPI", subs: [] },
      { name: "SRB", subs: [] },
    ],

    [{ id: 1, name: "DG1" }],
  ];

  vm.loginVM = function (route, param) {};

  vm.dashboardVM = function (route, param) {
    $(".dashboard__content").empty();
    DPT.forEach(function (item, index) {
      let href = $.router.href("direction", { directionId: index });
      let template = `<a href= "${href}"> <button class="dashboard__item bg-gray-200 hover:bg-blue-500 hover:text-gray-100 bg-opacity-50 grid-rows-3 w-full h-16 rounded-lg text-xl text-opacity-25 focus:outline-none flex items-center cursor-pointer m-1 " >
    <h1 class=" w-full text-center text-3xl"> ${item} </h1>
    </button> </a>`;
      $(".dashboard__content").append(template);
      console.log(href);
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

  vm.directionVM = function (route, param) {
    $(".title").text(DPT[param.directionId]);
    $("#direction__content").empty();
    DRT[param.directionId].forEach(function (item, index) {
      console.log(item);
      let template = `
        <div
        class="dpt__item-${index} mb-6 bg-gray-200 bg-opacity-50 grid-rows-3 w-64 h-16 rounded-lg hover:bg-blue-500 hover:text-gray-100 text-xl text-opacity-25 focus:outline-none flex justify-center items-center cursor-pointer ">
        <h1 class=" text-3xl"> ${item.name} </h1>
    </div>`;

      $(".dpt__services").append(template);
      console.log(item.subs);
      item.subs.forEach(function (item, index) {
        console.log(item);
        let href = $.router.href("division", {
          directionId: param.directionId,
          divisionId: index,
        });
        let template = `
          <a href="${href}"<div
          class="dpt__item mb-6 bg-gray-200 bg-opacity-50 grid-rows-3 w-32 mr-6 h-16 rounded-lg hover:bg-blue-500 hover:text-gray-100 text-xl text-opacity-25 focus:outline-none flex justify-center items-center cursor-pointer ">
          <h1 class=" text-3xl"> ${item} </h1>
      </div></a>`;
        $(".dpt__divisions").append(template);
      });
      $(".dpt__divisions").hide();
      $(`.dpt__item-${index}`).click(function () {
        $(".dpt__divisions").toggle("magictime slideRight");
      });
    });
    // DRT[param.directionId].forEach(function (item,index) {
    //   let href = $.router.href("division", {
    //     directionId: param.directionId,
    //     divisionId: index,
    //   });

    //   let template = `<ul>
    // <li><a href="${href}"> ${item} </a></li>
    // </ul>`;
    //   $(`.division__item-${item.id}`).append(template);
    // });
  };

  vm.divisionVM = function (route, param) {
    $(".divisionName").text(
      `DIVISION ${
        DRT[param.directionId][param.divisionId].subs[param.divisionId]
      }`
    );

    let volets = [
      {
        id: 1,
        name: "Volet #01",
        tasks: [
          { id: 1, title: "Task #01" },
          { id: 2, title: "Task #02" },
        ],
      },
      {
        id: 2,
        name: "Volet #02",
        tasks: [
          { id: 1, title: "Task #01" },
          { id: 2, title: "Task #02" },
          { id: 3, title: "Task #03" },
          { id: 4, title: "Task #04" },
          { id: 5, title: "Task #04" },
        ],
      },
    ];

    volets.forEach(function (volet, index) {
      const voletElement = `<div class="volet__container volet-${volet.id} bg-gray-300 bg-opacity-50   w-56 rounded-lg mx-8  ">
          <div class=" volet__name bg-green-400 h-10 rounded-lg flex items-center  ">
              <h1 class="ml-4 w-56 text-lg">${volet.name}</h1>
              <span class="volet__icon w-12  flex items-center text-2xl opacity-50">
                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
          </div>
          <div class="volet__content-${volet.id}  w-full px-2  mb-2 flex flex-col overflow-hidden">
              <div class=" task__container-${volet.id} w-full overflow-y-auto pr-2 pt-4">
                  <span class="volet__action-${volet.id}  w-full h-10 my-2 rounded-lg flex items-center ">
                      <div
                          class="w-full relative h-full h-10 bg-opacity-50 rounded-lg flex items-center  focus:outline-none hover:text-gray-100 ">
                          <span class=" absolute  h-full w-10 flex items-center justify-center text-lg opacity-50"><i
                                  class="fa fa-plus" aria-hidden="true"></i></span>
                          <input class=" task__add-${volet.id} w-full h-full pl-10 opacity-50 text-sm rounded-lg opacity-50 focus:outline-none focus:opacity-100 focus:bg-gray-200 " placeholder="Ajouter une carte"/>
                      </div>
                  </span>
              </div>
          </div>
          </div>
        `;

      $(".division__container").append(voletElement);

      $(".modal").hide();
      volet.tasks.forEach(function (task, index) {
        const spanElement = `<span 
          class=" task-${task.id} w-full h-10 bg-gray-300 bg-opacity-50 rounded-lg flex items-center px-2 focus:outline-none hover:bg-blue-500 hover:text-gray-100 mb-2">
          <h1 class="w-3/4">${task.title}</h1>
          <span class="h-full w-1/4 flex items-center justify-center text-lg opacity-50"><i
                  class="fa fa-bars" aria-hidden="true"></i></span>
      </span>`;
        $(`.volet__action-${volet.id}`).before(spanElement);

        $(`.task-${task.id}`).click(function (id) {
          $(".modal").modal({
            fadeDuration: 300,
            showClose: false,
          });

          $(".task__title").text(task.title);
          $(".volet__title").text(`Dans ${volet.name}`);
        });
      });
      $(document).on("keypress", `.task__add-${volet.id}`, function (e) {
        let _task = $(`.task__add-${volet.id}`).val();

        let template = `<span 
        class=" task-${volet.tasks.length+1} w-full h-10 bg-gray-300 bg-opacity-50 rounded-lg flex items-center px-2 focus:outline-none hover:bg-blue-500 hover:text-gray-100 mb-2">
        <h1 class="w-3/4">${_task}</h1>
        <span class="h-full w-1/4 flex items-center justify-center text-lg opacity-50"><i
                class="fa fa-bars" aria-hidden="true"></i></span>
      </span>`;
        if (_task === "") {
          console.log("saisir");
        } else {
          if (e.which === 13) {
            $(`.volet__action-${volet.id}`).before(template);
          }
        }
      });

      const taskContainer = $(`.task__container-${volet.id}`).children().length;

      if (taskContainer <= 2) {
        $(`.volet__content-${volet.id}`).removeClass("h-56");
        $(`.volet-${volet.id}`).addClass("h-40");
        $(`.task__container-${volet.id}`).removeClass("pr-2");
      } else if (taskContainer >= 2) {
        $(`.volet__content-${volet.id}`).addClass("h-56");
        $(`.task__container-${volet.id}`).addClass("pr-2");
      }
    });
  };
})();
