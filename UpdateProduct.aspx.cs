using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UpdateProduct : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        ValueHiddenField.Value = Server.MapPath("~/img/");
        HttpPostedFile postFile = Request.Files["postFile"];
        if (postFile != null && postFile.ContentLength > 0)
        {
            string sFilePath = Server.MapPath("~/img/") + Path.GetFileName(postFile.FileName);
            postFile.SaveAs(sFilePath);
           // imgAnh.ImageUrl = "~/Uploads/" + postFile.FileName;


            

        }
        string prod_id = Request.Form["hiddenfield"];
        if (prod_id != null)
        {
         //   addbtn.visibility = false;
            addbtn.Style["visibility"] = "hidden";
            updatebtn.Style["visibility"] = "visible";
          //  updatebtn.Visible = true;
            TypeHidden.Value = prod_id;
           // updatebtn.Style["display"] = "inline-block";
           // addbtn.Style["display"] = "none";

            
        }
    }
}