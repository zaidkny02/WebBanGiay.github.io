
var myJSON;
var myJSON2;
var lstProductInCart;
var lstProduct;
var Product = {
    data: [],
    add: function (id,name, price, imageurl,type) {
        var item = {
            prod_id: id,
            prod_name: name,
            prod_price: price,
            prod_imageurl: imageurl,
            prod_type: type,
        };
        this.data.push(item);
    },
    update: function (id,name,price,imageurl,type) {
        for(var i=0;i<this.data.length; i++)
        {
                   
            if(this.data[i].prod_id == id)
            {
                this.data[i].prod_name = name;
                this.data[i].prod_price = price;
                this.data[i].prod_imageurl = imageurl;
                this.data[i].prod_type = type;
                //dành cho xóa...this.data.splice(i,1);
                break;
            }
        }
    },
    
};
function showProduct() {
    if (lstProduct) {
        for (var i = 0; i < lstProduct.data.length; i++) {
            Product.add(lstProduct.data[i].prod_id, lstProduct.data[i].prod_name, lstProduct.data[i].prod_price, lstProduct.data[i].prod_imageurl, lstProduct.data[i].prod_type);
        }
        
        var str = "";
        if(document.getElementById('TypeHidden').value != "add")       
        for (var i = 0; i < lstProduct.data.length; i++) {
            if(lstProduct.data[i].prod_id == document.getElementById('TypeHidden').value)
            {
                document.getElementById('imgAnh').src = lstProduct.data[i].prod_imageurl;
                document.getElementById('txtPrice').value =  lstProduct.data[i].prod_price;
                document.getElementById('txtName').value = lstProduct.data[i].prod_name;
                document.getElementById('txtType').value = lstProduct.data[i].prod_type;
             //   console.log(document.getElementById("txtType").options.length);
              //  console.log(document.getElementById("txtType").options[0].text);
             /*  var optiondocument.getElementById("txtType").options.lengths = document.getElementById('txtType')[0].options;
                for (var i = 0; i < document.getElementById("txtType").options.length; i++) {
                    if (document.getElementById("txtType").options[i].text == lstProduct.data[i].prod_type) {
                        options[i].selected = true;
                    }
                }*/
            }
        }

        
                
    }
}

function Add() {
    var name = document.getElementById('txtName').value
    var price = document.getElementById('txtPrice').value;
    var type = document.getElementById('txtType').value;
    var b = document.getElementById('postFile').files[0].name;
    var url = "img/" + b;
    Product.add("id" + Product.data.length, name, price, url, type);
    myJSON = JSON.stringify(Product);
    localStorage.setItem('Product', myJSON);
    alert('Thêm thành công');
    //window.location = "UpdateProduct.aspx";
}

function Update() {
    var name = document.getElementById('txtName').value
    var price = document.getElementById('txtPrice').value;
    var type = document.getElementById('txtType').value;
    var b = document.getElementById('postFile').files[0].name;
    var url = "img/" + b;
    var id = document.getElementById('TypeHidden').value;
    Product.update(id, name, price, url, type);
    myJSON = JSON.stringify(Product);
    localStorage.setItem('Product', myJSON);
    alert('Sửa thành công');
}

function clear() {
    localStorage.clear();
}

function loadProduct() {
    // clear();
   // document.getElementById('lstprod').innerHTML = "";
    myJSON = localStorage.getItem('Product');
    myJSON2 = localStorage.getItem('ProductInCart');
    if(myJSON2 == null)
    {
    }
    else
    {
        lstProductInCart = JSON.parse(myJSON2);
        document.getElementById("slcart").innerHTML = lstProductInCart.data.length;
    }         
    lstProduct = JSON.parse(myJSON);
    showProduct();
}

window.onload = loadProduct();





function DoPreview() {
    //  var filename = document.getElementById('postFile').value;


    var img = document.getElementById('imgAnh');
    img.src = URL.createObjectURL(event.target.files[0]);
    //  img.src = filename;

}