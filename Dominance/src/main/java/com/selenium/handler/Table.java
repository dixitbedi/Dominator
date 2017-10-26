package com.selenium.handler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Table extends WebElementHandler {

	public static String tableId;
	public static final String TABLE_HEAD_TAG = "/thead";
	public static final String TABLE_BODY_TAG = "/tbody";
	public static final String TABLE_ROW = "/tr";
	public static final String TABLE_HEAD = "/th";
	public static final String TABLE_DATA = "/td";
	
	public Table(WebDriver driver, By by) {
		super(driver, by);
		this.by = by;
		
		tableId = by.toString().substring(by.toString().indexOf(":") + 2);
	}	
	
	/*public String getXpath(int column,int row) {
		return "//table[@id ='" + tableId + "'] + TABLE_BODY_TAG + TABLE_ROW + "[" + row + "]" + T;
	}*/
	
}
