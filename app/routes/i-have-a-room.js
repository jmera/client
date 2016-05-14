import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      room: this.store.createRecord('room'),
      user: this.store.createRecord('user'),
      address: this.store.createRecord('address')
    });
  },
  actions: {
    submitForm: function() {
      var controller = this.controller;
      var room = controller.get('room');
      room.set('user', controller.get('user'));
      room.set('address', controller.get('address'));
      var self = this;
      room.save().then(function() {
        alert("Success!");
        self.transitionTo('/');
      }, function() {
        alert("There was a problem completing your request.");
        self.transitionTo('/');
      });
    }
  },
  setupController(controller, model) {
    controller.setProperties(model);
  }
});
