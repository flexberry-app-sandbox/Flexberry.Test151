import { Serializer as ОповещенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-оповещения';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОповещенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
