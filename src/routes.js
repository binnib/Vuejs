import QuoteComponents from './components/Quote.vue';
import ProductComponents from './components/Product.vue';
import HomeComponent from './components/Home.vue';

export const routes = [
    {
        path: '/',
        component: QuoteComponents
    },
    {
        path: '/product/:id',
        component: ProductComponents
    },
    {
        path: '/home',
        component: HomeComponent
    }
];
