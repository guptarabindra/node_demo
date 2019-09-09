
const Action = require('../models/Action');
require('../config/database');
const data = require('../assets/workflow/actions');

Action.create(data);




