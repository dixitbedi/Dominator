package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TextArea extends TextField {

	public TextArea(WebDriver driver, By by) {
		super(driver, by);
	}

	public TextArea(WebElement parentElement, By by) {
		super(parentElement, by);
	}

}
