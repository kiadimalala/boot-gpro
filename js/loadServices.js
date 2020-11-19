import { DPT } from "./loadDirection.js";
export let SRC = [
  ["SSB", "SFR", "SSSA", "SSPI", "SRB"],
  ["DG1", "DG2"],
];

let SUBS = [
  [
    ["SCME", "SREX"],
    ["SC", "SEX"],
    ["SE", "SR"],
    ["SCE", "SRE"],
    ["CE", "RE"],
  ],
];

$(document).ready(function () {
  $(".navigation").load("dashboard.html .nav");
  let baseUrl = window.location.href;
  let drId = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);
  $(".display-3").text(DPT[drId]);
  SRC[drId].forEach((item, index) => {
    let subId = index;
    let template = `<div id='${subId}' class="direction col mb-4"><span class="w-100 h-100 rounded-lg d-flex align-items-center justify-content-center">${item}</span></div>`;
    let sub_template = ` <div id=${subId} class="sub__service-${subId} mb-4 w-100 "></div>`;
    $(".services").append(template);
    $(".sub__services-container").append(sub_template);
    SUBS[drId][subId].forEach((item, index) => {
      $(`.sub__service-${subId}`).append(
        `<span class = "w-100 h-100 rounded-lg d-flex align-items-center justify-content-center">${item}</span>`
      );
    });
  });
});
