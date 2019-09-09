const path = require('path');
require('dotenv/config');
const fs = require('fs').promises;
const clientAssetsDir = path.join(__dirname, '..', 'assets', `${process.env.CLIENT}`.toString());
const modelDir = path.join(__dirname, '..', 'modules');

const getClientAssetsDirFiles = async () => {
  return await fs.readdir(clientAssetsDir);
};



console.log(modelDir);