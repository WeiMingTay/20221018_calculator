let result = document.getElementById("resultArea");

function addWert(e) {
	result.innerHTML += e;
}
function berechneResult() {
	let ergebnis = eval(result.innerHTML);
	result.innerHTML = ergebnis;
}
function deleteLast() {
	if (result.innerHTML.endsWith(" ")) {
		result.innerHTML = result.innerHTML.slice(0, -3);
	} else {
		result.innerHTML = result.innerHTML.slice(0, -1);
	}
}
function clearDisplay() {
    result.innerHTML = "";
}
