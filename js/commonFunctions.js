function displayTitle(title, name) {

    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function() {};
    var titleAsHeader = "<header><div style='margin-left:20px;'><h1>" + title + "</h1><br>" + name + "</div></header>";
    document.write(titleAsHeader);
    document.title = title;
    
    var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
}