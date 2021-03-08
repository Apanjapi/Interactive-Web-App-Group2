import {LowerNav} from '../comps/global/low-nav';
import {TopNav} from '../comps/global/top-nav';
import {SearchBar} from '../comps/global/search-bar';
import {ProductCard} from '../comps/global/product-card';
import {ArticleTop} from '../comps/article/top';
import {Article} from '../comps/article/article';
import {Image} from '../comps/article/article-img';
import {ArticlePreview} from '../comps/main-page/article-preview';

export default {
    title: "Components"
}

export const MyLowerNav = () => LowerNav;
export const MyTopNav = () => TopNav;
export const MySearchBar = () => SearchBar;
export const MyProductCard = () => ProductCard;
export const MyArticleTop = () => ArticleTop;
export const MyArticle = () => Article;
export const MyArticlePreview = () => Article;
export const MyImage = () => Image;