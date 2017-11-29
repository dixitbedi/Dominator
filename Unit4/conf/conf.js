//var HtmlReporter = require('protractor-html-screenshot-reporter');
//var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');

exports.config = {
	directConnect : true,
	capabilities : {
		'browserName' : 'chrome'
	},

	specs : [ '../Tests/*_test.js' ],
	framework : 'jasmine2',

	onPrepare : function() {
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir : 'allure-results'
		}));

		jasmine.getEnv().afterEach(function(done) {
			browser.takeScreenshot().then(function(png) {
				allure.createAttachment('Screenshot', function() {
					return new Buffer(png, 'base64');
				}, 'image/png')();
				done();
			});
		});

		var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'target/screenshots'
		}));
	},

	jasmineNodeOpts : {
		// onComplete will be called just before the driver quits.
		onComplete : null,
		// If true, display spec names.
		isVerbose : false,
		// If true, print colors to the terminal.
		showColors : true,
		// If true, include stack traces in failures.
		includeStackTrace : true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval : 100000
	}
}
