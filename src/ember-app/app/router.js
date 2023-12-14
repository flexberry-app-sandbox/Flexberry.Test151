import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test15-заказы-l');
  this.route('i-i-s-test15-заказы-e',
  { path: 'i-i-s-test15-заказы-e/:id' });
  this.route('i-i-s-test15-заказы-e.new',
  { path: 'i-i-s-test15-заказы-e/new' });
  this.route('i-i-s-test15-контрагент-l');
  this.route('i-i-s-test15-контрагент-e',
  { path: 'i-i-s-test15-контрагент-e/:id' });
  this.route('i-i-s-test15-контрагент-e.new',
  { path: 'i-i-s-test15-контрагент-e/new' });
  this.route('i-i-s-test15-место-выдачи-l');
  this.route('i-i-s-test15-место-выдачи-e',
  { path: 'i-i-s-test15-место-выдачи-e/:id' });
  this.route('i-i-s-test15-место-выдачи-e.new',
  { path: 'i-i-s-test15-место-выдачи-e/new' });
  this.route('i-i-s-test15-оповещения-l');
  this.route('i-i-s-test15-оповещения-e',
  { path: 'i-i-s-test15-оповещения-e/:id' });
  this.route('i-i-s-test15-оповещения-e.new',
  { path: 'i-i-s-test15-оповещения-e/new' });
  this.route('i-i-s-test15-продавец-l');
  this.route('i-i-s-test15-продавец-e',
  { path: 'i-i-s-test15-продавец-e/:id' });
  this.route('i-i-s-test15-продавец-e.new',
  { path: 'i-i-s-test15-продавец-e/new' });
  this.route('i-i-s-test15-товары-l');
  this.route('i-i-s-test15-товары-e',
  { path: 'i-i-s-test15-товары-e/:id' });
  this.route('i-i-s-test15-товары-e.new',
  { path: 'i-i-s-test15-товары-e/new' });
});

export default Router;
