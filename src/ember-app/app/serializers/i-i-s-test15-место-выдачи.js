import { Serializer as МестоВыдачиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-место-выдачи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоВыдачиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
