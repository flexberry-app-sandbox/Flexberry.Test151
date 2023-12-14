import {
  defineNamespace,
  defineProjections,
  Model as ЗаказыMixin
} from '../mixins/regenerated/models/i-i-s-test15-заказы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
