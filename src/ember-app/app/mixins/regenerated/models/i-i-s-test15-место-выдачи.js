import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-test15-место-выдачи.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоВыдачиE', 'i-i-s-test15-место-выдачи', {
    адрес: attr('Адрес', { index: 0 })
  });

  modelClass.defineProjection('МестоВыдачиL', 'i-i-s-test15-место-выдачи', {
    адрес: attr('Адрес', { index: 0 })
  });
};
