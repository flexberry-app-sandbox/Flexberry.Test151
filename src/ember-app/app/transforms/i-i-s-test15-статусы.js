import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-test15-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.Test15.Статусы'
});
