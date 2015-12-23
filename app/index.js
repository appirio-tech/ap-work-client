const scripts    = document.getElementsByTagName('script');
const src        = scripts[scripts.length - 1].getAttribute('src');
const publicPath = src.substr(0, src.lastIndexOf('/') + 1);

__webpack_public_path__ = publicPath

require('zepto/zepto')
require('angular')
require('angular-resource/angular-resource')
require('angular-sanitize/angular-sanitize')
require('angular-ui-router')
require('angular-scroll/angular-scroll')

require('auth0-angular/build/auth0-angular')
require('angular-storage')
require('angular-jwt')
require('ngReact')

window.classNames = require('classnames')
window.React = require('react')
window.AutosizeInput = require('react-input-autosize')
window.moment = require('moment')
window.Select = require('react-select')

require('./app.module')
require('./app-config')
require('./app-run')
require('./scripts/messaging.controller')
require('./scripts/timeline.controller')
require('./scripts/submissions-pages.controller')
require('./scripts/submit-work-page.controller')
require('./scripts/403.controller')
require('./scripts/customer/customer-projects.controller')
require('./scripts/customer/project-details.controller')
require('./scripts/copilot/copilot-projects.controller')
require('./scripts/copilot/copilot-project-details.controller')
require('./scripts/copilot/open-projects.controller')
require('./scripts/copilot/status-reports.controller')
require('./scripts/copilot/status-report-details.controller')
require('./scripts/login-reg/sso-callback.controller')
require('./scripts/login-reg/sso-login.controller')

require('appirio-tech-ng-file-upload/dist/main')
require('appirio-tech-ng-timeline/dist/main')
require('appirio-tech-ng-auth/dist/main')
require('appirio-tech-ng-submit-work/dist/main')
require('appirio-tech-ng-api-services/dist/main')
require('appirio-tech-ng-api-services/dist/main')
require('appirio-tech-ng-optimist/dist/main')
require('appirio-tech-ng-submissions/dist/main')
require('appirio-tech-ng-status-report/dist/main')
require('appirio-tech-ng-work-layout/dist/main')

require('appirio-tech-ng-projects')
require('appirio-tech-ng-messaging')
require('appirio-tech-ng-login-reg')

require('./styles/main')
require('./styles/manage')
require('./styles/messaging')
require('./styles/copilot')
require('./styles/404')
require('./styles/submissions')
require('./styles/submit-work')

require('appirio-tech-ng-timeline/dist/main.css')
require('appirio-tech-ng-submissions/dist/main.css')
require('appirio-tech-ng-work-layout/dist/main.css')
require('appirio-tech-ng-submit-work/dist/main.css')
require('appirio-tech-ng-status-report/dist/main.css')
require('appirio-tech-ng-file-upload/dist/main.css')
require('react-select/dist/react-select.css')

