import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описание: DS.attr('string'),
  заказы: DS.belongsTo('i-i-s-test15-заказы', { inverse: null, async: false }),
  местоВыдачи: DS.belongsTo('i-i-s-test15-место-выдачи', { inverse: null, async: false })
});

export let ValidationRules = {
  описание: {
    descriptionKey: 'models.i-i-s-test15-оповещения.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-test15-оповещения.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  местоВыдачи: {
    descriptionKey: 'models.i-i-s-test15-оповещения.validations.местоВыдачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОповещенияE', 'i-i-s-test15-оповещения', {
    описание: attr('Описание', { index: 0 }),
    заказы: belongsTo('i-i-s-test15-заказы', 'Заказы', {
      кодЗаказа: attr('Код заказа', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'кодЗаказа' }),
    местоВыдачи: belongsTo('i-i-s-test15-место-выдачи', 'Место выдачи', {
      адрес: attr('Адрес', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('ОповещенияL', 'i-i-s-test15-оповещения', {
    описание: attr('Описание', { index: 0 }),
    заказы: belongsTo('i-i-s-test15-заказы', 'Код заказа', {
      кодЗаказа: attr('Код заказа', { index: 1 })
    }, { index: -1, hidden: true }),
    местоВыдачи: belongsTo('i-i-s-test15-место-выдачи', 'Адрес', {
      адрес: attr('Адрес', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
