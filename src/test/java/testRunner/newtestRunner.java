package testRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/test/java/features",
		glue={"stepDefination","hooks"},
		monochrome = true,
		//dryRun = true,
		tags={"@addNewInformation"},
		plugin = {"pretty"}
		)

public class newtestRunner {

}
