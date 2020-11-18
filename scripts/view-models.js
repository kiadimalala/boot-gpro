import { dashboardVM } from './controller/dashboardVM.js';
import { directionVM } from './controller/directionVM.js';
import { divisionVM } from './controller/divisionVM.js';
import {loginVM} from './controller/loginVM.js'
export let vm = {};
(function ($) {
  
 

  vm.loginVM = loginVM

  vm.dashboardVM = dashboardVM

  vm.directionVM = directionVM

  vm.divisionVM = divisionVM
})(jQuery);
