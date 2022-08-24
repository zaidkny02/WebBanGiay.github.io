using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Soluong : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        ArrayList arr = (ArrayList)Application["giohang"];
        string str = "";
        if (arr == null) { }
        else
        {
            Member member = (Member)Session["member"];
            foreach (Giohang ar in arr)
            {
                int sum=0;
                    str+= @" <form>
                           <p>Mã hóa đơn: "+ar.id+ @"</p>                           
                           <p>Tên tài khoản: "+ar.tentaikhoan+@"</p>                           
                           <p>Ngày mua: "+ar.date+@"</p>			   
                           <p>Chi tiết hóa đơn:</p>   ";
                    foreach (SanPham sp in ar.arrsp)
                    {
                        str+= @"<hr/>
                            <p>Tên sản phẩm: " + sp.name + @"</p>  
				            <p>Size: " + sp.size + @"</p>                             		
				            <p>Số lượng: " + sp.sl + @"</p>
                            <p>Đơn giá: " + sp.price + @"</p>";
                        sum += sp.price * sp.sl;
                    }

                    str += @"<h3>Tổng tiền: " + sum + @"</h3></form>";
            }
            products.InnerHtml = str;
            
        }
    }
}