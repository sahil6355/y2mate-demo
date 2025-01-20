document.getElementById('languageToggle').addEventListener('click', function() {
	const langDropdown = document.getElementById('langDropdown');
	langDropdown.style.display = langDropdown.style.display === 'none' || langDropdown.style.display === '' ? 'block' : 'none';
});

document.getElementById('navbarToggle').addEventListener('click', function() {
	const nav = document.querySelector('.nav');
	nav.classList.toggle('active');
});

document.addEventListener('click', function(event) {
	const langDropdown = document.getElementById('langDropdown');
	const languageToggle = document.getElementById('languageToggle');
	if (!languageToggle.contains(event.target)) {
		langDropdown.style.display = 'none';
	}
});


function handleData(data) {
	var suggestionBox = document.getElementById('suggestion_box');
	suggestionBox.innerHTML = '';
	suggestionBox.style.display = 'block';
	var suggestionsList = document.createElement('ul');
	suggestionsList.className = 'suggestions';
	suggestionsList.id = 'suggestions';
	data[1].forEach(function(term) {
		var listItem = document.createElement('li');
		listItem.className = 'search_result';
		listItem.textContent = term;
		suggestionsList.appendChild(listItem);
	});
	suggestionBox.appendChild(suggestionsList);
}

function getSuggestions(e) {
	if (!e || !e.target) return;
	var script = document.createElement('script');
	script.src = 'https://suggestqueries.google.com/complete/search?output=chrome&q=' + e.target.value + '&callback=handleData';
	document.body.appendChild(script);
	script.onload = function() {
		document.body.removeChild(script);
	};
}

document.addEventListener('DOMContentLoaded', function() {
	let url = document.getElementById('url');
	if(url){
		url.addEventListener('keyup', function(e) {
		var code = e.keyCode || e.which;
		if ([37, 38, 39, 40].includes(code)) {
			e.preventDefault();
			var suggestions = document.querySelectorAll('#suggestions li');
			var index = Array.from(suggestions).findIndex(li => li.classList.contains('active'));
			if (index === -1) index = -1;
			var newIndex;
			switch (code) {
			case 38:
				newIndex = Math.max(0, index - 1);
				break;
			case 40:
				newIndex = Math.min(suggestions.length - 1, index + 1);
				break;
			}
			suggestions.forEach(li => li.classList.remove('active'));
			suggestions[newIndex].classList.add('active');
			var newQuery = suggestions[newIndex].textContent;
			document.getElementById('url').value = newQuery;
		} else if (code == 13) {
			document.getElementById('suggestion_box').style.display = 'none';
		} else {
			getSuggestions(e);
		}
	});
	}

	document.addEventListener('click', function(e) {
		var target = e.target;
		if (!target.closest('#suggestion_box')) {
			document.getElementById('suggestion_box').style.display = 'none';
		}
	});

	document.addEventListener('click', function(e) {
		var target = e.target;
		if (target.closest('ul#suggestions li')) {
			var valattr = target.textContent;
			document.getElementById('url').value = valattr;
			document.getElementById('suggestion_box').style.display = 'none';
			document.getElementById('submit-btn').click();
		}
	});

	document.addEventListener('mouseenter', function(event) {
		if (!event.target || !event.target.classList || !event.target.classList.contains('search_result')) {
			return;
		}
		var listItems = document.querySelectorAll('#suggestions li');
		listItems.forEach(function(item) {
			item.classList.remove('active');
		});
		event.target.classList.add('active');
		var activeItem = document.querySelector('#suggestions li.active');
		var newQuery = activeItem.textContent;
		document.querySelector('#url').value = newQuery;
	});
});