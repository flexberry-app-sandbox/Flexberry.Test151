import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest15ЗаказыLForm from './forms/i-i-s-test15-заказы-l';
import IISTest15КонтрагентLForm from './forms/i-i-s-test15-контрагент-l';
import IISTest15МестоВыдачиLForm from './forms/i-i-s-test15-место-выдачи-l';
import IISTest15ОповещенияLForm from './forms/i-i-s-test15-оповещения-l';
import IISTest15ПродавецLForm from './forms/i-i-s-test15-продавец-l';
import IISTest15ТоварыLForm from './forms/i-i-s-test15-товары-l';
import IISTest15ЗаказыEForm from './forms/i-i-s-test15-заказы-e';
import IISTest15КонтрагентEForm from './forms/i-i-s-test15-контрагент-e';
import IISTest15МестоВыдачиEForm from './forms/i-i-s-test15-место-выдачи-e';
import IISTest15ОповещенияEForm from './forms/i-i-s-test15-оповещения-e';
import IISTest15ПродавецEForm from './forms/i-i-s-test15-продавец-e';
import IISTest15ТоварыEForm from './forms/i-i-s-test15-товары-e';
import IISTest15ВНаличииModel from './models/i-i-s-test15-в-наличии';
import IISTest15ЗаказыModel from './models/i-i-s-test15-заказы';
import IISTest15КонтрагентModel from './models/i-i-s-test15-контрагент';
import IISTest15МестоВыдачиModel from './models/i-i-s-test15-место-выдачи';
import IISTest15ОповещенияModel from './models/i-i-s-test15-оповещения';
import IISTest15ПродавецModel from './models/i-i-s-test15-продавец';
import IISTest15СоставЗаказаModel from './models/i-i-s-test15-состав-заказа';
import IISTest15ТоварыModel from './models/i-i-s-test15-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test15-в-наличии': IISTest15ВНаличииModel,
    'i-i-s-test15-заказы': IISTest15ЗаказыModel,
    'i-i-s-test15-контрагент': IISTest15КонтрагентModel,
    'i-i-s-test15-место-выдачи': IISTest15МестоВыдачиModel,
    'i-i-s-test15-оповещения': IISTest15ОповещенияModel,
    'i-i-s-test15-продавец': IISTest15ПродавецModel,
    'i-i-s-test15-состав-заказа': IISTest15СоставЗаказаModel,
    'i-i-s-test15-товары': IISTest15ТоварыModel
  },

  'application-name': 'Test15',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test15',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test15',
          title: 'Test15'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        создание: {
          caption: 'Создание',
          title: 'Создание',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-test15-место-выдачи-l': {
              caption: 'Место выдачи',
              title: 'Место выдачи'
            },
            'i-i-s-test15-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          оповещение: {
            caption: 'Оповещение',
            title: 'Оповещение',
            'i-i-s-test15-оповещения-l': {
              caption: 'Оповещения',
              title: 'Оповещения'
            }
          },
          'оформление-заказа': {
            caption: 'Оформление Заказа',
            title: 'Оформление Заказа',
            'i-i-s-test15-контрагент-l': {
              caption: 'Контрагент',
              title: 'Контрагент'
            },
            'i-i-s-test15-продавец-l': {
              caption: 'Продавец',
              title: 'Продавец'
            },
            'i-i-s-test15-заказы-l': {
              caption: 'Заказы',
              title: 'Заказы'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test15-заказы-l': IISTest15ЗаказыLForm,
    'i-i-s-test15-контрагент-l': IISTest15КонтрагентLForm,
    'i-i-s-test15-место-выдачи-l': IISTest15МестоВыдачиLForm,
    'i-i-s-test15-оповещения-l': IISTest15ОповещенияLForm,
    'i-i-s-test15-продавец-l': IISTest15ПродавецLForm,
    'i-i-s-test15-товары-l': IISTest15ТоварыLForm,
    'i-i-s-test15-заказы-e': IISTest15ЗаказыEForm,
    'i-i-s-test15-контрагент-e': IISTest15КонтрагентEForm,
    'i-i-s-test15-место-выдачи-e': IISTest15МестоВыдачиEForm,
    'i-i-s-test15-оповещения-e': IISTest15ОповещенияEForm,
    'i-i-s-test15-продавец-e': IISTest15ПродавецEForm,
    'i-i-s-test15-товары-e': IISTest15ТоварыEForm
  },

});

export default translations;
