package com.selenium.testbase;

import org.testng.annotations.Test;

import com.selenium.pages.SimpleFormPage;
import com.selenium.testdriver.TestDriver;

public class Testcase1221 extends TestDriver {
	
	public Testcase1221() {
		super();
	}
	
	SimpleFormPage sfp = new SimpleFormPage(driver);
	
	@Test
	public void step123() {
		sfp.enterText();
		sfp.clear();
	}

	@Test
	public void step1234() {
		sfp.enterText();
		sfp.clear();
	}
}
