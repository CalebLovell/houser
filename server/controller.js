module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    const houses = db.getHouses();

    console.log('working but not xd')
    return res.status(200).send(houses);
  }
};
