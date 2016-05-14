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

  visitorsAllowed:boolean
  petsAllowed:boolean
  sharedLivingRoom:boolean
  sharedBathroom:boolean
  sharedKitchen:boolean
  resides:boolean
  other::string
  rentAmount:string
  visitorPolicy:string

  NOTE: there has to be a more efficient way to store
        all these boolean attributes // TODO
*/
export default Model.extend({
  address: belongsTo('address'),
  user: belongsTo('user'),

  other:            attr('string'),
  petsAllowed:      attr('boolean'),
  resides:          attr('boolean'),
  sharedBathroom:   attr('boolean'),
  sharedKitchen:    attr('boolean'),
  sharedLivingRoom: attr('boolean'),
  visitorsAllowed:  attr('boolean'),
  visitorPolicy:    attr('string'),

  rentAmount:       attr('string'),
  rentType:         attr('number'),

  bathroom:         attr('boolean'),
  bed:              attr('boolean'),
  cable:            attr('boolean'),
  closet:           attr('boolean'),
  drawer:           attr('boolean'),
  electricity:      attr('boolean'),
  furnished:        attr('boolean'),
  mirror:           attr('boolean'),
  nightDesk:        attr('boolean'),
  radio:            attr('boolean'),
  rug:              attr('boolean'),
  tv:               attr('boolean'),
  wifi:             attr('boolean')
});
