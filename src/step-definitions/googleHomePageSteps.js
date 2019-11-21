import { Given, When, Then } from 'cucumber';
import { searchInGoogle } from '../pages/googleHomePage';

Given('I launch the url {string}', (url) => {
    browser.url(url);
});

When('I search for the keyword {string}', (keyword) => {
    searchInGoogle(keyword);
});

Then('I see the results', () => {
    return true;
})
