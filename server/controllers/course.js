var Course =require('../models/Course');


exports.getIndex = function(req,res){
	Course.find(function(err,courses){
            res.render('index',{courseList:courses});
        });
	
}

exports.getAddCourse = function(req,res){
	res.render('add-course');
}

exports.postAddCourse = function(req,res){
        if(req.body.featuredName)
            var featured = true;
        //Create a new course
        var course = new Course ({name: req.body.courseName, featured: req.body.checkFeatured, published: req.body.pDate, time: req.body.timing, batch: req.body.courseBatch});
        //The Magic!
        course.save(function(err){
                Course.find(function(err,courses){
            res.render('view-course',{courses:courses});
        });
        });

    }

exports.getViewCourses = function(req,res){

        Course.find({sort:{published:-1}},function(err,courses){
            res.render('view-course',{courses:courses});
        });

    }

exports.postDeleteCourse = function(req,res){
        Course.remove({ _id:req.params.id }, function (err) {
            Course.find(function(err,courses){
            res.render('view-course',{courses:courses});
        });
    });
}