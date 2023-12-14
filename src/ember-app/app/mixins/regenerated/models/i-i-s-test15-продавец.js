import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодПродавца: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test15-продавец.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодПродавца: {
    descriptionKey: 'models.i-i-s-test15-продавец.validations.кодПродавца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-test15-продавец.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-test15-продавец.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродавецE', 'i-i-s-test15-продавец', {
    кодПродавца: attr('Код продавца', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 })
  });

  modelClass.defineProjection('ПродавецL', 'i-i-s-test15-продавец', {
    кодПродавца: attr('Код продавца', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 })
  });
};
