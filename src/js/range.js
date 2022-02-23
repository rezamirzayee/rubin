(function(){

	var valueRange = document.querySelector('.bar-range');
	var fallowingValue = document.querySelector('.fallowing-value');

	fallowingValue.innerHTML = 'to ' + valueRange.value;

	function toChangeBehaviorSlider(){

		var nameBrowser = document.querySelector('html').getAttribute('data-nameBrowser');
		var val;

		if (nameBrowser === 'IE') {

			val = this.value;
			fallowingValue.innerHTML = 'to ' + val;

		} else {

			val = this.value;
			var max = this.getAttribute('max');
			var sizeBackground = val / max * 100;
			valueRange.style.backgroundImage = '-webkit-linear-gradient(left,#91c92f 0%,#91c92f ' + sizeBackground + '%, #dbdbdb ' + sizeBackground + '%, #dbdbdb 100%)';
			fallowingValue.innerHTML = 'to ' + val;
		}
	}

	valueRange.addEventListener('input',toChangeBehaviorSlider);
	valueRange.addEventListener('change',toChangeBehaviorSlider)

})();
