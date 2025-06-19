import { test, expect } from '@playwright/test';

test('check healthcheck', async ({ request }) => {
  const response = await request.get(`/healthcheck`);
  expect(response.ok()).toBeTruthy();
});

test('check crm routes', async ({ request }) => {
  const response = await request.get(`/collections/todos`);
  expect(response.ok()).toBeTruthy();
});

