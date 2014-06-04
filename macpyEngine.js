var global_opt = {};
var page = require('webpage').create();
var $ = require('jQuery');

exports.get_screenshot = function(url, opt){
    page.open(url, function() {
        page.render(url + '_screenshot.png');
        phantom.exit();
    });
};

exports.get_text = function(url, opt){
    page.open(url, function(status) {
        if (status !== 'success') {
            console.log('Unable to access network');
        } else {
            var ua = page.evaluate(function() {
                return document.getElementById('myagent').textContent;
            });
            console.log(ua);
        }
        phantom.exit();
    });
};