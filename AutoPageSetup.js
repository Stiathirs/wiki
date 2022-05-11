document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/_(.*?)_/g,'<i>$1</i>');
document.body.innerHTML = document.body.innerHTML.replace(/__(.*?)__/g,'<b>$1</b>');
document.body.innerHTML = document.body.innerHTML.replace(/___(.*?)___/g,'<b><i>$1</i></b>');