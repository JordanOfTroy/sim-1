module.exports = {

    getTheInventory: (req, res) => {
        // console.log('HOLY COW IT WORKED!!!')
        const db = req.app.get('db')
        db.get_inventory()
        .then(inventory => {
            res.status(200).send(inventory)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_item([id])
        .then(inventory => {
            res.status(200).send(inventory)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('SHH! The gnomes are sleeping.')
        })
    },

    addItem: (req, res) => {
        let {imgURL, pName, pPrice} = req.body
        const db = req.app.get('db')
        db.add_to_inventory({imgURL, pName, pPrice})
            .then(inventory => {
                res.status(200).send(inventory)
            })
            .catch(err => {
                res.status(500).send(err)
            })

        // res.status(200).send()
        console.log(pName)

    },

    updateProduct: (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {pName, pPrice, imgURL, id} = req.body
        db.update([pName, pPrice, imgURL, id])
        .then(inventory => {
            res.status(200).send(inventory)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })

    
    }




}