import {LowerNav} from '../comps/global/low-nav';
import {TopNav} from '../comps/global/top-nav';
import {SearchBar} from '../comps/global/search-bar';
import {SearchBar} from '../comps/global/search-bar';


import {ArticleTop} from '../comps/article/top';
import {Article} from '../comps/article/article';
import {Image} from '../comps/article/article-img';

export default {
    title: "Components"
}

export const MyLowerNav = () => LowerNav;
export const MyTopNav = () => TopNav;
export const MySearchBar = () => SearchBar;
export const MyArticleTop = () => ArticleTop;
export const MyArticle = () => Article;
export const MyImage = () => Image;