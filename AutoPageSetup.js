// Set up page title using element with "title" id
document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");

// Basic MD Rules and a little spicy syntax
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\|(.*?)\]\]/g,'<a href="$2">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/---/g,'<hr>');
document.body.innerHTML = document.body.innerHTML.replace(/^(?:# )(.*)/g,'<h3>$1</h3>');
document.body.innerHTML = document.body.innerHTML.replace(/^(?:## )(.*)/g,'<h4>$1</h4>');
document.body.innerHTML = document.body.innerHTML.replace(/^(?:### )(.*)/g,'<h5>$1</h5>');
document.body.innerHTML = document.body.innerHTML.replace(/^(?:#### )(.*)/g,'<h6>$1</h6>');
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:b:)(.*)\]/g,'<b>$1</b>');
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:i:)(.*)\]/g,'<i>$1</i>');
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:u:)(.*)\]/g,'<u>$1</u>');
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:s:)(.*)\]/g,'<s>$1<s>');
