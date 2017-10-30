package com.selenium.handler;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.selenium.testdriver.TestDriver;

public class WebElementHandler {
	protected static final int MAX_TIMEOUT  = 10;
	
	protected WebDriver driver;
	protected WebElement element;
	protected WebElement parentElement;
	protected By by;
	private Long waitingTimeForElement;
	private Long timeOutInSeconds;

	public WebElementHandler(WebDriver driver, By by) {
		this.driver = driver;
		this.by = by;
		waitingTimeForElement = TestDriver.getWaitingTimeForElement();
	}

	public WebElementHandler(WebElement parentElement, By by) {
		this.parentElement = parentElement;
		this.by = by;
		waitingTimeForElement = TestDriver.getWaitingTimeForElement();
	}
	
	public List<WebElement> getWebElements(){
		return driver.findElements(by);
	}

	public WebElement getWebElement(int num){
		return driver.findElements(by).get(num);
	}
	
	public List<WebElement> getChildWebElements(){
		return parentElement.findElements(by);
	}
	
	public WebElement getChildWebElements(int num){
		return parentElement.findElements(by).get(num);
	}
	
	public void sendKeys(CharSequence...charSequences){
		waitAndFindElement();
		element.sendKeys(charSequences);
	}
	
	public void submit(){
		waitAndFindElement();
		element.submit();
	}
	
	public String getText(){
		for(int count=0;count< MAX_TIMEOUT; count++){
			try {
				waitAndFindElement();
				return element.getText();
			} catch (StaleElementReferenceException e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	public Boolean isEnabled(){
		waitAndFindElement();
		return element.isEnabled();
	}

	public Boolean isPresent(){
		try {
			waitAndFindElement();
			return true;
		} catch (AssertionError e) {
			return  false;
		}
	}

	public Boolean isPresentAndVisible(){
		for(int count=0;count< MAX_TIMEOUT; count++){
			try {
				waitAndFindElement();
				return element.isDisplayed();
			} catch (StaleElementReferenceException e) {
				e.printStackTrace();
			} catch (AssertionError e) {
				return false;
			}
		}
		return false;
	}

	public Boolean isNotPresent(){
		try {
			return new WebDriverWait(driver, timeOutInSeconds).until(new ExpectedCondition<Boolean>() {

				public Boolean apply(WebDriver input){
					if(parentElement != null){
						return parentElement.findElements(by).size() == 0;
					} else {
						return driver.findElements(by).size() == 0;
					}
				}
			});
		} catch (Exception e) {
			return false;
		}
	}

	public Boolean isNotVisible(){
		try {
			return new WebDriverWait(driver, timeOutInSeconds).until(new ExpectedCondition<Boolean>() {

				public Boolean apply(WebDriver input){
					if(parentElement != null){
						return parentElement.findElement(by).isDisplayed();
					} else {
						return driver.findElement(by).isDisplayed();
					}
				}
			});
		} catch (Exception e) {
			return false;
		}
	}

	protected void waitAndFindElement(){
		waitAndFindElement(by);
	}

	protected void waitAndFindElement(final By by){
		try {
			if(parentElement != null){
				element = parentElement.findElement(by);
			}else{
				element = new WebDriverWait(driver, timeOutInSeconds).until(ExpectedConditions.visibilityOfElementLocated(by));
			}
		} catch (Exception e) {
			takeScreenshot();
			throw new AssertionError(getElementId(by)+ " is not visible in " + timeOutInSeconds + "Seconds");
		}
	}

	public String getElementId(By by){
		return by.toString().split(":")[1];
	}

	public String takeScreenshot(){
		String screenshot = System.getProperty("user.dir") + "Selenium\\Dominance\\screenshots"
				+ +System.currentTimeMillis() + ".png";
		File srcFile = ((TakesScreenshot) driver)
				.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(srcFile, new File(screenshot));
		} catch (IOException e) {

		}
		return screenshot;
	}
}


