document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");
document.body = document.body.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>');
document.body = document.body.replace(/_(.*?)_/g,'<i>$1</i>');
document.body = document.body.replace(/__(.*?)__/g,'<b>$1</b>');
document.body = document.body.replace(/___(.*?)___/g,'<b><i>$1</i></b>');
document.body = document.body.replace(/>(.*?)/g,'<blockquote>$1</blockquote>');