<%@ Application Language="C#" %>


<script runat="server">

    void Session_Start(object sender, EventArgs e)
    {
        Session["member"] = new Member();
    }
    
    void Application_Start(object sender, EventArgs e)
    {
        // Code that runs on application startup

        Application["members"] = new ArrayList();
        Application["giohang"] = new ArrayList();
        
    }
    
    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown

    }

    void Application_Error(object sender, EventArgs e)
    {
        // Code that runs when an unhandled error occurs

    }

</script>
