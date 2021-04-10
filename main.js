//to prevent all content from showing on website at once, we set the tab functionality in JS

//grab all tab items and tab content items - icons that we click on


//there's more than 1 tabItem so we use .querySelectorAll
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//we need an event list, for when we clicjk on a tab item. It's like a nodelist, like an array, so we will lop through it

//Select tab content item. selectItem takes (e) event parameter

function selectItem(e) {
    removeBorder();//call the function first as it removes border before all 3 gets se;ected upon clicking each of the tabs. Then, go create the removeBorder function//
    removeShow();
   
    //add border to current tab and access particular item we're clicking by using This
    this.classList.add('tab-border');
    //Grab content item from DOM
    
    const tabContentItem = document.querySelector(`#${this.id}-content`); //use backticks as it is Dynamic. `#${this.id}-content` matches the selected id to the corresponding id content

    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    //loop through the tabItems again
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

//NOW GO BACK TO CSS TO HIDE TAB 2 / TAB 3 CONTENTS FROM SHOWING ALL AT ONCE 