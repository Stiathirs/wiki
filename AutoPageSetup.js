// Set up page title using element with "title" id
document.getElementById("title").innerHTML = document.title.replace(" - Basic RPG Official Wiki","");

// Formatting rules
document.body.innerHTML = document.body.innerHTML.replace(/\[!spoil\]/g,'<caution>This page contains potential spoilers. Proceed with caution!</caution>'); // Spoiler template.
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:warn:)(.*)\]/g,'<warning>$1</warning>'); // Warning message: [warn:Message]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:caution:)(.*)\]/g,'<caution>$1</caution>'); // Caution message: [caution:Message]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:note:)(.*)\]/g,'<note>$1</note>'); // Note message: [note:Message]
document.body.innerHTML = document.body.innerHTML.replace(/(?:\[#:)(.*)\]/g,'<h3>$1</h3>'); // Header 1: [#:text]
document.body.innerHTML = document.body.innerHTML.replace(/(?:\[##:)(.*)\]/g,'<h4>$1</h4>'); // Header 2: [##:text]
document.body.innerHTML = document.body.innerHTML.replace(/(?:\[###:)(.*)\]/g,'<h5>$1</h5>'); // Header 3: [###:text]
document.body.innerHTML = document.body.innerHTML.replace(/(?:\[####:)(.*)\]/g,'<h6>$1</h6>'); // Header 4: [####:text]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:b:)(.*)\]/g,'<b>$1</b>'); // Bold: [b:text]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:i:)(.*)\]/g,'<i>$1</i>'); // Italics: [i:text]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:u:)(.*)\]/g,'<u>$1</u>'); // Underline: [u:text]
document.body.innerHTML = document.body.innerHTML.replace(/\[(?:s:)(.*)\]/g,'<s>$1<s>'); // Strikethrough: [s:text]
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\|(.*?)\]\]/g,'<a href="$2">$1</a>'); // Link with display text: [[Text to Show|Link]]
document.body.innerHTML = document.body.innerHTML.replace(/\[\[(.*?)\]\]/g,'<a href="$1">$1</a>'); // Direct link: [[Link]]
