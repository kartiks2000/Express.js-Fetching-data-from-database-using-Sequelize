// Importing class and fetch data to display

const productmodel = require('../models/product');

exports.addproduct = (req,res,next)=>{
    res.render('addproduct');
}


exports.products = (req,res,next)=>{ 
    productmodel.findAll()
    .then((result)=>{
        console.log("************************---worked----****************************************");
        console.log(result);
        console.log("*************---worked----*****************************************");
        // res.render('products',{prod:result[0]});
    })
    .catch((err)=>{
        console.log(err);
    });
    // console.log(productsname);
    
}

exports.editing = (req,res,next)=>{ 
    const productsname = productmodel.fetchAll();
    // console.log(productsname);
    res.render('products',{'products':productsname});
}

