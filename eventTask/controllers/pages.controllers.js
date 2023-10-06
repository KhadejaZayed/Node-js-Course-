function showHome(req,res){
    res.render('pages/index.ejs');
}

function showContact(req,res){
    res.render('pages/contact.ejs');
}


module.exports={
    showHome,showContact
}
