var Icon =require('../models/Icon');

exports.getUpload = function(req,res){
	res.render('icon-upload', {title:'Upload Icons | '});
}

exports.postUpload = function(req,res){
	var icon = new Icon ({iconId: req.body.iconId, name: req.body.name, picture: req.body.iconUrl});
    icon.save();
    res.render('icon-upload', {title:'Upload Icons | '});
}