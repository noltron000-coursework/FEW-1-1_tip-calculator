const tip_button = document.getElementById('calculate');

let get_subtotal = document.getElementById('in_amount');
let get_tip_rate = document.getElementById('in_percent');
let get_tip_value = document.getElementById('out_tip');
let get_total = document.getElementById('out_total');


tip_button.onclick = function() {
	const subtotal = Number(get_subtotal.value)
	const tip_value =  Number(subtotal * get_tip_rate.value / 100)
	const total = Number(subtotal + tip_value)
	alert(total)
	get_tip_value.innerHTML = "$" + tip_value.toFixed(2)
	get_total.innerHTML = "$" + total.toFixed(2)
}