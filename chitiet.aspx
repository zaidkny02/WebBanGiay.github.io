﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="chitiet.aspx.cs" Inherits="chitiet" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Chi tiết sản phẩm</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="css/chitiet.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="fontawesome/css/all.css"/>
</head>
<body>
    <header style="background-image:url('img/background.jpg')">
        <div id="logo">
            <a href="TrangChu.html"><img src="img/logo.jpg" /></a>
        </div>
        <div id="right-header">
            <a href="UpdateProduct.aspx">Thêm sản phẩm</a>
            <a href="DangNhap.aspx">Đăng nhập</a>
            <a href="DangKy.aspx">Đăng ký</a>
            <a href="GioHang.aspx" id="giohang"> Giỏ hàng <i class="fas fa-shopping-cart"></i></a>(<a id="slcart">0</a>)
        </div>
        
    </header>

    <nav>
        <ul>
            <li><a href="TrangChu.html">Trang chủ</a></li>
            <li><a href="Sneaker.html">Sneaker</a></li>
            <li><a href="Giaycaogot.html">Giày cao gót</a></li>
            <li><a href="Boots.html">Boots</a></li>
        </ul>
    </nav>
    <div id="content">  
        <div class='product'>                        
                        <div id="image"><asp:Image ID="imgAnh" runat="server" src="http://goo.gl/ijai22" /></div>
                        
                        <div id="chitiet">
                            
                        </div>
                       
                        

                            <form runat="server">
                            <asp:hiddenfield id="ValueHiddenField" value="" runat="server"/>
                                </form>
                      
                       
        </div>
    </div>
    <footer>
        <div id="about">
            <h3>Giới thiệu</h3>
            <p>Địa Chỉ: 96 Định Công</p>
            <p>Telephone : + 18001008</p>
            <p>Mail: 1108@gmail.com</p>
        </div>

        <div id="timeopen">
            <h3>Thời gian mở cửa</h3>
            <p>Thứ 2 - Thứ 6:8h-19h</p>
            <p>Thứ 7 - CN:7h-20h</p>
            <p>Phục vụ cả ngày lễ tết</p>
        </div>
        
    </footer>
      
</body>
<script type="text/javascript" src="js/chitiet.js"></script>
</html>
