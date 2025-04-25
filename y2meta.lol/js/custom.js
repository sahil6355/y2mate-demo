document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".language").forEach(function (dropdown) {
		dropdown.addEventListener("click", function (e) {
			e.stopPropagation();
			document.querySelector(".sub-language").classList.toggle("lang_menu");
		});
	});
	document.querySelectorAll(".mobile-menu").forEach(function (hamburger) {
		hamburger.addEventListener("click", function (e) {
			e.stopPropagation();
			document.querySelector(".navbar").classList.toggle("open_menu");
			document.querySelector(".sub-language").classList.remove("lang_menu");
		});
	});
	document.addEventListener("click", function (event) {
		const nav = document.querySelector(".navbar");
		const dropdownContent = document.querySelector(".mobile-menu");
		if (nav && dropdownContent && !nav.contains(event.target) && !dropdownContent.contains(event.target)) {
			nav.classList.remove("open_menu");
			dropdownContent.classList.remove("lang_menu");
		}
	});
	document.querySelectorAll(".mobile-menu").forEach(function (content) {
		content.addEventListener("click", function (e) {
			e.stopPropagation();
		});
	});

	document.addEventListener('click', function(event) {
		document.querySelector(".sub-language").classList.remove("lang_menu");
	});
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
	let inputurl = document.getElementById('url');
	if(inputurl){
		inputurl.addEventListener('keyup', function(e) {
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