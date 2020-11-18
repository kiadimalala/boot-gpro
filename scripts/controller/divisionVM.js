import {DRT,SDV} from '../controller/directionVM.js'

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
        { id: 5, title: "Task #05" },
      ],
    },
  ];

export const divisionVM = function (route, param) {
  
    $(".divisionName").text(
      `DIVISION ${
        SDV[param.directionId][param.directionId].titles[param.divisionId]
      }`
    );



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