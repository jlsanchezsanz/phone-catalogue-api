const phonesRoutes = (app, fs) => {
  const dataPath = './data/phones.json';

  app.get('/phones', (_, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(JSON.parse(data));
    });
  });
};

module.exports = phonesRoutes;
