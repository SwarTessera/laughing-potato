var Icon =require('../models/Icon');

exports.getUpload = function(req,res){
  res.render('icon-upload', {title:' | Upload Icons'});
}

exports.getIcon = function(req,res){
	Icon.find(function(err,icons){
		res.render('select-grid', {icons:icons, title:' | Sign up'});
	});
}