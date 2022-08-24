
var myJSON;
var myJSON2;
var lstProductInCart;
var lstProduct;
var page_type = document.getElementById('hiddenfield').value;
var ProductInCart = {
    data: [],
    add: function (id,sl) {
        var item = {
            prod_id: id,
            prod_sl: sl,
        };
        this.data.push(item);
    },
};
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
    remove: function(id){
        for(var i=0;i<this.data.length; i++)
        {
                   
            if(this.data[i].prod_id == id)
            {
                this.data.splice(i,1);
                if(i!=this.data.length)
                {
                    for(var k=i;k<this.data.length;k++)
                    {
                        this.data[k].prod_id = "id"+k;
                    }
                }
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
       // console.log(Product.data.length);
        //var str0;
        var str = "";
               
        //  alert(lstProduct.data[3].prod_imageurl);
        for (var i = 0; i < lstProduct.data.length; i++) 
        {
            if(lstProduct.data[i].prod_type == page_type)
            {

                var price = Intl.NumberFormat('de-DE').format(lstProduct.data[i].prod_price);
                str += `<div class='product'>
                            <form class='imgbox' method='post' action='chitiet.aspx'>
                                <input type="hidden"  name="hiddenfield" value="${lstProduct.data[i].prod_id}"/>
                                <button><img src='${lstProduct.data[i].prod_imageurl}' /></button>
                            </form>
                            <div class='details'><div class='nameprod'>${lstProduct.data[i].prod_name}</div>
                       
                            <div class='price'>Giá:${price}</div> 
                            <div>
                                <form action='/UpdateProduct.aspx' method='post' class="updateprod">
                                <input type="hidden"  name="hiddenfield" value="${lstProduct.data[i].prod_id}"/>
                                <input type="submit" value="Sửa" style="display:none" class="btnEditProd" id="prod${i}"> 
                                <input type="button" value="Xóa" style="display:none" class="btnDelProd" id="del${i}" onclick="DelProd(${i})" data-id="${lstProduct.data[i].prod_id}">   
                                </form>    
                            </div>      
                                <form action='/XuLyAddToCart.aspx' method='post'>
                                    <button type='button' class="btnAddToCart" id="addtoCart${i}" onclick="AddCart(${i})">Thêm vào giỏ hàng</button>
                                </form> 
                            </div> 
                        </div>`;
            }
        }

        //  console.log(str);
        document.getElementById('lstprod').innerHTML = str;
        // document.getElementById('lstprod').childNodes[0].nodeValue = null;
        //     document.getElementById('lstprod').childNodes[0].nodeValue = str0;
        var i = Math.floor(Math.random() * lstProduct.data.length);   
        var price = Intl.NumberFormat('de-DE').format(lstProduct.data[i].prod_price);
        var str2 =   `<form class='imgbox' method='post' action='chitiet.aspx'>
                            <input type="hidden"  name="hiddenfield" value="${lstProduct.data[i].prod_id}"/>
                            <button><img src='${lstProduct.data[i].prod_imageurl}' /></button>
                        </form>
                        <div class='details'><div class='nameprod'>${lstProduct.data[i].prod_name}</div>
                        <div class='price'>Giá:${price}</div>     
                            <form action='/XuLyAddToCart.aspx' method='post'>
                                <button type='button' class="btnAddToCart" id="addtoCart${i}" onclick="AddCart(${i})">Thêm vào giỏ hàng</button>
                            </form> 
                        </div>`;  
                              
        document.getElementById('right-product').innerHTML = str2;
                
    }
}
function updat() {
    var set = document.getElementById('updat').innerHTML;
    var x = document.getElementsByClassName('btnEditProd');
    var y = document.getElementsByClassName('btnDelProd');
    
    // x[2].style.display = 'block';
    if(set == "Cập nhật")
    {       
        for(var i=0;i<x.length;i++)
        {           
            x[i].style.display = 'inline-block';
            y[i].style.display = 'inline-block';
        }
        document.getElementById('updat').innerHTML =  "Hủy cập nhật";
    }
    else
    {
        for(var i=0;i<x.length;i++)
        {            
            
            x[i].style.display = 'none';
            y[i].style.display = 'none';
        }
        document.getElementById('updat').innerHTML =  "Cập nhật";
    }
}
function AddCart(id) {
    var k=0;
    for(var i=0;i< Product.data.length ;i++)
    {
        
        if(Product.data[i].prod_id == "id"+id)
        {
            // console.log("1");
            for (var i = 0; i < ProductInCart.data.length; i++)
            {
                if(ProductInCart.data[i].prod_id == "id"+id)
                {
                    console.log(ProductInCart.data[i].prod_sl);
                    ProductInCart.update("id"+id,parseInt(ProductInCart.data[i].prod_sl) + 1);
                    myJSON2 = JSON.stringify(ProductInCart);
                    localStorage.setItem('ProductInCart', myJSON2);
                    alert("Đã tăng số lượng");
                    k=1;
                    
                }
           
            }
            if(k==0)
            {
                ProductInCart.add("id"+id,1);
                myJSON2 = JSON.stringify(ProductInCart);
                localStorage.setItem('ProductInCart', myJSON2);
                document.getElementById("slcart").innerHTML = ProductInCart.data.length;
                alert('Đã thêm vào giỏ!');
                break;
            }
        }
    }
    
}


function DelProd(id) {
            
    let _this = document.getElementById('del'+id);
    let data = _this.dataset;
    Product.remove(data.id);
    myJSON = JSON.stringify(Product);
            
    localStorage.setItem('Product', myJSON);


}

function clear() {
    localStorage.clear();
}

function loadProduct() {
    // clear();
    document.getElementById('lstprod').innerHTML = "";
    myJSON = localStorage.getItem('Product');
    myJSON2 = localStorage.getItem('ProductInCart');
    if(myJSON2 == null)
    {
    }
    else
    {
        lstProductInCart = JSON.parse(myJSON2);
        for (var i = 0; i < lstProductInCart.data.length; i++)
        {
            ProductInCart.add(lstProductInCart.data[i].prod_id,lstProductInCart.data[i].prod_sl);
        }
        document.getElementById("slcart").innerHTML = lstProductInCart.data.length;
    }
    if (myJSON == null) {
        var i = 0;
        for (i = 0; i < 5; i++) 
            Product.add("id" + i, "Giày Cao Gót" + i, (250000+i*10000).toString(), "img/"+(i+1)+".jpg","Giaycaogot");
        for (i = 5; i < 10; i++) 
            Product.add("id" + i, "Boots"+ i, (450000+i*10000).toString(), "img/"+(i+1)+".jpg","Boots");
        for (i = 10; i < 15; i++) 
            Product.add("id" + i, "Sneaker"+ i, (550000+i*10000).toString(), "img/"+(i+1)+".jpg","Sneaker");
        myJSON = JSON.stringify(Product);
        Product.data = [];
        localStorage.setItem('Product', myJSON);
    }         
    lstProduct = JSON.parse(myJSON);
    showProduct();
}

window.onload = loadProduct();

