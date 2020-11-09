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
    templateUrl: "layouts/login.html",
    viewModel: vm.loginVM,
  };

  routes["admin"] = {
    url: "#/admin",
    abstract: true,
    resolve: [isUserAuthenticated],
    templateUrl: "layouts/admin.html",
  };

  routes["admin.dashboard"] = {
    url: "",
    templateUrl: "layouts/dashboard.html",
    viewModel: vm.dashboardVM,
  };
  routes["admin.departement"] = {
    url: "/departement",
    templateUrl: "layouts/departement.html",
    viewModel:vm.dptVM,
  };

  routes["unauthorized"] = {
    url: "#/unauthorized",
    templateUrl: "layouts/unauthorized.html",
  };

  routes["admin.divisions"] = {
    url: "/divisions",
    templateUrl: "layouts/divisions.html",
    //viewModel:vm.dptVM,
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
