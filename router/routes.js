import { vm } from "../scripts/view-models.js";

(function ($) {
  var routes = {},
    defaultRoute = "login";

  routes["login"] = {
    url: "#/",
    templateUrl: "/layouts/login.html",
    viewModel: vm["loginVM"],
  };
  routes["dashboard"] = {
    url: "#/dashboard",
    templateUrl: "/layouts/dashboard.html",
    viewModel: vm["dashboardVM"],
  };

  routes["direction"] = {
    url: "#/dashboard/direction/:directionId",
    templateUrl: "/layouts/direction.html",
    viewModel: vm["directionVM"],
  };

  routes["division"] = {
    url: "#/dashboard/direction/:directionId/division/:divisionId",
    templateUrl: "/layouts/division.html",
    viewModel: vm["divisionVM"],
  };
  $.router
    .setData(routes)
    .setDefault(defaultRoute)
    .onRouteChanged(function (e, route, param) {
      route.viewModel(route, param);
    });

  $.when($.ready).then(function () {
    $.router.run(".my-view", "login");
  });
})(jQuery);
