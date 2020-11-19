import { dashboardElement } from "./js/loadDirection.js";

$(document).ready(function () {
  $(".dashboard__content").load("direction.html ", dashboardElement);
});

