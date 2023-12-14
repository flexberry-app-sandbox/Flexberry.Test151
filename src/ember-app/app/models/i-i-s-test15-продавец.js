import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПродавецMixin
} from '../mixins/regenerated/models/i-i-s-test15-продавец';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПродавецMixin, Validations, {
});

defineProjections(Model);

export default Model;
