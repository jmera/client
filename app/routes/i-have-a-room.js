import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      room: this.store.createRecord('room', {
        furnished: true,
        bed: true,
        rug: true,
        mirror: true,
        nightDesk: false,
        tv: false,
        drawer: true,
        closet: true,
        cable: false,
        bathroom: true,
        wifi: false,
        electricity: true,
        radio: true,
        visitorsAllowed: true,
        petsAllowed: true,
        sharedLivingRoom: true,
        sharedBathroom: true,
        sharedKitchen: true,
        resides: true,
        rentType: 1,
        other: 'Hot potatoe',
        rentAmount: '150.00',
        visitorPolicy: 'Only immediate family'
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
      room.save();
    }
  },
  setupController(controller, model) {
    controller.setProperties(model);
  }
});
