function calculate_width(text, font) {

  var width_obj = document.getElementById("width_calculator");

  width_obj.style.font = font;
  width_obj.innerHTML = text;

  var width = (width_obj.clientWidth + 1) + "px";

  return width;

}
