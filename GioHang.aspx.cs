using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class GioHang : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
       /* Member member = (Member)Session["member"];
        if (member.tentaikhoan == null)
        {
            Response.Redirect("DangKy.aspx");
        }
        */
    }
    protected void ThanhToan(object sender, EventArgs e)
    {
        ArrayList arr = (ArrayList)Application["giohang"];
        Member member = (Member)Session["member"];
        string dt = DateTime.Now.ToShortDateString();
        string a = ValueHiddenField.Value;
        string[] s = a.Split(',');
        SanPham[] lstsp = new SanPham[s.Length/4];
        for (int i = 0; i < s.Length; i=i+4)
        {
            SanPham sp = new SanPham(s[i], Int32.Parse(s[i + 3]), Int32.Parse(s[i + 1]), s[i + 2]);
            lstsp[i/4] = sp;
        }
     //   Giohang(int id, string tentaikhoan, string date, SanPham[] arrsp)
        arr.Add(new Giohang(arr.Count,member.tentaikhoan, dt, lstsp));
       // Response.Redirect("Soluong.aspx");
        /*string[] myStringArray = new string[2];
        myStringArray[0] = "G";
        myStringArray[1] = "L";

        ArrayList myArrayList = new ArrayList();
        myArrayList.AddRange(myStringArray);*/
    }
}