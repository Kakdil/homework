var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.intro');
	text.classList.add('red');
	var img = document.querySelector('.cases');
	img.style.display = 'none';
	document.querySelector('.skill-three').style.marginLeft = '50px';
}