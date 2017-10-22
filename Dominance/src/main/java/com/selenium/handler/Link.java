package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Link extends ClickHandler {

	public Link(WebDriver driver, By by) {
		super(driver, by);
	}

	public Link(WebElement parentElement, By by) {
		super(parentElement, by);
	}

	protected String getReferenceAction() {
        return element.getAttribute("href");
    }
}
