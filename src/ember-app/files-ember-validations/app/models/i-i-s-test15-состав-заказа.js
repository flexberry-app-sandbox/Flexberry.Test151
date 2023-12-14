import {
  defineNamespace,
  defineProjections,
  Model as СоставЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-test15-состав-заказа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставЗаказаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
