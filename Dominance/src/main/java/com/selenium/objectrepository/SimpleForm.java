package com.selenium.objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.selenium.handler.TextArea;

public class SimpleForm  {
	
	private WebDriver driver;
	
	public TextArea enterMessage;

	public SimpleForm(WebDriver driver) {
		this.driver = driver;
		enterMessage = new TextArea(driver, By.xpath(".//*[@id='user-message']"));
	}

}
