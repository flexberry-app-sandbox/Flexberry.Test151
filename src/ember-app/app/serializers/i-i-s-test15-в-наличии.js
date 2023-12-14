import { Serializer as ВНаличииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-в-наличии';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВНаличииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
