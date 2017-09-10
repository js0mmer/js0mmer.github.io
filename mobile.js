var mobile = function() {
		if(screen.width <= 800) {
		    document.getElementById('tabs').style.marginLeft = '0px';
		    document.getElementById('tabs').style.marginRight = '0px';

				if(document.getElementById('body1') != null) {
		        document.getElementById('body1').style.marginLeft = 'auto';
		        document.getElementById('body1').style.marginRight = 'auto';
				}

				document.p.style.fontSize = '1em';
				document.a.style.fontSize = '1em';
		}
}
