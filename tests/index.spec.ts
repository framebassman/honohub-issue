import { test, expect } from '@playwright/test';

test('check healthcheck', async ({ request }) => {
  const response = await request.get(`/healthcheck`);
  expect(await response.text()).toBe('ok');
});

test('check crm routes', async ({ request }) => {
  const response = await request.get(`/collections/todos`);
  expect(response.statusText()).toBe('OK');
  expect(await response.body()).toBeDefined()
});

