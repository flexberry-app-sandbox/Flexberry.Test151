import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номер: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-test15-товары', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-test15-заказы', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-test15-состав-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-test15-состав-заказа.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-test15-состав-заказа.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-test15-состав-заказа.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-test15-состав-заказа', {
    номер: attr('Номер', { index: 0 }),
    товары: belongsTo('i-i-s-test15-товары', 'Товары', {
      название: attr('Название', { index: 2, hidden: true }),
      ценаЗаЕд: attr('Цена за единицу', { index: 3 })
    }, { index: 1, displayMemberPath: 'название' }),
    количество: attr('Количество', { index: 4 })
  });
};
