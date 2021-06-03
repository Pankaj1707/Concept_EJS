const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


const homePageContent ="this is home page content";
const aboutPageContent = "This is about page content";
const contactPageContent = "This is contact page content";


var posts =[];


app.get("/", function(req, res)
{
   res.render("home", {homePageContent:homePageContent, posts:posts})
});

app.get("/about", function(req, res)
{
   res.render("about", {aboutPageContent:aboutPageContent})
});

app.get("/contact", function(req, res)
{
   res.render("contact", {contactPageContent:contactPageContent})
});

app.get("/compose", function(req, res)
{
   res.render("compose")
});


app.post("/compose", function(req, res)
{
    var post = {
        newTitle : req.body.newTitle,
        newPost: req.body.newPost

    }

    posts.push(post);

    res.redirect("/");
    
})


app.get("/posts/:usertyped", function(req,res)
{
    posts.forEach(function(post)
    {
        if(_.lowerCase(post.newTitle)===_.lowerCase(req.params.usertyped))
        {
           res.render("post", {newTitle:post.newTitle, newPost:post.newPost})
        }
       
    })
    
})









app.listen("3000", function(){
    console.log("server is running at port 3000");
})