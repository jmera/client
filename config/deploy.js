/* jshint node: true */
var VALID_DEPLOY_TARGETS = [ 'development', 'staging', 'production' ];

module.exports = function(deployTarget) {
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  var ENV = {
    build: {
      environment: deployTarget
    },
    'redis': {
      allowOverwrite: true,
      keyPrefix: 'client:index'
    },
    'revision-data': {
      type: 'git-commit'
    },
    s3: {
      prefix: 'client',
      region: 'us-east-1'
    },
    'ssh-tunnel': {
      username: "ec2-user",
      host: "ec2-52-38-146-9.us-west-2.compute.amazonaws.com",
      dstPort: 6379,
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    // TODO right now this doesn't seem to be the right config to deploy
    // index.html to local redis store
    ENV.plugins = ['build', 'redis', 'revision-data', 'display-revisions', 'redis'];
    ENV['redis'].url = 'redis://localhost:6379/';
  }

  if (deployTarget === 'staging') {
    ENV.s3.bucket = 'staging.rentirooms.com';
    ENV['ssh-tunnel'].dstHost = "staging.zhlz3v.0001.usw2.cache.amazonaws.com";
  }

  if (deployTarget === 'production') {
    ENV.s3.bucket = 'rentirooms.com';
    ENV['ssh-tunnel'].dstHost = "production.zhlz3v.0001.usw2.cache.amazonaws.com";
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
