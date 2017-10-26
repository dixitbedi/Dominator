package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Text extends WebElementHandler {

	public Text(WebDriver driver, By by) {
		super(driver, by);
	}

	public Text(WebElement parentElement, By by) {
		super(parentElement, by);
	}
}
