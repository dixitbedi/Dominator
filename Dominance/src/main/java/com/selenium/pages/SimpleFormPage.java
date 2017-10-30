package com.selenium.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.selenium.handler.Button;
import com.selenium.handler.TextField;

public class SimpleFormPage{
	
	private WebDriver driver;
	public TextField enterMessage;
	
	public TextField userNameField;
	public TextField passwordField;
	public Button logInButton;
	
	public SimpleFormPage(WebDriver driver) {
		this.driver = driver;
		enterMessage = new TextField(driver, By.xpath(".//*[@id='user-message']"));
		userNameField = new TextField(driver, By.xpath(".//input[@name='uid']"));
		passwordField = new TextField(driver, By.xpath(".//input[@name='password']"));
		logInButton = new Button(driver, By.xpath(".//input[@name='btnLogin']"));
		
	}
	
	public void login(String username, String password) throws Exception {
		if(userNameField.isPresentAndVisible()  &&  passwordField.isPresentAndVisible()) {
			userNameField.clear();
			userNameField.type(username);
			passwordField.clear();
			passwordField.type(password);
			logInButton.click();
			System.out.println("goof");
		}else {
			System.out.println("noof");
			System.out.println(userNameField);
			System.out.println(passwordField);
			System.out.println(logInButton);
			throw new Exception("not able to login");
		}
	}

	public SimpleFormPage enterText() {
		 enterMessage.sendKeys("hello");
		 return this;
	}
	
	public SimpleFormPage clear() {
		enterMessage.clear();
		return this;
	}
}




