var home_page = require ('../Pages/home_page.js')

var login_page = function () {
	this.username = element(by.xpath(".//*[@id='md-input-0' and @name='username']"));
	this.client = element(by.xpath(".//*[@id='md-input-1' and @name='client']"));
	this.password = element(by.xpath(".//*[@id='md-input-2' and @name='password']"));
	this.loginButton = element(by.xpath(".//form[@name='form']//following::button[1]"));
	this.loginError = element(by.xpath(".//span[text()='Ugyldig brukernavn eller passord' or text()='Username or Password or Client is incorrect']"));
	
	//Login to the application
	this.login = function (userName, Client, Password) {
		this.username.sendKeys(userName);
		browser.sleep(1000);
		this.client.sendKeys(Client);
		browser.sleep(1000);
		this.password.sendKeys(Password);
		browser.sleep(1000);
		this.loginButton.click();
	};
	
	//Verify the page displayed
	this.verifyPageDisplayed = function () {
		var expectedTitle = "ERP.HappyNegotiation.Web";
		expect(browser.getTitle()).toBe(expectedTitle);
	};
	
	//Verify the login is successful
	this.verifyLoginSuccess = function () {
		var userLoginValue = "BK | SYSTEM";
		var loginTest = home_page.userlogin.getText();
		expect(loginTest).toBe(userLoginValue);
	};
};
module.exports = new login_page();