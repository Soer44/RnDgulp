import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper'; // подключение слайдера свайпер

const swiper = new Swiper();

document.querySelector(".check").addEventListener("change", function() {
	document.querySelector(".btn").disabled = !document.querySelector(".check").checked;
  });