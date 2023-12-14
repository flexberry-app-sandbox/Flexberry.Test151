import { Serializer as ПродавецSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-продавец';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПродавецSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
