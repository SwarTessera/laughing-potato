var Icon =require('../models/Icon');

exports.getIcon = function(req,res){
	res.render('select-grid', {icons:icons, title:' | Sign up'});
}