import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navbar-bottom', 'Integration | Component | navbar bottom', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{navbar-bottom}}`);

  // TODO assert text I have/need room, How it works is here

  // Template block usage:
  this.render(hbs`
    {{#navbar-bottom}}
      template block text
    {{/navbar-bottom}}
  `);

  // assert contains template block text
  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});
