const fs = require('fs').promises;

const cards = ({ ...object }) => {
  fs.readFile(object.dataPath, { encoding: 'utf8' })
    .then((data) => {
      return object.res.send(JSON.parse(data));
    })
    .catch(() =>
      object.res.status(500).send({ message: ' Ошибка чтения файла ' })
    );
};

module.exports = cards;
