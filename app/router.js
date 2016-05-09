import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('i-have-a-room');
  this.route('how-it-works');
});

export default Router;
