require("chromedriver");
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://www.baidu.com");//打开百度首页
driver.findElement({id:"kw"}).sendKeys("chenwei");
driver.findElement({id:"su"}).click();
//driver.quit();

driver.get("http://cn.bing.com/");
driver.findElement({css:"#sb_form_q"}).sendKeys("陈薇");
driver.findElement({css:"#sb_form_go"}).click();