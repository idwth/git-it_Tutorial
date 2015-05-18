var fs = require('fs')
var path = require('path');

var extToFind, callback

function sortFiles(directory, passedExt, cb) {
	extToFind = "." + passedExt
	callback = cb
	fs.readdir(directory, filesHelper) 
}

function filesHelper(err, fList) {
	if(err) {
		console.log('An error occured: ' + fList);
	    return callback(err);
	}
	
	var fileNames = [];
	
	if(extToFind.length > 0) {
		for(var i = 0; i < fList.length; i++) {
			var currLine = fList[i]
			var currExt = path.extname(currLine)
			if(extToFind.localeCompare(currExt) == 0) fileNames[i] = currLine	
		}
	}
	
	callback(null, fileNames);
}

module.exports = sortFiles