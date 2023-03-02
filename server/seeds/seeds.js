const db = require('../config/connection');
const { Parents, Sitters, Reviews } = require('../models');

const parentsData = require('./parentsData.json');
const sittersData = require('./sittersData.json');
const reviewsData = require('./reviewsData.json');

db.once('open', async () => {
  // clean database
  await Parents.deleteMany({});
  await Sitters.deleteMany({});
  await Reviews.deleteMany({});

  // bulk create each model
  const parents = await Parents.insertMany(parentsData);
  const sitters = await Sitters.insertMany(sittersData);
  const reviews = await Reviews.insertMany(reviewsData);


  console.log('all done!');
  process.exit(0);
});
