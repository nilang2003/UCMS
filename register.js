const express = require("express");
const router = express.Router();
const register = require("../models/Registeration");

// Route 1: Registration
router.post("/registeration", async (req, res) => {
  try {
    let User = await register.findOne({ email: req.body.email });
    if (User) {
      return res.status(400).json({ message: "User already exists" });
    }
    User = await register.create({
      usertype: req.body.usertype,
      fullname: req.body.fullname,
      institute: req.body.institute,
      department: req.body.department,
      email: req.body.email,
      idno: req.body.idno,
      input_club_name: req.body.input_club_name,
      input_club_desc:req.body.input_club_desc,
      club_logo_input: req.body.club_logo_input,
      faculty_id:req.body.faculty_id,
      gender: req.body.gender,
      age: req.body.age,
      password: req.body.password,
    });
    res.json({ User, message: "Registeration Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Some Error Occured" });
  }
});

router.get("/login", async (req, res) => {
  try {
    const {email, password} = req.body;
    let User = await register.findOne({email: req.body.email});
    if(User.password === password) {
      res.json({email, message: "Login Successful"});
    }
    else {
      res.json({message: "Invalid Credentials"});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Some error occured"});
  }
})
module.exports = router;
