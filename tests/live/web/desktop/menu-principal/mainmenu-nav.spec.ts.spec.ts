import {test, expect} from '@playwright/test';

test('mainmenu-nav.spec.ts', async ({page}) => {

        await page.goto('https://www.retraitespopulaires.ch/');
        await page.getByTestId('uc-accept-all-button').click();
        await page.getByLabel('Navigation principale').getByRole('link', { name: 'Clientèle professionnelle' }).click();
        await page.getByLabel('Navigation principale').getByRole('link', { name: 'Location' }).click();
        await page.getByLabel('Navigation principale').getByRole('link', { name: 'Clientèle privée' }).click();
});