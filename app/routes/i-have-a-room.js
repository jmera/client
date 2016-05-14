import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      room: this.store.createRecord('room', {
        furnished: true,
        other: 'Hot potatoe',
        rentAmount: '150.00'
      }),
      user: this.store.createRecord('user', {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        phoneNumber: '231-000-9999'
      }),
      address: this.store.createRecord('address', {
        line1: '100 Wood Rd',
        apt: '1',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      })
    });
  },
  actions: {
    submitForm: function() {
      var controller = this.controller;
      var room = controller.get('room');
      room.set('user', controller.get('user'));
      room.set('address', controller.get('address'));
      console.log(room.serialize());
    }
  },
  setupController(controller, model) {
    controller.setProperties(model);
  }
});
