using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Giohang
/// </summary>
public class Giohang
{
    public int id { get; set; }
    public string tentaikhoan { get; set; }
    public string date { get; set; }
    public SanPham[] arrsp { get; set; }
    public Giohang()
	{
		//
		// TODO: Add constructor logic here
		//
	}
    public Giohang(int id, string tentaikhoan, string date, SanPham[] arrsp)
    {
        this.id = id;
        this.tentaikhoan = tentaikhoan;
        this.date = date;
        this.arrsp = arrsp;
    }
}