let txtInputName = document.querySelector('#txtInputName');
let txtInputKg = document.querySelector('#txtInputKg');
let txtInputEst = document.querySelector('#txtInputEst');

function calcIMC() {
	let est = Math.pow(txtInputEst.value, 2);
	let result = txtInputKg.value / est;

	if (result < 18.5) {
		swal({
			title: `Peso bajo! IMC ${result.toFixed(2)}`,
			text: `${txtInputName.value} Su IMC es inferior a 18.5!`,
			icon: 'info',
			button: 'Ok!',
		});
	} else if (result >= 18.5 && result <= 24.9) {
		swal({
			title: `Peso saludable! IMC ${result.toFixed(2)}`,
			text: `${txtInputName.value} Su IMC esta entre 18.5 y 24.9!`,
			icon: 'success',
			button: 'Ok!',
		});
	} else if (result >= 25 && result <= 29.9) {
		swal({
			title: `Sobrepeso!! IMC ${result.toFixed(2)}`,
			text: `${txtInputName.value} Su IMC esta entre 25 y 29.9!`,
			icon: 'info',
			button: 'Ok!',
		});
	} else if (result >= 30 && result < 39.9) {
		swal({
			title: `Obesidad!! IMC ${result.toFixed(2)}`,
			text: `${txtInputName.value} Su IMC es superior a 30!!`,
			icon: 'error',
			button: 'Ok!',
		});
	} else {
		swal({
			title: `Obesidad Grave!!! IMC ${result.toFixed(2)}`,
			text: `${txtInputName.value} Su IMC es superior a 39.9!!!`,
			icon: 'error',
			button: 'Ok!',
		});
	}
	limpiar();
}

function limpiar() {
	txtInputName.value = '';
	txtInputEst.value = '';
	txtInputKg.value = '';
}
