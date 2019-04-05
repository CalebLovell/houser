module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get("db");

    await db
      .getHouses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => console.log(`controller getHouses ${err}`));
  },
  deleteHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    await db
      .deleteHouse(id)
      .then(res.status(200))
      .catch(err => console.log(`controller deleteHouse ${err}`));
  },
  getHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    await db
      .getHouse(id)
      .then(house => {
        res.status(200).send(house);
      })
      .catch(err => console.log(`controller getHouse ${err}`));
  },
  editHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    await db
        .editHouse(id)
        .then(house => {
          res.status(200).send(house);
        })
        .catch(err => console.log(`controller editHouse ${err}`));
  }
};
