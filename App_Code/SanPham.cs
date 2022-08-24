using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for SanPham
/// </summary>
public class SanPham
{
    public string name { get; set; }
    public int price { get; set; }
    //public string url { get; set; }
    public int sl { get; set; }
    public string size { get; set; }
    public SanPham()
	{
		//
		// TODO: Add constructor logic here
		//
	}
    public SanPham(string name, int price, int sl,string size)
    {
        this.name = name;
        this.price = price;
        
        this.sl = sl;
        this.size = size;
    }
}