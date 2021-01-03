// Capitalize words "foo = Foo"
export const capitalize = (String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
});

export function hideSpinner() {
  // document.getElementById("spinner").style.display = "none";
  document.getElementById("spinner").style.visibility = "hidden";
}

export function showSpinner() {
  document.getElementById("spinner").style.visibility = "visible";
}
