import { test, expect } from '@playwright/test'

test('api get test', async ({ request }) => {


    const response = await request.get('https://reqres.in/api/users')
    console.log(await response.json())
    expect(await response.status()).toBe(200)
});