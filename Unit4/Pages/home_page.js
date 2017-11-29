var home_page = function () {
	this.logOut = element(by.xpath(".//ul[@class='dropdown-menu']/li[2]"));
	this.userlogo = element(by.xpath(".//img[@alt='Usr']"));
	this.userlogin = element(by.xpath(".//span[@class='user_name']"));
	this.administrasjonButton = element(by.xpath(".//span[text()='Administrasjon']"));
	this.Forhandlingsinformasjon = element(by.xpath(".//a[text()='Forhandlingsinformasjon']"));
	this.tooltipButton = element(by.xpath('.//button[@mdtooltip="Ny" and @mdtooltipposition="right"]'));
	this.LønnsrammeButton = element(by.xpath(".//span[text()='Lønnsramme ']"));
	this.LønnsrammeButtonOption1 = element(by.xpath('.//label[text()="Velg "]//following::md-option[1]'));
	this.LønnsrammeButtonOption2 = element(by.xpath('.//label[text()="Velg "]//following::md-option[2]'));
	this.LønnsrammeButtonOption3 = element(by.xpath('.//label[text()="Velg "]//following::md-option[3]'));
	this.LønnsrammeButtonOption4 = element(by.xpath('.//label[text()="Velg "]//following::md-option[4]'));
	this.ÅrsakButton = element(by.xpath(".//span[text()='Årsak ']"));
	this.ÅrsakButtonOption = element(by.xpath('.//*[@dir="ltr"]/div/div/md-option[2]'));
	this.LagreButton = element(by.xpath('.//span[text()=" Lagre"]'));
	this.CancelSelection = element(by.xpath(".//table/tbody/tr[1]/td[1]"));
	this.AvsluttetButton = element(by.xpath(".//span[text()='Avsluttet']"));
	this.JaButton = element(by.xpath(".//span[text()='Ja']"));
	this.editNegoButton = element(by.xpath(".//table/tbody/tr[1]/td[9]//md-icon"));
	this.editNegoOption = element(by.xpath(".//input[@placeholder='Totalsum']"));
	this.createNegotiationSuccess = element(by.xpath(".//span[text()='Lagring vellykket']"));
	this.deleteNegotiationSuccess = element(by.xpath(".//span[text()='data oppdatert vellykket']"));
	this.radioAnsvarsstedSelect = element(by.xpath(".//md-radio-button[starts-with(@id,'md-radio') and @value='2']"));
	this.textAnsvarssted = element(by.xpath(".//b[text()='Ansvarssted']"));
	this.textFieldBruker = element(by.xpath(".//input[@placeholder='Bruker']"));
	this.searchBrukerResult = element(by.xpath(".//input[@placeholder='Bruker']/following::div/ul/li[1]/a"));
	this.selectOption1 = element(by.xpath(".//div[@id='users']/div[1]/select/option[1]"));
	this.moveOption1 = element(by.xpath(".//*[@id='users']/div[2]/button[2]"));
	this.lagreAnsvarssted = element(by.xpath(".//hn-usersetup/section[1]/button[@type='button']"));
	this.optionsBlock2 = element(by.xpath(".//select[@name='selectedUnions']"));
	this.moveOption2 = element(by.xpath(".//*[@id='users']/div[2]/button[1]"));
	this.Administrasjon = element(by.xpath('//div/a/span[text()="Administrasjon"]'));
	this.Forhandlingspart = element(by.xpath('//div[@id="demo3"]//a[text()="Forhandlingspart"]'));
	this.addButton = element(by.className('btn_darblue'));
	this.selectBoxFagforening = element(by.xpath('//div[@class="mat-select-trigger"]//span[text()="Fagforening "]'));
	this.Akademikerforbundet = element(by.xpath('//md-option[text()="Akademikerforbundet (UHF)"]'));
	this.fradatoCalendar = element(by.xpath('(//input[@placeholder="Fra dato:"]/following::md-datepicker-toggle)[1]'));
	this.fradatoDate = element(by.xpath('//td[@aria-label="23. november 2017"]'));
	this.tildatoCalendar = element(by.xpath('(//input[@placeholder="Til dato:"]/following::md-datepicker-toggle)[1]'));
	this.tildatoDate = element(by.xpath('//td[@aria-label="23. november 2017"]'));
	this.saveButton = element(by.buttonText('Lagre'));
	this.AkademikerforbundetUHF = element(by.xpath('//div[text()="Akademikerforbundet (UHF)"]//following::md-icon[1]'));
	this.statusDropDown = element(by.xpath('//div[@class="mat-select-trigger"]//span[text()="Status "]'));
	this.forslagOption = element(by.xpath('//md-option[text()="Forslag"]'));
	this.toastMessage1 = element(by.xpath('.//span[text()="Informasjon om kobling mellom forhandling og fagforening er lagret"]'));
	this.deleteIcon = element(by.xpath('//div[text()="Akademikerforbundet (UHF)"]//following::md-icon[2]'))
	this.Kopier = element(by.buttonText('Kopier'));
	this.AkademikerforbundetUHF2 = element(by.xpath('//div[text()="Akademikerforbundet (UHF)"]//following::md-icon[3]'));
	this.JaButton = element(by.buttonText('Ja'));
	this.dataSlettetMedHell = element(by.xpath('.//span[text()="data slettet med hell"]'));
	this.brukerOgFagforening = element(by.xpath('//div[@id="demo3"]//a[text()="Bruker og fagforening/ansvar"]'));
	this.brukerSearchBox = element(by.xpath('//input[@placeholder="Bruker"]'));
	this.brukerTypeAheadText = element(by.xpath('//a[text()="Anne Karen Magerøy Aandstad [AAAN ]"]'));
	this.fagforeningSelectBox = element(by.xpath('//span/b[text()="Fagforening"]//following::option[@value="Akademikernes fellesorganisasjon [AFK]"]'));
	this.brukerRightShiftButton = element(by.xpath('//button/span/md-icon[text()=""]'));
	this.textOppsettLagret = element(by.xpath('.//span[text()="Oppsett lagret"]'));
	this.valgtSelect = element.all(by.xpath('//span/b[text()="Valgt"]//following::option'));
	this.brukerLeftShiftButton = element(by.xpath('//button/span/md-icon[text()=""]'));
	
	//Logout of the application
	this.logout = function () {
		browser.sleep(1000);
		this.userlogo.click();
		browser.sleep(1000);
		this.logOut.click();
	};
	
	//Creating Negotiation
	this.createNegotiation = function () {
		this.administrasjonButton.click();
		browser.sleep(1000);
		this.Forhandlingsinformasjon.click();
		browser.sleep(1000);
		this.tooltipButton.click();
		browser.sleep(1000);
		this.LønnsrammeButton.click();
		browser.sleep(1000);
		this.LønnsrammeButtonOption1.click();
		this.LønnsrammeButtonOption2.click();
		this.LønnsrammeButtonOption3.click();
		this.LønnsrammeButtonOption4.click();
		browser.actions().mouseMove({x: 311, y: 230}).click().perform();
		browser.sleep(1000);
		this.ÅrsakButton.click();
		browser.sleep(1000);
		this.ÅrsakButtonOption.click();
		browser.sleep(1000);
		this.LagreButton.click();
		browser.sleep(500);
		expect(this.createNegotiationSuccess.getText()).toBe("Lagring vellykket");
		browser.sleep(5000);
	};
	
	//Deleting Negotiation
	this.deleteNegotiation = function () {
		browser.sleep(1000);
		this.CancelSelection.click();
		browser.sleep(1000);
		this.AvsluttetButton.click();
		browser.sleep(2000);
		this.JaButton.click();
		browser.sleep(1000);
		expect(this.deleteNegotiationSuccess.getText()).toBe("data oppdatert vellykket");
		browser.sleep(5000);
	};
	
	//Editing Negotiation
	this.editNegotiation = function () {
		this.editNegoButton.click();
		browser.sleep(1000);
		this.editNegoOption.sendKeys("2343");
		browser.sleep(1000);
		this.LagreButton.click();
		browser.sleep(1000);
		expect(this.createNegotiationSuccess.getText()).toBe("Lagring vellykket");
	};
	
	//Selecting Ansvarssted
	this.selectAnsvarssted = function () {
		this.radioAnsvarsstedSelect.click();
		browser.sleep(1000);
		expect((this.textAnsvarssted).getText()).toBe("Ansvarssted");
		browser.sleep(1000);
		this.textFieldBruker.click();
		browser.sleep(1000);
		this.textFieldBruker.sendKeys("an");
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(5000);
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.searchBrukerResult), 5000, 'Element taking too long to appear in the DOM');
		this.searchBrukerResult.click();
		browser.sleep(4000);
		this.selectOption1.click();
		this.selectOption1.getText().then(function(text){
			console.log(text);
		});

		getTextFromElement1 = this.selectOption1.getText().then(function(text){
				console.log(text);
				textvalue1 = text.trim;
				return textvalue1;
			});
		
		browser.sleep(1000);
		this.moveOption1.click();
		
		browser.sleep(5000);
		this.lagreAnsvarssted.click();
		this.optionsBlock2.all(by.tagName('option')).last().getText().then(function(text) {
			console.log(text);
		});
		
		getTextFromElement2 = this.optionsBlock2.all(by.tagName('option')).last().getText().then(function(text){
			console.log(text);
			textvalue2 = text.trim;
			return textvalue2;
		});
		
		expect(getTextFromElement1).toBe(getTextFromElement2);

		this.optionsBlock2.all(by.tagName('option')).last().click();
		this.moveOption2.click();
		browser.sleep(2000);
		this.lagreAnsvarssted.click();
		browser.sleep(5000);
		getTextFromElement3 = this.selectOption1.getText().then(function(text){
			console.log(text);
			textvalue1 = text.trim;
			return textvalue1;
		});
		
		expect(getTextFromElement2).toBe(getTextFromElement3);

		browser.sleep(5000);
	};
	
	//Selecting Administrasjon
	this.selectAdministrasjon = function(){
		this.Administrasjon.click();
		this.Forhandlingspart.click();
		this.addButton.click();
		browser.sleep(500);
		this.selectBoxFagforening.click();
		this.Akademikerforbundet.click();
		browser.sleep(500);
		browser.actions().mouseMove({x:682, y:111}).click().perform();
		this.fradatoCalendar.click();
		this.fradatoDate.click();
		this.tildatoCalendar.click();
		this.tildatoDate.click();
		this.saveButton.click();
		browser.sleep(500);
		expect($('.toast-message').getText()).toContain('har startet for fagforening UHF');
		browser.sleep(2000);
		this.AkademikerforbundetUHF.click();
		browser.sleep(500);
		this.statusDropDown.click();
		this.forslagOption.click();
		this.saveButton.click();
		browser.sleep(500);
		expect((this.toastMessage1).getText()).toBe("Informasjon om kobling mellom forhandling og fagforening er lagret");
		browser.sleep(500);
		this.deleteIcon.click();
		this.Kopier.click();
		browser.sleep(4000);
		this.AkademikerforbundetUHF2.click();
		this.JaButton.click();
		browser.sleep(500);
		expect((this.dataSlettetMedHell).getText()).toBe("data slettet med hell");
		browser.sleep(5000);
	}
	
	//Enter Bruker
	this.enterBruker = function(){
		this.Administrasjon.click();
		browser.sleep(500);
		this.brukerOgFagforening.click();
		this.brukerSearchBox.sendKeys('AAAN');
		this.brukerSearchBox.sendKeys(protractor.Key.ENTER);
		this.brukerTypeAheadText.click();
		browser.sleep(500);
		this.fagforeningSelectBox.click();
		this.brukerRightShiftButton.click();
		browser.sleep(500);
		this.saveButton.click();
		browser.sleep(500);
		expect(this.textOppsettLagret.getText()).toBe("Oppsett lagret");
		
		this.valgtSelect.then(function(items){
			items.forEach(function(elt, i) {
				elt.getText().then(function(txt){
					if(txt.trim()=='Akademikernes fellesorganisasjon [AFK]'){
						var index = i+1;
						element(by.xpath('//span/b[text()="Valgt"]//following::option['+index+']')).click();
					}
				})
			})
		});
		
		browser.sleep(500);
		this.brukerLeftShiftButton.click();
		browser.sleep(500);
		element(by.buttonText('Lagre')).click();
		expect((this.textOppsettLagret).getText()).toBe("Oppsett lagret");
		browser.sleep(5000);
	}
	
};
	
module.exports = new home_page();

