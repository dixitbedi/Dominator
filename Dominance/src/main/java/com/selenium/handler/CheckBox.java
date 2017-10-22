package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CheckBox extends ClickHandler {

	public CheckBox(WebDriver driver, By by) {
		super(driver, by);
	}

	public void checkAction() throws Exception{
		if(!isCheckedAction()){
			element.click();
		}else {
			 throw new Exception("Can't check element. Verify locator for click or isCheckedAction");
		}
	}

	public void unCheckAction() throws Exception{
		if(isCheckedAction()){
			element.click();
		}else {
			 throw new Exception("Can't uncheck element. Verify locator for click or isCheckedAction");
		}
	}
	   
	public Boolean isCheckedAction(){
		return isSelected();
	}

	protected Boolean isSelected(){
		waitAndFindElement();
		return element.isSelected();
	}
}
