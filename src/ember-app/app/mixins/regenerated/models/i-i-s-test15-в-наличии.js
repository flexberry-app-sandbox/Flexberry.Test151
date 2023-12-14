import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-test15-товары', { inverse: 'вНаличии', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test15-в-наличии.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-test15-в-наличии.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-test15-в-наличии.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВНаличииE', 'i-i-s-test15-в-наличии', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
