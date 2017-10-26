package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchFrameException;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Frame extends WebElementHandler {

	public Frame(WebDriver driver, By by) {
		super(driver, by);
	}

	public void switchToFrame(int frame){
		try{
			driver.switchTo().frame(frame);
			System.out.println("Navigated to frame with name " + frame);
		}
		catch (NoSuchFrameException e){
			System.out.println("Unable to locate frame with id " + frame + e.getStackTrace());
		}
	}

	public void switchToFrame(String frameName){
		try{
			driver.switchTo().frame(frameName);
			System.out.println("Navigated to frame with name " + frameName);
		}
		catch (NoSuchFrameException e){
			System.out.println("Unable to locate frame with name " + frameName + e.getStackTrace());
		}
	}

	public void switchToFrame(WebElement element){
		try{
			driver.switchTo().frame(element);
			System.out.println("Navigated to frame with name " + element);
		}
		catch (NoSuchFrameException e){
			System.out.println("Unable to locate frame with element " + element + e.getStackTrace());
		}
	}

	public void switchToDefault(){
		try{
			driver.switchTo().defaultContent();
			System.out.println("Navigated to Main Window");
		}
		catch (NotFoundException e){
			System.out.println("Unable to locate main window " + e.getStackTrace());
		}
	}
}
