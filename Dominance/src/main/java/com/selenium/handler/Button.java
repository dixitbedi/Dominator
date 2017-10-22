package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Button extends ClickHandler {

	public Button(WebDriver driver, By by) {
		super(driver, by);
	}

	public Button(WebElement parentElement, By by) {
		super(parentElement, by);
	}

	@Override
	public void click(){
		if(isEnabled()){
			element.click();
		}
	}	
}
