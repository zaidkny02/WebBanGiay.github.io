
var myJSON;
var myJSON2;
var lstProductInCart;
var lstProduct;
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
    add: function (id, name, price, imageurl, type) {
        var item = {
            prod_id: id,
            prod_name: name,
            prod_price: price,
            prod_imageurl: imageurl,
            prod_type: type,
        };
        this.data.push(item);
    },
    update: function (id, name, price, imageurl, type) {
        for (var i = 0; i < this.data.length; i++) {

            if (this.data[i].prod_id == id) {
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
        if (document.getElementById('ValueHiddenField').value != "")
            for (var i = 0; i < lstProduct.data.length; i++) {

                if (lstProduct.data[i].prod_id == document.getElementById('ValueHiddenField').value) {
                    var price = Intl.NumberFormat('de-DE').format(lstProduct.data[i].prod_price);
                    var old = Intl.NumberFormat('de-DE').format(parseInt(lstProduct.data[i].prod_price)*2);
                    document.getElementById('imgAnh').src = lstProduct.data[i].prod_imageurl;
                    var str =   `<h2>${lstProduct.data[i].prod_name}</h2>
                        <p>Chất liệu cao cấp, bền đẹp theo thời gian. Thiết kế thời trang. 
                            Kiểu dáng phong cách. Độ bền cao. Dễ phối đồ.</p>
                        <div class='price'><p>Giá: ${price} &nbsp;<p class="old">${old}</p></p></div>  
                        
                        </br>
                        <h3>THÔNG TIN BẢO HÀNH</h2>
                         <p><i class="far fa-thumbs-up"></i> &nbsp;100% chính hãng</p>
                         <p><i class="fas fa-undo-alt"></i>&nbsp; 7 ngày đổi trả hàng dễ dàng</p>
                         <p><i class="fas fa-shield-alt"></i>&nbsp; Áp dụng chính sách bảo hành 6 tháng</p>
                            </br>
                            <form action='/XuLyAddToCart.aspx' method='post'>
                                <button type='button' class="btnAddToCart" id="addtoCart${i}" onclick="AddCart(${i})">Thêm vào giỏ hàng</button>
                            
                            </div>
                        </div>`;      
                                break;
                }
                
            }
        document.getElementById('chitiet').innerHTML = str; 


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



function clear() {
    localStorage.clear();
}

function loadProduct() {
    // clear();
    // document.getElementById('lstprod').innerHTML = "";
    myJSON = localStorage.getItem('Product');
    myJSON2 = localStorage.getItem('ProductInCart');
    if (myJSON2 == null) {
    }
    else {
        lstProductInCart = JSON.parse(myJSON2);
        document.getElementById("slcart").innerHTML = lstProductInCart.data.length;
    }
    lstProduct = JSON.parse(myJSON);
    showProduct();
}

window.onload = loadProduct();





