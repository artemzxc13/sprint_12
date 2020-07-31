const fs = require('fs').promises;

const users = ({ ...object }) => {
  fs.readFile(object.dataPath, { encoding: 'utf8' })
    .then((data) => {
      if (!object.req) {
        return object.res.send(JSON.parse(data));
      }
      const parsenData = JSON.parse(data);

      const userId = (id) => parsenData.find((user) => id === user._id);
      const user = userId(object.req.params.id);
      if (user) {
        return object.res.send(user);
      }
      return object.res.status(404).send({
        message: ' Нет пользователя с таким id',
      });
    })
    .catch(() =>
      object.res.status(500).send({ message: 'Ошибка чтения файла' })
    );
};

module.exports = users;
