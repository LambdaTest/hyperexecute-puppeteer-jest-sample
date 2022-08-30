describe('Search Duckduckgo', () => {
	beforeEach(async () => {
		await page.goto('https://www.bing.com');
	});

	it('should be titled "Google"', async () => {
		let text = 'Google';
		await page.goto('https://www.duckduckgo.com');
		await page.waitForTimeout(10000);
		var element = await page.$('[name="q"]');
		await page.waitForTimeout(10000);
		await element.click();
		await page.waitForTimeout(10000);
		await element.type(text);
		await page.waitForTimeout(10000);
		await Promise.all([
			page.keyboard.press('Enter'),
			page.waitForNavigation()
		]);
		var title = await page.title();
		try {
			expect(title).toEqual(text + ' at DuckDuckGo', 'Expected page title is incorrect!');
			await page.waitForTimeout(20000);
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'passed', remark: 'assertion passed' }
				})}`
			);
		} catch (e) {
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'failed', remark: e.name }
				})}`
			);
		}
	});
});
