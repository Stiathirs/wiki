document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\|(.*?)\]\]/g,'<a href="$2">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/---/g,'<hr>');