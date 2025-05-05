const users = require('../models/Users');
class UsersControllers {
    async listAll(_req,res){
        let result = await users.findAll()
        !result.validated
        ?res.status(404).json({sucess:false, error: result.error})
        :res.status(200).json({sucess:true, values: result.values})
    }

    async listOne(req, res) { // Adicionando listOne
        let result = await users.findById(req.params.id);
        result.validated
            ? res.status(200).json({ success: true, values: result.values })
            : res.status(404).json({ success: false, error: result.error });
    }
}
module.exports = new UsersControllers();