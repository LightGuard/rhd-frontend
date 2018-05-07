import RHDPAlert from './rhdp-alert';
import DPCategoryList from './dp-category-list/dp-category-list';
import DPCategory from './dp-category-list/dp-category';
import DPCategoryItemList from './dp-category-list/dp-category-item-list';
import DPCategoryItem from './dp-category-list/dp-category-item';
import DPProductShortTeaser from './dp-category-list/dp-product-short-teaser';

export default class RHDApp {
    a = new RHDPAlert();
    b = new DPCategoryList();
    c = new DPCategory();
    d = new DPCategoryItemList();
    e = new DPCategoryItem();
    f = new DPProductShortTeaser();
}