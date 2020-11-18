import {DPT} from './dashboardVM.js'
export let DRT = [
    [
      { name: "SSB", subs: ["SCME", "SREX", "SAEPB", "SLF", "SLR"] },
      { name: "SFR", subs: [] },
      { name: "SSSA", subs: [] },
      { name: "SSPI", subs: [] },
      { name: "SRB", subs: [] },
    ],

    [{ id: 1, name: "DG1" }],
  ];

export const directionVM = function (route, param) {
    $(".title").text(DPT[param.directionId]);
    $("#direction__content").empty();
    DRT[param.directionId].forEach(function (item, index) {
      let template = `
        <div
        class="dpt__item-${index} mb-6 bg-gray-200 bg-opacity-50 grid-rows-3 w-64 h-16 rounded-lg hover:bg-blue-500 hover:text-gray-100 text-xl text-opacity-25 focus:outline-none flex justify-center items-center cursor-pointer ">
        <h1 class=" text-3xl"> ${item.name} </h1>
    </div>`;

      $(".dpt__services").append(template);
 
      item.subs.forEach(function (item, index) {
       
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
  };