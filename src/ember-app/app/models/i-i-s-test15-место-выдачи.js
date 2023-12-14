import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МестоВыдачиMixin
} from '../mixins/regenerated/models/i-i-s-test15-место-выдачи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МестоВыдачиMixin, Validations, {
});

defineProjections(Model);

export default Model;
