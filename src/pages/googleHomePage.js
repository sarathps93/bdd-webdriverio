const searchbar = '.a4bIc > input[role="combobox"]';
const searchButton = '.UUbT9 input[name="btnK"]';

export const searchInGoogle = (keyword) => {
    $(searchbar).setValue(keyword);
    $(searchButton).click();
}