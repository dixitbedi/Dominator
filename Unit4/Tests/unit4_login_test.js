
describe("Unit4 Login", function() {
	
	var login_page = require('../Pages/login_page.js');
	var home_page = require('../Pages/home_page.js');

	it("Open URL", function() {
		browser.get("http://172.20.21.206/ERPHappyNegotiation/#/login?returnUrl=%2F");
		browser.driver.manage().window().maximize();
	})
	
	it("Login into the application", function() {
		//Verify the page displayed
		login_page.verifyPageDisplayed();
		//Login to the application
		login_page.login("system", "BK", "system");
		//Verify the login is successful
		login_page.verifyLoginSuccess();
	});

	it("Selecting Ansvarsstedon on home page", function() {
		//Selecting Ansvarssted
		home_page.selectAnsvarssted();
		browser.sleep(2000);
	});
	
	it("Creating Negotiation on home page", function() {
		//Creating Negotiation
		home_page.createNegotiation();
	});
	
	it("Deleting Negotiation on home page", function() {
		home_page.deleteNegotiation();
	});
	
	it("Editing Negotiation on home page", function() {
		//Editing Negotiation
		home_page.editNegotiation();
		browser.sleep(2000);
	});
	
	it("Selecting Administrasjon on home page", function() {
		//Selecting Administrasjon
		home_page.selectAdministrasjon();
		browser.sleep(2000);
	});
	
	it("Entering Bruker on home page", function() {
		//Entering Bruker
		home_page.enterBruker();
		browser.sleep(2000);
	});
	
	it("Logout of the application", function() {
		home_page.logout();
		//Verify the page displayed
		login_page.verifyPageDisplayed();
		browser.sleep(3000);
	});
	
});