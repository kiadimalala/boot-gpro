import {vm} from '../js/viewModel.js'

(function ($) {
  var routes = {},
    defaultRoute = "login";

  function isUserAuthenticated() {
    var defer = $.Deferred();

    var isAuthenticated = sessionStorage.getItem("authenticate");
    if (isAuthenticated == "true") {
      defer.resolve();
    } else {
      defer.reject();
      $.router.go("unauthorized");
    }
    return defer;
  }

  routes["login"] = {
    url: "#/",
    templateUrl: "../layouts/login.html",
    viewModel: vm.loginVm,
  };

  $.router
    .setData(routes)
    .setDefault(defaultRoute)
    .onRouteChanged(function (e, route, param) {
      if (route.viewModel) {
        route.viewModel(route, param);
      }
    });

  $.when($.ready).then(function () {
    $.router.run(".my-view", "login");
  });
})(jQuery);
