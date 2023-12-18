import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.создание.caption'),
          title: i18n.t('forms.application.sitemap.создание.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.создание.справочники.caption'),
            title: i18n.t('forms.application.sitemap.создание.справочники.title'),
            children: [{
              link: 'i-i-s-test15-место-выдачи-l',
              caption: i18n.t('forms.application.sitemap.создание.справочники.i-i-s-test15-место-выдачи-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.справочники.i-i-s-test15-место-выдачи-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-test15-товары-l',
              caption: i18n.t('forms.application.sitemap.создание.справочники.i-i-s-test15-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.справочники.i-i-s-test15-товары-l.title'),
              icon: 'suitcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.создание.оповещение.caption'),
            title: i18n.t('forms.application.sitemap.создание.оповещение.title'),
            children: [{
              link: 'i-i-s-test15-оповещения-l',
              caption: i18n.t('forms.application.sitemap.создание.оповещение.i-i-s-test15-оповещения-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.оповещение.i-i-s-test15-оповещения-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.создание.оформление-заказа.caption'),
            title: i18n.t('forms.application.sitemap.создание.оформление-заказа.title'),
            children: [{
              link: 'i-i-s-test15-контрагент-l',
              caption: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-контрагент-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-test15-продавец-l',
              caption: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-продавец-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-продавец-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-test15-заказы-l',
              caption: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-заказы-l.caption'),
              title: i18n.t('forms.application.sitemap.создание.оформление-заказа.i-i-s-test15-заказы-l.title'),
              icon: 'file',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})