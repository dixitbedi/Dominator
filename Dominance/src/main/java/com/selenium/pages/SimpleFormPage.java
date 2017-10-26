package com.selenium.pages;

import org.openqa.selenium.WebDriver;

import com.selenium.objectrepository.SimpleForm;

public class SimpleFormPage extends SimpleForm{
	
	public SimpleFormPage(WebDriver driver) {
		super(driver);
	}

	public void enterText() {
		enterMessage.sendKeys("hello");
	}
	
	public void clear() {
		enterMessage.clear();
	}

}
