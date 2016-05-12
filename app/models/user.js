import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  rooms: hasMany('room'),

  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  phone: attr('string')
});
