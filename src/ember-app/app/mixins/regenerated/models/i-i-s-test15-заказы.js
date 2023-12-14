import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  статус: DS.attr('i-i-s-test15-статусы'),
  контрагент: DS.belongsTo('i-i-s-test15-контрагент', { inverse: null, async: false }),
  продавец: DS.belongsTo('i-i-s-test15-продавец', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-test15-состав-заказа', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продавец: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.продавец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-test15-заказы.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-test15-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    продавец: belongsTo('i-i-s-test15-продавец', 'Продавец', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    контрагент: belongsTo('i-i-s-test15-контрагент', 'Контрагент', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-test15-состав-заказа', 'Состав заказа', {
      номер: attr('Номер', { index: 0 }),
      товары: belongsTo('i-i-s-test15-товары', 'Товары', {
        название: attr('Название', { index: 2, hidden: true }),
        ценаЗаЕд: attr('Цена за единицу', { index: 3 })
      }, { index: 1, displayMemberPath: 'название' }),
      количество: attr('Количество', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-test15-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    продавец: belongsTo('i-i-s-test15-продавец', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    контрагент: belongsTo('i-i-s-test15-контрагент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
