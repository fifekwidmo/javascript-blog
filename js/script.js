'use strict';
const titleClickHandler = function(event) {
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
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    let articleSelector = clickedElement.getAttribute('href');
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';
    for (let article of articles) {
        /* get the article id */
        // article = document.getElementsByClassName(optArticleSelector);
        const articleId = article.getAttribute('id');
        /* find the title element */
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        /* insert link into titleList */
        html = html + linkHTML;
    }
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();

function generateTags() {
    let allTags = {};
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
        /* find tags wrapper */
        const linkWrapper = article.querySelector(optArticleTagsSelector);
        /* make html variable with empty string */
        let html = '';
        /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
        for (let tag of articleTagsArray) {
            let htmlTags = '<li><a href="#tag-' + tag + '"> ' + tag + ' </a></li>';
            /* generate HTML of the link */
            /* add generated code to HTML variable */
            html = html + htmlTags;
            /* [NEW] check if this link is NOT already in allTags */
            if (!allTags[tag]) {
                /* [NEW] add tag to allTags object */
                allTags[tag] = 1;
            } else {
                allTags[tag]++;
            }
        }
        /* END LOOP: for each tag */
        linkWrapper.innerHTML = html;
        /* END LOOP: for every article: */
        /* [NEW] find list of tags in right column */
        const tagList = document.querySelector('.tags');

        /* [NEW] create variable for all links HTML code */
        let allTagsHTML = '';

        /* [NEW] START LOOP: for each tag in allTags: */
        for (let tag in allTags) {
            /* [NEW] generate code of a link and add it to allTagsHTML */
            allTagsHTML += tag + ' (' + allTags[tag] + ') ';
        }
        /* [NEW] END LOOP: for each tag in allTags: */

        /*[NEW] add HTML from allTagsHTML to tagList */
        tagList.innerHTML = allTagsHTML;
    }
}
generateTags();

function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const allTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let activeTagLink of allTagLinks) {
        /* remove class active */
        activeTagLink.classList.remove('active');
        /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const foundLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (const foundLink of foundLinks) {
        foundLink.classList.add('active');
        /* add class active */
        /* END LOOP: for each found tag link */
    }
    generateTitleLinks('[data-tags~="' + tag + '"]');
    /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags() {
    /* find all links to tags */
    const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let link of allLinksToTags) {
        /* add tagClickHandler as event listener for that link */
        link.addEventListener('click', tagClickHandler);
    }
    /* END LOOP: for each link */
}
addClickListenersToTags();

function generateAuthors() {
    const articles = document.querySelectorAll(optArticleSelector);
    for (const article of articles) {
        const linkWrapper = article.querySelector(optArticleAuthorSelector);
        let html = '';
        const articleAuthor = article.getAttribute('data-authors');
        let htmlAuthors = '<a href="#author-' + articleAuthor + '"> ' + articleAuthor + ' </a>';
        html = html + htmlAuthors;
        linkWrapper.innerHTML = html;
    }
}
generateAuthors();

function authorClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-', '');
    const allAuthorLinks = document.querySelectorAll('a.active[href^="#tauthor-"]');
    for (let activeAuthorLink of allAuthorLinks) {
        activeAuthorLink.classList.remove('active');
    }
    const foundLinks = document.querySelectorAll('a[href="' + href + '"]');
    for (const foundLink of foundLinks) {
        foundLink.classList.add('active');
    }
    generateTitleLinks('[data-authors~="' + author + '"]');
}

function addClickListenersToAuthors() {
    const allLinksToAuthors = document.querySelectorAll('a[href^="#author-"]');
    for (let link of allLinksToAuthors) {
        link.addEventListener('click', authorClickHandler);
    }
}
addClickListenersToAuthors();