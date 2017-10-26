package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TextField extends WebElementHandler {

	public TextField(WebDriver driver, By by) {
		super(driver, by);
	}

	public TextField(WebElement parentElement, By by) {
		super(parentElement, by);
	}
	
	public void clear() {
		waitAndFindElement();
		element.clear();
	}
	
	public void click() {
		waitAndFindElement();
		element.click();
	}
	
	public Boolean isFocused() {
		waitAndFindElement();
		return element.equals(driver.switchTo().activeElement());
	}
	
	public void type(String Value) {
		waitAndFindElement();
		element.sendKeys(Value);
	}
	
	public void keyboardAction(Keys keys) {
		waitAndFindElement();
		element.sendKeys(keys);
	}

}
