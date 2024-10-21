let server=require("express");
let app=server();
let port=1010;
app.listen(port,()=>{
  console.log("The Server is stated");
});
app.set("view engine","ejs");
app.get("/home",(req,resp)=>{
  resp.render("home.ejs");
});
// serving static files
let path=require("path");
app.use(server.static(path.join(__dirname,"/public")));

app.get("/about",(req,resp)=>{
  resp.render("about.ejs");
});

app.get("/time",(req,resp)=>{
 resp.render("time.ejs");
});
app.get("/login",(req,resp)=>{
  resp.render("login.ejs");
});

