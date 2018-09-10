window.onload = function() {
	// load_page();
	createElementdd();	
	
}

function load_page() {
	var name = prompt('enter your name');
	localStorage.setItem('myname', name);
	var heading = document.getElementById('heading').textContent;
	console.log(heading);
	document.getElementById('heading').textContent = 'Welcome '+ name;
}

function createElementdd() {
	
	var panel = document.createElement('div');
	panel.textContent = 'hello world';
	panel.setAttribute('class','div_color');
	var html = document.querySelector('body');
	html.appendChild(panel);

	var change = document.createElement('button');
	change.setAttribute('class','change_text');
	change.textContent = 'change color';
	panel.appendChild(change);
	change.onclick = function() {
		panel.removeAttribute('class');
		panel.setAttribute('class','modify');
	 }
	// html.removeChild(panel);
}
