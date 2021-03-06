const database = require('../models');

class CategoryController {

    /**
     * POST /category
     */
     static async create(req, res) {
        const { Name } = req.body;
        

            try {
                const insert_one = await database.Category.create({ Name: Name });
                return res.status(200).json(insert_one);
            } catch (error) {
                return res.status(500).json(error.message);
            }
    }
    /**
     * GET /category/:id
     */
    static async read(req, res) {
        try {
            const read = await database.Category.findAll({
                order: [
                  ["id", "DESC"],
                ],
              });
            return res.status(200).json(read);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /category/:id
     */
    static async delete(req, res) {
        const { id } = req.params;
        try {
            const readone = await database.Category.destroy({where: { id: id }});
            return res.status(200).json(readone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CategoryController;