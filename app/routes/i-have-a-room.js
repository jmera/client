import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
      address: this.store.createRecord('address'),
      room: this.store.createRecord('room')
    });
  },
  actions: {
    submitForm: function() {
      var ctrl = this.controllerFor('i-have-a-room');
      // TODO do something with controller
      ctrl.get('user');
      return true;
    }
  },
  setupController(controller, model) {
    controller.setProperties(model);
  }
});
