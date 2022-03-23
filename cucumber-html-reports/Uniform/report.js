$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Information.feature");
formatter.feature({
  "name": "Information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewInformation"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on the Add Information page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinfoTitle\u003e\" \"\u003cdescription\u003e\" \"\u003cmegaTag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "infoTitle",
        "description",
        "metaTag"
      ]
    },
    {
      "cells": [
        "mobile",
        "android mobile",
        "samsung"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "newstepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "newstepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and Information",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_catalog_and_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the Information page",
  "keyword": "Then "
});
formatter.match({
  "location": "newstepDefination.user_is_navigated_to_the_Information_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewInformation"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "newstepDefination.user_clicks_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Add Information page",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.user_is_on_the_Add_Information_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mobile\" \"android mobile\" \"\u003cmegaTag\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "newstepDefination.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_save_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@type\u003d\u0027submit\u0027]\"}\n  (Session info: chrome\u003d99.0.4844.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NN67RO91\u0027, ip: \u0027192.168.29.250\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\SURJAY~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50870}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f14c942b9febd72f7538544c592038cc\n*** Element info: {Using\u003dxpath, value\u003d//button[@type\u003d\u0027submit\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.newstepDefination.clicks_on_save_button(newstepDefination.java:91)\r\n\tat ✽.Clicks on save button(file:src/test/java/features/Information.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "newstepDefination.success_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/return.feature");
formatter.feature({
  "name": "Return",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewRecord"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on the Add Product Return",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003corder_ID\u003e\" \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003cemail\u003e\" \"\u003ctelephone\u003e\" \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "order_ID",
        "first_name",
        "last_name",
        "email",
        "telephone",
        "Product"
      ]
    },
    {
      "cells": [
        "222",
        "gojo",
        "satoro",
        "beta@gmail.com",
        "123456789",
        "FULL SLEEVS SWEAT SHIRT"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "newstepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "newstepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Sales and then Returns",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_Sales_and_then_Returns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "newstepDefination.user_is_navigated_to_the_Returns_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewRecord"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "newstepDefination.user_clicks_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Add Product Return",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.user_is_on_the_Add_Product_Return()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"222\" \"gojo\" \"satoro\" \"beta@gmail.com\" \"123456789\" \"FULL SLEEVS SWEAT SHIRT\"",
  "keyword": "When "
});
formatter.match({
  "location": "newstepDefination.user_enters(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "newstepDefination.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "newstepDefination.success_message_is_displayed()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[ Success: You have modified returns!]\u003e but was:\u003c[Success: You have modified returns!\n×]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefination.newstepDefination.success_message_is_displayed(newstepDefination.java:100)\r\n\tat ✽.Success message is displayed(file:src/test/java/features/return.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});