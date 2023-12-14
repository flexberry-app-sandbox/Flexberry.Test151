import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВНаличииMixin
} from '../mixins/regenerated/models/i-i-s-test15-в-наличии';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВНаличииMixin, Validations, {
});

defineProjections(Model);

export default Model;
