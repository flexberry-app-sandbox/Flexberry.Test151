import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test15-состав-заказа', 'Unit | Serializer | i-i-s-test15-состав-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test15-состав-заказа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test15-статусы',

    'model:i-i-s-test15-в-наличии',
    'model:i-i-s-test15-заказы',
    'model:i-i-s-test15-контрагент',
    'model:i-i-s-test15-место-выдачи',
    'model:i-i-s-test15-оповещения',
    'model:i-i-s-test15-продавец',
    'model:i-i-s-test15-состав-заказа',
    'model:i-i-s-test15-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
