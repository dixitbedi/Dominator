package com.selenium.testbase;

import org.testng.annotations.Test;

import com.selenium.pages.SimpleFormPage;
import com.selenium.testdriver.TestDriver;
import com.selenium.utility.Constants;

public class Testcase1221 extends TestDriver {
	
	private SimpleFormPage simpleformpage;
	
	@Override
	protected void pageSetup() {
		simpleformpage = new SimpleFormPage(driver);
	}
	
	@Test(timeOut=1000)
	public void step123() throws Exception {
		System.out.println("step123");
		simpleformpage.login(Constants.USERNAME, Constants.PASSWORD);
	}
}
