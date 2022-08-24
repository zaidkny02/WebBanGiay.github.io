using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Member
/// </summary>
public class Member
{
    public string name { get; set; }
    public string tentaikhoan { get; set; }
    public string pass { get; set; }
    public string date { get; set; }
    public Member()
	{
		
        //
		// TODO: Add constructor logic here
		//
	}
    public Member(string name, string tentaikhoan, string pass, string date)
    {
        this.name = name;
        this.tentaikhoan = tentaikhoan;
        this.pass = pass;
        this.date = date;
    }

}