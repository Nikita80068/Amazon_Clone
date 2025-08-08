```javascript
import { test, expect } from '@playwright/test';

test('Test that the "Deliver to" address defaults to "India"', async ({ page }) => {
  await page.goto('/');
  const deliverToElement = await page.locator('.nav-address');
  await expect(deliverToElement).toContainText('India');
});
```