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

export function dashboardElement() {
  DPT.forEach((item, index) => {
    
    let template = `<div id='${index}' class="direction col"><span class="w-100 h-100 rounded-lg d-flex align-items-center justify-content-center">${item}</span></div>`;
    $(".direction__add").before(template);
    $(".direction").addClass(
      "d-flex justify-content-center align-items-center px-4 my-3"
    );
    $(`#${index}`).click(function(){
        window.location.href = `/service.html?id=${index}`
    })
  });

//Ajout d'element 
  $(document).on("keypress", ".direction__add > input", function (e) {
    let dr = $(".direction__add > input").val();
    let dr_template = `<div id='' class="direction col"><span class="w-100 h-100 rounded-lg d-flex align-items-center justify-content-center">${dr}</span></div>`;
    if (dr === "") {
    } else {
      if (e.which === 13) {
        $(".direction__add").before(dr_template);
        $(".direction").addClass(
          "d-flex justify-content-center align-items-center px-4 my-3"
        );
      }
    }
  });
}
