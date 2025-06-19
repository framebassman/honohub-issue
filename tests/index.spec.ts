import { test, expect } from '@playwright/test';

test('check healthcheck', async ({ request }) => {
  const response = await request.get(`/healthcheck`);
  expect(await response.text()).toBe('OK');
});

test('check crm routes', async ({ request }) => {
  const response = await request.get(`/collections/todos`);
  expect(await response.text()).toBe('OK');
});

