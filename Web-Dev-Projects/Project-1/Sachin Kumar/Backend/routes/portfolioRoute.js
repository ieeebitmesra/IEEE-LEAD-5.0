const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Education } = require('../models/portfolioModel');
const { User } = require('../models/userModel');
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        // const educations = await Education.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            // education: educations
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

//Update Intro
router.post("/update-intro" , async (req,res) =>{
    try {
        const intro =await Intro.findOneAndUpdate(
            { _id: req.body._id},
            req.body,
            { new: true },
        );
        res.status(200).send({
            data:intro,
            success : true,
            message : "Intro Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
} );

//About Update
router.post("/update-about" , async (req,res) =>{
    try {
        const about =await About.findOneAndUpdate(
            { _id: req.body._id},
            req.body,
            { new: true }
        );
        res.status(200).send({
            data:about,
            success : true,
            message : "About Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
} );

//Add Experience
router.post("/add-experience" , async (req,res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data:experience,
            success: true,
            message:"Experience Added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update Experience
router.post("/update-experience" , async (req,res) => {
    try {
        console.log(req.body);
        
        const experience = await Experience.findOneAndUpdate(
            { _id : req.body._id },
            req.body,
            { new : true}
        );
        res.status(200).send({
            data : experience,
            success:true,
            message:"Experience Updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete Experience
router.post("/delete-experience" , async (req,res) => {
    try {
        console.log(req.body._id);
         
        const experience = await Experience.findOneAndDelete(
            { _id : req.body._id },
        );
        res.status(200).send({
            data : experience,
            success:true, 
            message:"Experience Deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error); 
    }
});


//Add Project
router.post("/add-project" , async (req,res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data:project,
            success: true,
            message:"Project Added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update Project
router.post("/update-project" , async (req,res) => {
    try {
        if (!req.body._id) {
            return res.status(400).send({
                success: false,
                message: "Project ID is required."
            });
        } 
        const project = await Project.findOneAndUpdate(
            { _id : req.body._id },
            req.body,
            { new : true}
        );
        res.status(200).send({
            data : project,
            success:true,
            message:"Project Updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete Project
router.post("/delete-project" , async (req,res) => {
    try {
        if (!req.body._id) {
            return res.status(400).send({
                success: false,
                message: "Project ID is required."
            });
        } 
        console.log(req.body,"FFFF");
        
        const project = await Project.findOneAndDelete(
            { _id : req.body._id },
        );
        res.status(200).send({
            data : project,
            success:true,
            message:"Project Deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update Contact
router.post("/update-contact" , async (req,res) =>{
    try {
        const contact =await Contact.findOneAndUpdate(
            { _id: req.body._id},
            req.body,
            { new: true },
        );
        res.status(200).send({
            data:contact,
            success : true,
            message : "Contact Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
} );


//admin login
router.post("/admin-login",async (req,res) =>{
    try {
        const user = await User.findOne({ username: req.body.username , password : req.body.password  });
        user.password = "";
        if (user) {
            res.status(200).send({
                data:user,
                success:true,
                message:"Login Successfully",
            });
        } else {
            res.status(200).send({
                data:user,
                success:false,
                message:"Invalid username or Password",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;
