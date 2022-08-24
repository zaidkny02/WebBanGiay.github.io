using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class DangKy : System.Web.UI.Page
{
    ArrayList arrSession;
    protected void Page_Load(object sender, EventArgs e)
    {
         arrSession = (ArrayList)Application["members"];
    }
    protected void dangky_Click(object sender, EventArgs e)
    {
        string name = txtHovaTen.Value;
        string tentaikhoan = txtTaiKhoan.Value;
        string pass = txtPass.Value;
        string date = txtDate.Value;
        dangkytaikhoan(name, tentaikhoan, pass, date);
      //  Response.Write(date);
        
    }
    protected void dangkytaikhoan(string name,string tentaikhoan,string pass,string date)
    {
        int k = 0;
        foreach (Member mem in arrSession)
        {
            if (tentaikhoan == mem.tentaikhoan)
            {
                Response.Write("<script>alert('Đã có tài khoản này')</script>");
                txtTaiKhoan.Focus();
                k = 1;
            }
        }
        if (k == 0)
        {
            arrSession.Add(new Member(name, tentaikhoan, pass, date));
            Response.Write("<script>alert('Đăng ký thành công')</script>");
            txtTaiKhoan.Value = "";
            txtHovaTen.Value = "";
            txtDate.Value = "";
           // Response.Redirect("DangNhap.aspx");

        }
    }

}