
const tabItems        = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select  tab Content item

function selectItem(e){
    
     removeBorder();
     removeShow();
    // add border to current tab

    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add show class
    tabContentItem.classList.add('show');

    /// Grab content item from show
}

function  removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'))
}
function  removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'))
}
// listen  for  tab click
tabItems.forEach(item=>item.addEventListener('click',selectItem))




