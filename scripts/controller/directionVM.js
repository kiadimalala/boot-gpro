import { DPT } from "./dashboardVM.js";
export let DRT = [
  [
    { id: 1, name: "SSB" },
    { id: 2, name: "SFR" },
    { id: 3, name: "SSSA" },
    { id: 4, name: "SSPI" },
    { id: 5, name: "SRB" },
  ],

  [{ id: 1, name: "DG1" }],
];

export let SDV = [
  [{ id: 1, titles: ["SCME", "SREX", "SAEPB", "SLF", "SLR"] }],
  [{ id: 2, titles: ["SC", "X"] }],
  [{ id: 3, titles: ["SCM", "SRX"] }],
];

export const directionVM = function (route, param) {
  $(".title").text(DPT[param.directionId]);
  $("#direction__content").empty();
  DRT[param.directionId].forEach(function (item, index) {
    let sub__template = ` <div class="dpt__sub-division-${item.id}  flex justify-evenly  h-16 mb-6 ml-1"></div>`;
    let template = `
        <div
        class="dpt__item-${item.id} mb-6 bg-gray-200 bg-opacity-50  w-64 h-16 rounded-lg hover:bg-blue-500 hover:text-gray-100 text-xl text-opacity-25 focus:outline-none flex justify-center items-center cursor-pointer ">
        <h1 class=" text-3xl"> ${item.name} </h1>
    </div>`;

    $(".dpt__services").append(template);
    $(".dpt__divisions-container").append(sub__template);
    $(`.dpt__sub-division-${item.id}`).hide();
    $(`.dpt__item-${index}`).click(function () {
      $(`.dpt__sub-division-${index}`).toggle("magictime slideRight");
    });
  });
  SDV[param.directionId].forEach(function (sub, index) {
    sub.titles.forEach((title, index) => {
      let href = $.router.href("division", {
        directionId: param.directionId,
        divisionId: index,
      });
      let template = `
        <a href="${href}"<div
        class="dpt__item-${sub.id} mb-6 bg-gray-200 bg-opacity-50  w-24 mr-6 h-16 rounded-lg hover:bg-blue-500 hover:text-gray-100 text-xl text-opacity-25 focus:outline-none flex justify-center items-center cursor-pointer ">
        <h1 class=" text-3xl"> ${title} </h1>
        </div></a>`;
      $(`.dpt__sub-division-${sub.id}`).append(template);
    });
  });
};
