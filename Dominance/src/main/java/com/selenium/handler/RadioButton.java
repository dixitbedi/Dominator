package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RadioButton extends ClickHandler {

	public RadioButton(WebDriver driver, By by) {
		super(driver, by);
	}

	public void check(){
		super.click();
	}
	
	public void uncheck(){
		super.click();
	}
	
	public Boolean isChecked(){
		return super.isEnabled();
	}
}
