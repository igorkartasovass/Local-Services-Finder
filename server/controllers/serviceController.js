const Service = require('../models/Service');

exports.getServices = async(req, res) => {
    try{
        const services = await Service.find();
        res.json(services);
    }catch(err) {
        res.status(500).json({message: err.mesaage});
    }
};

exports.createService = async (req, res) => {
    const { name, type, address, coordinates } = req.body ;

    const service = new Service({ name, type, address, coodrinates});

    try{
        const savedService = await service.save();
        res.status(201).json(savedService);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};