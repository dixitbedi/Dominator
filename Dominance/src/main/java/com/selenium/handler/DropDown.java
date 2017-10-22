package com.selenium.handler;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropDown extends WebElementHandler {
	
	protected WebDriver driver;
	protected Select select;
	protected By by;
	
	public DropDown(WebDriver driver, By by) {
		super(driver, by);
		this.driver = driver;
		this.by = by;
	}
	
	public void select(String name){
		select = new Select(driver.findElement(by));
		select.selectByVisibleText(name);
	}
	
	public List<WebElement> getOptions(){
		select = new Select(driver.findElement(by));
		return select.getOptions();
	}
	
	public WebElement getFirstSelectedOptions(){
		select = new Select(driver.findElement(by));
		return select.getFirstSelectedOption();
	}
	
	public List<WebElement> getSelectedOptions(){
		select = new Select(driver.findElement(by));
		return select.getAllSelectedOptions();
	}
	
	public void selectUsingIndex(int index){
		select = new Select(driver.findElement(by));
		select.selectByIndex(index);
	}
	
}
