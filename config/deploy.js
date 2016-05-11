/* jshint node: true */
var VALID_DEPLOY_TARGETS = [ 'staging', 'production' ];

module.exports = function(deployTarget) {
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  var ENV = {
    build: {
      environment: deployTarget
    },
    redis: {
      allowOverwrite: true,
      keyPrefix: 'client:index',

    },
    revisionData: {
      type: 'git-commit'
    },
    s3: {
      prefix: 'client',
      region: 'us-east-1'
    },
    'ssh-tunnel': {
      username: "ec2-user",
      host: "ec2-52-32-128-36.us-west-2.compute.amazonaws.com",
      dstPort: 6379,
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'staging') {
    ENV['ssh-tunnel'].dstHost = "api-staging.zhlz3v.0001.usw2.cache.amazonaws.com";
    // ENV.redis.url = 'redis://api-staging.zhlz3v.0001.usw2.cache.amazonaws.com:6739';
    ENV.s3.bucket = 'staging.rentirooms.com';
  }

  if (deployTarget === 'production') {
    ENV.s3.bucket = 'production.rentirooms.com';
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
