import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test15-оповещения', 'Unit | Model | i-i-s-test15-оповещения', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
