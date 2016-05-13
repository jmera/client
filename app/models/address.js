import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  room: belongsTo('room'),

  line1: attr('string'),
  apt: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zipCode: attr('string')
});
