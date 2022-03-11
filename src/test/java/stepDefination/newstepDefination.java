package stepDefination;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.newHooksClass;
import junit.framework.Assert;



public class newstepDefination {
	
	WebDriver driver = newHooksClass.driver;
	
	@Given("User is on the site")
	public void user_is_on_the_site() {
		driver.get("http://uniformm1.upskills.in/admin");
		driver.manage().window().maximize();
	}

	@When("User enters username and password")
	public void user_enters_username_and_password() {
	    
		driver.findElement(By.id("input-username")).sendKeys("admin");
		driver.findElement(By.id("input-password")).sendKeys("Admin@123");
	   
	}

	@When("Clicks on login")
	public void clicks_on_login() {
		driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
	    
	}

	@When("Clicks on Sales and then Returns")
	public void clicks_on_Sales_and_then_Returns() {
		driver.findElement(By.xpath("//i[@class='fa fa-shopping-cart fa-fw']")).click();
		driver.findElement(By.xpath("//*[@id='sale']/ul/li[3]")).click();
	        
	}

	@Then("User is navigated to the Returns page")
	public void user_is_navigated_to_the_Returns_page() {
		String actual = driver.getTitle();
		String expected="Product Returns";
		Assert.assertEquals(expected, actual);
	    
	}

	@Given("user clicks on the add new button")
	public void user_clicks_on_the_add_new_button() {
		driver.findElement(By.xpath("//i[@class='fa fa-plus']")).click();
	    
	}

	@Given("User is on the Add Product Return")
	public void user_is_on_the_Add_Product_Return() {
		
		String actual= driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
		Assert.assertEquals("Add Product Return", actual);
	}

	@When("User enters {string} {string} {string} {string} {string} {string}")
	public void user_enters(String order_ID, String first_name, String last_name, String email, String telephone, String Product) throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.id("input-order-id")).sendKeys(order_ID);
		Thread.sleep(2000);
	    driver.findElement(By.id("input-firstname")).sendKeys(first_name);
	    Thread.sleep(2000);
	    driver.findElement(By.id("input-lastname")).sendKeys(last_name);
	    Thread.sleep(2000);
	    driver.findElement(By.id("input-email")).sendKeys(email);
	    Thread.sleep(2000);
	    driver.findElement(By.id("input-telephone")).sendKeys(telephone);
	    Thread.sleep(2000);
	    driver.findElement(By.id("input-product")).sendKeys(Product);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id='tab-general']/fieldset[2]/div[1]/div/ul/li/a")).click();
	    Thread.sleep(2000);
	    
	    
	}

	@When("Clicks on save button")
	public void clicks_on_save_button() {
		
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	   
	}

	@Then("Success message is displayed")
	public void success_message_is_displayed() {
		
		String actual= driver.findElement(By.cssSelector("div.alert.alert-success")).getText();
		String expected=" Success: You have modified returns!";
	    Assert.assertEquals(expected, actual);
	    
	}

	@Given("User clicks  on the edit button")
	public void user_clicks_on_the_edit_button() {
		driver.findElement(By.xpath("//*[@id='form-return']/div/table/tbody/tr[1]/td[10]/a")).click();
	   
	}

	@When("User edits the information {string} {string} {string} {string} {string} {string}")
	public void user_edits_the_information(String order_ID, String first_name, String last_name, String email, String telephone, String Product) {
		WebElement element=driver.findElement(By.id("input-order-id"));
		element.clear();
		element=sendKeys(order_ID);
	    element=driver.findElement(By.id("input-firstname"));
	    element.clear();
	    element=sendKeys(first_name);
	    element=driver.findElement(By.id("input-lastname"));
	    element.clear();
	    element=sendKeys(last_name);
	    element=driver.findElement(By.id("input-email"));
	    element.clear();
	    element=sendKeys(email);
	    element=driver.findElement(By.id("input-telephone"));
	    element.clear();
	    element=sendKeys(telephone);
	    element=driver.findElement(By.id("input-product"));
	    element.clear();
	    element=sendKeys(Product);
	    
	}

	private WebElement sendKeys(String order_ID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Given("User selects one or multiple checkbox")
	public void user_selects_one_or_multiple_checkbox() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='form-return']/div/table/tbody/tr[2]/td[1]/input")).click();
	    Thread.sleep(2000);
	    
	}

	@When("User Clicks on the delete button and confirms")
	public void user_Clicks_on_the_delete_button_and_confirms() throws InterruptedException {
		  driver.findElement(By.xpath("//i[@class='fa fa-trash-o']")).click();
		   Thread.sleep(2000);
		   Alert alert= driver.switchTo().alert();
		   Thread.sleep(2000);
		   alert.accept();
	    
	}
	
	
	//INFORMATION module
	
	@When("Clicks on catalog and Information")
	public void clicks_on_catalog_and_Information() {
		
		driver.findElement(By.xpath("//i[@class='fa fa-tags fa-fw']")).click();
		driver.findElement(By.xpath("//*[@id='catalog']/ul/li[10]")).click();
	    
	}

	@Then("User is navigated to the Information page")
	public void user_is_navigated_to_the_Information_page() {
		
		String actual = driver.getTitle();
		String expected="Information";
		Assert.assertEquals(expected, actual);
	    
	}

	@Given("User is on the Add Information page")
	public void user_is_on_the_Add_Information_page() throws InterruptedException {
		
//		WebElement obj=driver.findElement(By.cssSelector("i.fa.fa-plus"));
//		obj.click();
		Thread.sleep(1000);
		
	    
	}

	@When("User enters {string} {string} {string}")
	public void user_enters(String infoTitle, String description, String metaTag) throws InterruptedException {
		
		
		driver.findElement(By.xpath("//input[@placeholder='Information Title']")).sendKeys(infoTitle);
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//div[@class='note-editable panel-body']")).sendKeys(description);
	    Thread.sleep(2000);
	    driver.findElement(By.id("input-meta-title1")).sendKeys(metaTag);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
		
	   
	}

	@When("User edits the information {string} {string} {string}")
	public void user_edits_the_information(String infoTitle, String description, String metaTag) {
		
		driver.findElement(By.xpath("//*[@id='form-information']/div/table/tbody/tr[3]/td[4]/a")).click();
		
		WebElement element=driver.findElement(By.id("input-title1"));
		element.clear();
		element=sendKeys(infoTitle);
	    element=driver.findElement(By.id("input-description1"));
	    element.clear();
	    element=sendKeys(description);
	    element=driver.findElement(By.id("input-meta-title1"));
	    element.clear();
	    element=sendKeys(metaTag);
	    driver.findElement(By.xpath("//button[@type='submit']")).click();
		
	    
	}

	@Then("Success message is displayed and edit is confirmed")
	public void success_message_is_displayed_and_edit_is_confirmed() {
		
		String actual= driver.findElement(By.cssSelector("div.alert.alert-success")).getText();
		String expected=" Success: You have modified returns!";
	    Assert.assertEquals(expected, actual);
	   
	}

	@Then("Success message is displayed and delete is confirmed")
	public void success_message_is_displayed_and_delete_is_confirmed() throws InterruptedException {
		
		driver.findElement(By.xpath("//*[@id='form-information']/div/table/tbody/tr[6]/td[1]/input")).click();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button']")).click();
		   Thread.sleep(2000);
		   Alert alert= driver.switchTo().alert();
		   Thread.sleep(2000);
		   alert.accept();
	    
		
		
	
	}




}
