require('dotenv').config()
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'mahesh487',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'R7sfpqUq6k6JMnQhdyEz',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://77b6d861e58b4c25c3583cf9548383dbab3ee9fa',
        browserstackLocal: true,
        accessibility: false,
        testObservabilityOptions: {
              buildName: "bstack-demo",
              projectName: "BrowserStack Sample",
              buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]'
            },
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      platformName: 'android',
    }
  }, {
    'bstack:options': {
      deviceName: 'Google Pixel 7 Pro',
      platformVersion: '13.0',
      platformName: 'android',
    } }, {
    'bstack:options': {
      deviceName: 'OnePlus 9',
      platformVersion: '11.0',
      platformName: 'android',
    }
  }],
  commonCapabilities: {
  'bstack:options': {
    debug: true,
    networkLogs: true,
    percy: false,
    percyCaptureMode: "auto"
  }
},
maxInstances: 10,
}