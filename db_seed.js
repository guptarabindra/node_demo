
require('./config/database');

const Role = require('./models/Role');
const Action = require('./models/Action');
const State = require('./models/State');
const Request = require('./models/Request');
const RequestHistory = require('./models/RequestHistory');
const Transition = require('./models/Transition');

const role_data = require('./assets/workflow/roles');
const action_data = require('./assets/workflow/actions');
const state_data = require('./assets/workflow/states');
const request_data = require('./assets/workflow/requests');
const request_history_data = require('./assets/workflow/request_history');
const transition_data = require('./assets/workflow/transitions');

Role.collection.deleteMany();
Action.collection.deleteMany();
State.collection.deleteMany();
Request.collection.deleteMany();
RequestHistory.collection.deleteMany();
Transition.collection.deleteMany();

Role.create(role_data);
Action.create(action_data);
State.create(state_data);
Request.create(request_data);
RequestHistory.create(request_history_data);
Transition.create(transition_data);
console.log("seed successfully..");




