window.document.addEventListener('load', recalculate_width);
window.addEventListener('load', recalculate_width);
window.addEventListener('resize', recalculate_width);

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

function recalculate_width() {

  var site_title = document.getElementById("site_title");

  text = site_title.innerHTML;
  font = css(site_title, 'font');

  text = text.split(" ");

  first_item = text.shift()

  calculated_width = Math.max(calculate_width(first_item, font), calculate_width(text.join(" "), font));

  site_title.style.maxWidth = calculated_width;

}
