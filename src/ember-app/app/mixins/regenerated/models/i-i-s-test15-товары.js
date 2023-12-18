import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТовара: DS.attr('number'),
  название: DS.attr('string'),
  ценаЗаЕд: DS.attr('decimal'),
  вНаличии: DS.hasMany('i-i-s-test15-в-наличии', { inverse: 'товары', async: false })
});

export let ValidationRules = {
  кодТовара: {
    descriptionKey: 'models.i-i-s-test15-товары.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test15-товары.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-test15-товары.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  вНаличии: {
    descriptionKey: 'models.i-i-s-test15-товары.validations.вНаличии.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-test15-товары', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    ценаЗаЕд: attr('Цена за ед', { index: 2 }),
    вНаличии: hasMany('i-i-s-test15-в-наличии', 'В наличии', {
      количество: attr('Количество', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      местоВыдачи: belongsTo('i-i-s-test15-место-выдачи', 'В наличии по адресу', {
        адрес: attr('В наличии по адресу', { index: 2 })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-test15-товары', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    ценаЗаЕд: attr('Цена за ед', { index: 2 })
  });
};
