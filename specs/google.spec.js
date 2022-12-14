describe('Search Duckduckgo', () => {
	beforeEach(async () => {
		await page.goto('https://www.bing.com');
	});

	it('should be titled "Google"', async () => {
		//Google search
		await page.goto('https://www.duckduckgo.com');
		var element = await page.$('[name="q"]');
		await element.click();
		await element.type('Google');
		await Promise.all([
			page.keyboard.press('Enter'),
			page.waitForNavigation()
		]);
		var title = await page.title();
		expect(title).toEqual('Google at DuckDuckGo', 'Expected page title is incorrect!');
		const firstResult = await page.$('#r1-0 h2')
		await firstResult.click();
		await page.waitForTimeout(2000);
		var googleSerachField = await page.$('[name="q"]');
		await googleSerachField.click();
		await googleSerachField.type("Hello");
		await page.keyboard.press('Enter');
		await Promise.all([
			page.waitForNavigation()
		]);
		var googleSerachTitle = await page.title();
		expect(googleSerachTitle).toEqual('Hello - Google Search', 'Google -Expected page title is incorrect!');
		//Lambdatest sample app test
		await page.goto('https://lambdatest.github.io/sample-todo-app/');
		await page.waitForTimeout(5000);
		await page.click('body > div > div > div > ul > li:nth-child(1) > input');
		await page.click('body > div > div > div > ul > li:nth-child(2) > input');
		await page.click('body > div > div > div > ul > li:nth-child(3) > input');
		await page.click('body > div > div > div > ul > li:nth-child(4) > input');
		await page.click('body > div > div > div > ul > li:nth-child(5) > input');
		await page.type('#sampletodotext', 'Hypertest LambdaTest');
		await page.click('#addbutton');
		await page.click('body > div > div > div > ul > li:nth-child(6) > input');
		await page.type('#sampletodotext', 'Hypertest LambdaTest');
		await page.click('#addbutton');
		await page.click('body > div > div > div > ul > li:nth-child(7) > input');
	});
});
