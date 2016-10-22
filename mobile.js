var mobile = function() {
	if(screen.width <= 800) {
		document.body.style.backgroundImage = 'none';
		document.getElementById('nav1').style.width = '100%';
		document.getElementById('search_bar').style.width = '100%';
		
		if(document.getElementById('body1') != null) {
			document.getElementById('body1').style.width='100%';
		}
		
		document.p.style.fontSize = '1em';
		document.a.style.fontSize = '1em';
	}
}