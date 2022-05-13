// Ignore errors, this is for the lack of an element with id "title"
window.onerror = function(){
  return true;
}

// Set up page title using title element
document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");

// Basic MD Rules and using a little MediaWiki syntax
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\|(.*?)\]\]/g,'<a href="$2">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/---/g,'<hr>');