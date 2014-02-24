var fs = require("fs");

exports.get = function(req, res) {
    // Check for errors
    var errorText = null;
    if (req.query.error) {
        if (req.query.error == "filesize")
            errorText = "The file you uploaded exceeded the 5mb limit.";
        else if (req.query.error == "filetype")
            errorText = "The file you uploaded was not a PDF.";
    }

    // Check for success
    var successText = null;
    if (req.query.success) {
        successText = "Resume successfully uploaded!";
    }

    // Build and send out the data
    var data = {
        "title": "Resume Submission",
        "loggedIn": req.session.userId,
        "error": errorText,
        "success": successText
    }
    res.render("resume", data);
};

exports.post = function(req, res) {
    // Check for a valid file
    var file = req.files.resumeUpload;
    if (file.size > 1024 * 1024 * 5) {
        res.redirect("/resume?error=filesize");
        return;
    } 
    else if (file.type.indexOf("pdf") < 0) {
        res.redirect("/resume?error=filetype");
        return;
    }

    // Grab all of our params
    var firstName = escape(req.body.firstName).toLowerCase();
    var lastName = escape(req.body.lastName).toLowerCase();
    var emailId = escape(req.body.emailId).toLowerCase();
    var gradYear = req.body.gradYear;
    var filename = lastName + "-" + firstName +  "-" + emailId + ".pdf";
    
    // Construct the new path
    var newPath = __dirname + "/../uploads/resumes/" + req.body.gradYear + "/" + filename;

    // Move the file to the correct resting place
    fs.rename(file.path, newPath, function (err) {
        req.method = "get"; 
        res.redirect("/resume?success=true");
    });
    
};
