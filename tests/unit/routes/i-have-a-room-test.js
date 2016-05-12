import { moduleFor, test } from 'ember-qunit';

moduleFor('route:i-have-a-room', 'Unit | Route | i have a room', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it has submitForm action', function(assert) {
  let actions = this.subject().actions;
  assert.ok(actions.submitForm);
});
