package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ClickHandler extends WebElementHandler {
	private WebDriver driver;

	public ClickHandler(WebDriver driver, By by) {
		super(driver, by);
		this.driver = driver;
	}

	public ClickHandler(WebElement parentElement, By by) {
		super(parentElement, by);
	}
	
	public void click(){
		waitAndFindElement();
		element.click();
	}
}
