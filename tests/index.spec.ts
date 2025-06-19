import { test, expect } from '@playwright/test';

test('should work', async ({ request }) => {
  const response = await request.get(`/healthcheck`);
  expect(response.ok()).toBeTruthy();
})
