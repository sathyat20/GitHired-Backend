class BaseController {
  constructor(model) {
    this.model = model;
  }

  baseMethod = (req, res) => {
    return res.send("This is my base controller");
  };

  getAll = async (req, res) => {
    const output = await this.model.findAll();

    return res.json({ success: true, data: output });
  };

  getOne = async (req, res) => {
    const {id} = req.params
    const output = await this.model.findByPk(id);
    if(!output) {
      return res.status(404).json({success: false, msg: "User not found."})
    }
    return res.json({ success: true, data: output });
  };

}

module.exports = BaseController