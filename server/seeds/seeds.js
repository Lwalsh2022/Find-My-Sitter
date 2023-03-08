const db = require('../config/connection');
const { Users } = require('../models');

const usersData = require('./usersData.json');

db.once('open', async () => {
  // clean database
  await Users.deleteMany({});

  // bulk create each model
  const Users = await Parents.insertMany(usersData);

  console.log('all done!');
  process.exit(0);
});
