
const Role = require('../models/Role');
require('../config/database');
const data = require('../assets/workflow/roles');

Role.create(data);




