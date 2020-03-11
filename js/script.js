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

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /* [DONE] remove contents of titleList */
    let titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);

    function clearMessages() {
        titleList.innerHTML = '';
    }

    /* for each article */
    let articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles) {
        /* get the article id */
        article = document.getElementsByClassName(optArticleSelector);
        let articleId = article.getAttribute('id');
        console.log(articleId);
        /* find the title element */
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */
        const linkHTML = '<li><a href="# ' + articleId + '"><span> ' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into titleList */
    }


}

generateTitleLinks();