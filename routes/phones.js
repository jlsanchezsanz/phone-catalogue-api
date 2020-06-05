const phonesRoutes = (app, fs) => {
  const dataPath = './data/phones.json';

  app.get('/phones', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = phonesRoutes;
