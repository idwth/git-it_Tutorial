/*
var http = require('http')
var url = require('url')

if(process.argv.length >= 3) {
	var server = http.createServer(serveReq)
	server.listen(parseInt(process.argv[2]))
}

function serveReq(req, res) {
	if (req.method == 'GET') {
		var parsed = url.parse(req.url, true)
		var newDate = new Date(parsed.query.iso)
		var data = null		
				
		if (parsed.pathname == '/api/parsetime') {
			data = JSON.stringify({'hour' : newDate.getHours()
									, 'minute' : newDate.getMinutes()
									, 'second' : newDate.getSeconds()})
									
		} else if (parsed.pathname == '/api/unixtime') {
			data = JSON.stringify({'unixtime' : newDate.getTime()})
		}
		
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(data)
		res.end()
	}
}
*/


/*
var http = require('http')
var fs = require('fs')
var map = require('through2-map')

if(process.argv.length >= 3) {
	var server = http.createServer(serveReq)
	server.listen(parseInt(process.argv[2]))
}

function serveReq(req, res) {
	if (req.method == 'POST') {

//		req.pipe(map(function (chunk) {
//       	return chunk.toString().toUpperCase()
//		})).pipe(res)

		var reqBody = ''						
		req.on('data', function(chunk) {
			reqBody += chunk.toString().toUpperCase()
		})
		
		req.on('end', function() {
			res.writeHead(200, { 'content-type': 'text/plain' })
			res.write(reqBody)
			res.end();
		})
	}
}		
*/


/*
var http = require('http')
var fs = require('fs')

if(process.argv.length >= 4) {
	var server = http.createServer(serveReq)
	server.listen(parseInt(process.argv[2]))
}

function serveReq(req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' })
	var stream = fs.createReadStream(process.argv[3])
	stream.pipe(res)
}
*/


/*
var net = require('net');

if (process.argv.length > 2) {
    var server = net.createServer(function (socket) {
		socket.end(getNow() + '\n')
    })
    server.listen(parseInt(process.argv[2]))
}

function getNow() {
	var date = new Date()
    return  date.getFullYear() + "-" 
		+ zeroFill(date.getMonth() + 1) + "-"
		+ zeroFill(date.getDate()) + " "
		+ zeroFill(date.getHours()) + ":"
		+ zeroFill(date.getMinutes()) 
}

function zeroFill(fetched) {
	return (fetched < 10) ? "0" + fetched : fetched
}
*/


/*
var http = require('http')
var bl = require('bl')

var results = []
var finishedCounter = 0

if(process.argv.length >= 5) {
	for (var i = 0; i < 3; i++) {
		startProcess(i)
	}
}

function startProcess(index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function(err, data) {
			if(err) {
				return console.log('An error occured: ' + err);
			}	
	
			results[index] = data.toString()
			finishedCounter++
			
			if (finishedCounter == 3) printOut()
		}))
	})
}

function printOut() {
	for (var j = 0; j < 3; j++) {
		console.log(results[j])
	}
}
*/


/*

.
.
.

function receiveReq(response) {
	response.setEncoding("utf8")
	response.on("data", processReq)
	response.on('error', console.error)
}

function processReq(data) {
	console.log(data)
}
*/


/*
var module = require('./sortbytext.js')

if(process.argv.length > 3) {
	module(process.argv[2], process.argv[3], done) 
}

function done(err, data) {
	if(err) {
		console.log('An error occured: ' + err);
	    return;
	}	
	
	for(var i = 0; i < data.length; i++) {
		console.log(data[i])
	}
}
*/


/*
ASYNC I/O

if(process.argv.length > 2) {
	var contents = fs.readFile(process.argv[2], 'utf8', sumNewLines)
}

function sumNewLines(err, data) {
	if(err) {
	    console.log('An error occured: ' + err);
	    return;
	};

	var lnCount = data.split('\n').length;	
	console.log(lnCount - 1)
}
*/