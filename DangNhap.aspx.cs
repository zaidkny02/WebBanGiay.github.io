using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class DangNhap : System.Web.UI.Page
{
    ArrayList arrSession;
    protected void Page_Load(object sender, EventArgs e)
    {
        arrSession = (ArrayList)Application["members"];
    }

    protected void dangnhap_Click(object sender, EventArgs e)
    {
        int k = 0;
        foreach (Member mem in arrSession)
        {
            if (txtTaikhoan.Value == mem.tentaikhoan && txtPass.Value == mem.pass)
            {
                Member memb = (Member)Session["member"];
                memb.name = mem.name;
                memb.tentaikhoan = mem.tentaikhoan;
                Response.Redirect("GioHang.aspx");            
                k++;
            }
        }
        if (k == 0)
            Response.Write("<script>alert('Sai tên đăng nhập hoặc mật khẩu')</script>");
    }

}