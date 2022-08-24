<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdateProduct.aspx.cs" Inherits="UpdateProduct" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cập nhật sản phẩm</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="css/updateproduct.css" rel="stylesheet" type="text/css" />
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
        <form runat="server" enctype="multipart/form-data" method="post" action="UpdateProduct.aspx">  
        <div class='product'>                        
                        <div><asp:Image ID="imgAnh" runat="server" src="http://goo.gl/ijai22" /></div>
                        
                        <div id="upd">
                        <table>
                            <tr>
                                <td>Tên sản phẩm:</td>
                                <td><input type="text" id="txtName" required="required" /></td>
                            </tr>
                            <tr>
                                <td>Nhập loại:</td>
                                <td><input type="text" id="txtType" required="required" /></td>
                            </tr>
                            <tr>
                                <td>Nhập giá:</td>
                                <td><input type="text" id="txtPrice" required="required"/></td>
                            </tr>
                            <tr>
                                <td>Ảnh minh họa:</td>
                                <td><input id="postFile" required="required" name="postFile" type="file" onchange="DoPreview()"/></td>                          
                            </tr>       
                            <tr>
                                <td><asp:Button runat="server" ID="addbtn" Text="Thêm mới" OnClientClick="Add()" /></td>
                                
                                <td><asp:Button runat="server" style="visibility:hidden;" ID="updatebtn" Text="Cập nhật" OnClientClick="Update()" /></td>
                            </tr>          
                        </table>
                        </div>
                       
                            <asp:hiddenfield id="TypeHidden" value="add" runat="server"/>
                            <asp:hiddenfield id="ValueHiddenField" value="" runat="server"/>
                        
                 </div>
            </form>
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
<script type="text/javascript" src="js/updateproduct.js"></script>
</html>
