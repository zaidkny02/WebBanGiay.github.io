<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DangKy.aspx.cs" Inherits="DangKy" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="css/login.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <header style="background-image:url('img/background.jpg')">
        <div id="logo">
            <a href="TrangChu.html"><img src="img/logo.jpg" /></a>
        </div>
        <div id="right-header">
            <a href="DangNhap.aspx">Đăng nhập</a>
            <a href="DangKy.aspx">Đăng ký</a>
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
       <form id="form1" runat="server">
            <table>
               <tr>
                   <td colspan="2" align="center"><h1><b>ĐĂNG KÝ</b></h1></td>
               </tr>
		       <tr>
			        <td>Họ và Tên:</td>
			        <td><input type="text" runat="server" required="required" id="txtHovaTen"/></td>
		       </tr>
		            <tr>
			        <td>Ngày sinh:</td>
			        <td><input type="date"  id="txtDate" required="required" runat="server"/></td>
                        
		       </tr>
               <tr>
                    <td>Tên tài khoản:</td>
                    <td><input type="text" runat="server" required="required" id="txtTaiKhoan"/></td>
               </tr>
               <tr>
                    <td>Mật khẩu:</td>
                    <td><input type="password" runat="server" required="required" id="txtPass"/></td>                
               </tr>
               <tr>
			        <td colspan="2" align="center">
				        
                        <asp:Button id="btn" runat="server" Text="Đăng ký" OnClick="dangky_Click" />
                         &nbsp;
                        <input type="button" id="reset" name="reset"  value="Hủy" onclick="re()" />
			        </td>
		       </tr>
               <tr>
                    <td colspan="2" align="right">
				        <p>Đã có tài khoản? <a href="DangNhap.aspx">Đăng nhập</a></p>
			        </td>
               </tr>
	        </table>
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
<script>
    function re() {
        document.getElementById('txtHovaTen').value = "";
        document.getElementById('txtDate').value = "";
        document.getElementById('txtTaiKhoan').value = "";
        document.getElementById('txtPass').value = "";
    }
</script>
</html>
