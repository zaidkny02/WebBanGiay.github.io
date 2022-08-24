
var myJSON;
var myJSON2;
var lstProductInCart;
var lstProduct;
var tongtien = 0;
var ProductInCart = {
    data: [],
    add: function (id,sl) {
        var item = {
            prod_id: id,
            prod_sl: sl,
        };
        this.data.push(item);
    },
    remove: function(id){
  
                this.data.splice(id,1);

        
    },
    update: function (id,sl) {
        for(var i=0;i<this.data.length; i++)
        {
                   
            if(this.data[i].prod_id == id)
            {
                this.data[i].prod_sl = sl;
                //dành cho xóa...this.data.splice(i,1);
                break;
            }
        }
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
    
};

function showProduct() {
    //  console.log(Product.data.length);
    //var str0;
    var str = "";
               
    //  alert(lstProduct.data[3].prod_imageurl);
    for (var i = 0; i < lstProductInCart.data.length; i++)
        for(var j=0;j < lstProduct.data.length;j++)
            if(lstProductInCart.data[i].prod_id == lstProduct.data[j].prod_id)
            {
                tongtien += parseInt(lstProduct.data[j].prod_price)*parseInt(lstProductInCart.data[i].prod_sl);
                var price = Intl.NumberFormat('de-DE').format(lstProduct.data[j].prod_price);                  
                str += `<div class='product'>                        
                        <div><img src='${lstProduct.data[j].prod_imageurl}' /></div>
                        <br><br>
                        <div class="ttproduct">
                        <table>
                            <tr>
                                <td>Tên:</td>
                                <td id="name${i}">${lstProduct.data[j].prod_name}</td>
                            </tr>
                            <tr>
                                <td>Số lượng:</td>
                                <td><input type="number"id="sl${i}"onchange="change(${i})" min="1" value="${ProductInCart.data[i].prod_sl}"/></td>
                                <td><input type="button"  onclick="tang(${i})" value="tăng"/></td>
                                <td><input type="button"  onclick="giam(${i})" value="giảm"/></td>
                                    </tr>
                            <tr>
                                <td>Size:</td>
                                <td><input type="text" id="size${i}" value="40"/></td>
                            </tr>
                            <tr>
                                <td>Đơn giá:</td>
                                <td id="price${i}" >${price}</td>
                            </tr>                     
                        </table>
                        </div>
                        <div><input type="button" value="Xóa" id="btn${ProductInCart.data[i].prod_id}" onclick="del(${i})"/> </div>
                        </div>`;
                       
            }
        document.getElementById('lstprod').innerHTML = str;
        
        document.getElementById('tongtien').innerHTML = "Tổng tiền: " + Intl.NumberFormat('de-DE').format(tongtien);
                
}
function tang(id) {
    var a = "sl"+id;
    console.log(a);
    var sl = parseInt(document.getElementById(a).value) + 1 ;
    document.getElementById(a).value = sl;
    change(id);
    
}
function giam(id) {
    var a = "sl"+id;
    console.log(a);
    var sl = parseInt(document.getElementById(a).value) - 1 ;
    document.getElementById(a).value = sl;
    change(id);
}
function change(id) {
    var k;
    for(var i=0;i<lstProduct.data.length;i++)
        if(ProductInCart.data[id].prod_id == lstProduct.data[i].prod_id)
        {
            tongtien -= parseInt(ProductInCart.data[id].prod_sl)*parseInt(lstProduct.data[i].prod_price);
            k=i;
            break;
        }
   
    tongtien +=  parseInt(lstProduct.data[k].prod_price)*parseInt(document.getElementById('sl'+id).value);
    ProductInCart.update(ProductInCart.data[id].prod_id,document.getElementById('sl'+id).value);
    myJSON2 = JSON.stringify(ProductInCart);
    localStorage.setItem('ProductInCart', myJSON2);
    document.getElementById('tongtien').innerHTML = "Tổng tiền: " + Intl.NumberFormat('de-DE').format(tongtien);
}
function del(id) {
    
    // console.log("1");
    for(var i=0;i<lstProduct.data.length;i++)
        if(ProductInCart.data[id].prod_id == lstProduct.data[i].prod_id)
        {
            tongtien -= parseInt(ProductInCart.data[id].prod_sl)*parseInt(lstProduct.data[i].prod_price);
            break;
        }          
            ProductInCart.remove(id);
            myJSON2 = JSON.stringify(ProductInCart);
            localStorage.setItem('ProductInCart', myJSON2);
            document.getElementById("slcart").innerHTML = ProductInCart.data.length;
            document.getElementById('tongtien').innerHTML = "Tổng tiền: " + Intl.NumberFormat('de-DE').format(tongtien);
            window.location = "GioHang.aspx"
}
    
function thanhtoan() {
    ProductInCart.data = [];
    myJSON2 = JSON.stringify(ProductInCart);
    localStorage.setItem('ProductInCart', myJSON2);
    document.getElementById("slcart").innerHTML = ProductInCart.data.length;
    for (var i = 0; i < lstProductInCart.data.length; i++)
    {
        document.getElementById('ValueHiddenField').value += document.getElementById('name'+i).innerHTML +"," ;
        document.getElementById('ValueHiddenField').value += document.getElementById('sl'+i).value + ",";
        document.getElementById('ValueHiddenField').value += document.getElementById('size'+i).value + ",";
        var price = document.getElementById('price'+i).innerHTML.replace('.', '');
        document.getElementById('ValueHiddenField').value += price + ",";
    }
    document.getElementById('ValueHiddenField').value = document.getElementById('ValueHiddenField').value.slice(0,-1);
    console.log(document.getElementById('ValueHiddenField').value);
   // window.location = "GioHang.aspx"    
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
    }         
    lstProduct = JSON.parse(myJSON);
    showProduct();
}

window.onload = loadProduct();

