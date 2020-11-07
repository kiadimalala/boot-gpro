export const vm = {};
(function () {
  vm.loginVM = function () {
    sessionStorage.setItem("authenticate", false);
    $("#soumettre").click(function () {
      if (
        $("#matricule").val() === "0001" &&
        $("#password").val() === "password"
      ) {
        sessionStorage.setItem("authenticate", true);
        $.router.go("admin.dashboard");
      }
    });
  };
})();
