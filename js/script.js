const titleClickHandler = function(event) {
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();


    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    // links.classList.remove('active');
    /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;
    clickedElement.classList.add('active');
    console.log('clickedElement (with plus): ' + clickedElement);
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    let articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}