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
    revisionData: {
      type: 'git-commit'
    },
    's3-index': {
      region: 'us-east-1',
      allowOverwrite: true
    },
    s3: {
      region: 'us-east-1'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'staging') {
    ENV['s3-index'].bucket = 'staging.rentirooms.com';
    ENV.s3.bucket = 'staging.rentirooms.com';
  }

  if (deployTarget === 'production') {
    ENV['s3-index'].bucket = 'rentirooms.com';
    ENV.s3.bucket = 'rentirooms.com';
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
