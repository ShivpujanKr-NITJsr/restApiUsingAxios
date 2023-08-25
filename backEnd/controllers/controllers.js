const Product=require('../models/product')


exports.getting=(req,res,next)=>{
    Product.findAll()
        .then(result=>{
            res.json(result)
        }).catch(err=>{
            console.log(err)
        })
}

exports.updating=(req,res,next)=>{
    const id=req.params.id;

    const pitemname=req.body.itemname;
    const udescription=req.body.description;
    const uprice=req.body.price;
    const uq=req.body.quantity;

    Product.findByPk(id)
    .then(product=>{
      product.itemname=pitemname;
      product.description=udescription;
      product.price=uprice;
      product.quantity=uq;
      return product.save();
    }).then(result=>{
      console.log('Updated product')
      res.json(result);
    })
    .catch(err=>console.log(err))
  
}

exports.deleting=(req,res,next)=>{
    const id=req.params.id;

    Product.findByPk(id)
    .then(product=>{
        return product.destroy();
      })
      .then(result=>{
        console.log('Destroyed product')
        res.json(result)
      })
      .catch(err=>console.log(err))
}

exports.posting=(req,res,next)=>{
    
    // const id=req.params.id;
    const pitemname=req.body.itemname;
    const udescription=req.body.description;
    const uprice=req.body.price;
    const uq=req.body.quantity;

    Product.create(
        {
            itemname:pitemname,
            description:udescription,
            price:uprice,
            quantity:uq
        }
    ).then(result=>{
        console.log('expense created')
        res.json(result);
    }).catch(err=>console.log(err))

}