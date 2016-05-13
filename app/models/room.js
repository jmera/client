import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

// We have room, user, address
/*

  user has many rooms
  room belongs to user => room references user

  room has address
  address belongs to room => address references room
*/

/*
  Room
  ==Relationships==
  user: The user that submitted this room

  ==Attributes==
  furnished:boolean
  bed:boolean
  closet:boolean
  bathroom:boolean
  rug:boolean
  tv:boolean
  nightDesk:boolean
  wifi:boolean
  radio:boolean
  drawer:boolean
  cable:boolean
  electricity:boolean
  mirror:boolean
  rentType:integer

  NOTE: there has to be a more efficient way to store
        all these boolean attributes // TODO
*/
export default Model.extend({
  user: belongsTo('user'),
  address: belongsTo('address'),

  visitorPolicy: attr('string'),
  rentType: attr('integer'),
  furnished: attr('boolean'),
  bed: attr('boolean'),
  closet: attr('boolean'),
  bathroom: attr('boolean'),
  rug: attr('boolean'),
  tv: attr('boolean'),
  nightDesk: attr('boolean'),
  wifi: attr('boolean'),
  radio: attr('boolean'),
  drawer: attr('boolean'),
  cable: attr('boolean'),
  electricity: attr('boolean'),
  mirror: attr('boolean')
});
