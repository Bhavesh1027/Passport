function validation()
{  
    //filename = document.form.filename.value;
    var stutas=true;
    var regx = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})$/;
    var regx1 = /^([0-9]{10})$/;
    var regx2 = /^([a-z A-Z]+)$/;
    var regx3 = /^([a-z A-Z 0-9\.]+)$/;
    var regx4 = /^([0-9]{12})$/;
    var regx5 = /^([a-z A-Z\-,]+)$/;
    var regx6 = /^([0-9]{6})$/;
    var regx7 = /^([0-9]+)$/;
    var regx8 = /^([a-z A-Z]{3})([0-9]{9})$/;
    // File Number
    if(document.form.filename.value == "" || regx8.test(document.getElementById("filename").value) == false)
    {
        document.getElementById("e_filename").innerHTML = "<a href='#filename'>1.0 Please Enter Valid File Numbefile</a><br>" ;
        document.getElementById("filename").focus();
        stutas=false;
    }
    else
    {
        var fslice = document.getElementById("filename").value.slice(-2);
        var today = new Date().getFullYear().toString().slice(-2);
        if( fslice != today)
        {
            document.getElementById("e_filename").innerHTML = "<a href='#filename'>1.0 Please Enter valid Last 2 Digit of File Numbefile<br></a>" ;
        }else
        {
        document.getElementById("e_filename").style.display="none";
        //stutas=true;
        }
    }
   // Photo File 
    if(document.form.pfile.value == "")
    {
        document.getElementById("e_pfile").innerHTML = "<a href='#pfile'>1.0.1 Please Select Photo </a><br>";
        document.getElementById("pfile").focus();
        stutas=false;
    }
    else
    {
        document.getElementById("e_pfile").style.display="none";
        //stutas=true;
    }
    // Sign File
    if(document.form.sfile.value == "")
    {
        document.getElementById("e_sfile").innerHTML = "<a href='#sfile'>1.0.2 Please select Sign </a><br>";
        document.getElementById("sfile").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_sfile").style.display="none";
        //stutas=true;
    }
    // Applicant Name 
    if(document.getElementById("givenname").value == ""|| regx2.test(document.getElementById("givenname").value) == false)
    {
        document.getElementById("e_givenname").innerHTML = "<a href='#givenname'>2.1.1Please Enter Valid Applicant Name</a><br>";
        document.getElementById("givenname").focus();
        stutas=false;
    }else
    {
        // document.getElementById("e_givenname").innerHTML = "";
        document.getElementById("e_givenname").style.display="none";
        //stutas=true;
    }
    // Applicant Surname
    if(document.getElementById("surname").value == "" || regx2.test(document.getElementById("surname").value) == false)
    {
        document.getElementById("e_surname").innerHTML = "<a href='#surname'>2.1.2Please Enter Valid Applicant surname</a><br>";
        document.getElementById("surname").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_surname").style.display="none";
        //stutas=true;
    }
    if(document.getElementById("Bdate").value == "")
    {
        document.getElementById("e_Bdate").innerHTML = "<a href='#Bdate'>2.4 Please Enter Birth date </a><br>";
        document.getElementById("Bdate").focus();
        stutas=false;
    }else {
        var mydate = new Date(document.getElementById("Bdate").value);
        var today = new Date();
        var past = today.setMonth(today.getMonth() - 1);
        if( past < mydate)
            {
                document.getElementById("e_Bdate").innerHTML = "<a href='#Bdate'>2.4 Please Enter Valid Birth date </a><br>";
            }else
            {
        //document.getElementById("e_Bdate").innerHTML = "";
        document.getElementById("e_Bdate").style.display="none";
        //stutas=true;
    }
}
    // Birth Place
    if(document.getElementById("Bplace").value == "" || regx2.test(document.getElementById("Bplace").value) == false)
    {
        document.getElementById("e_Bplace").innerHTML = "<a href='#Bplace'>2.5.0 Please Enter Valid Birth Place </a><br>";
        document.getElementById("Bplace").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_Bplace").style.display="none";
        //stutas=true;
    }
     // District
     if(document.getElementById("District").value == "" || regx2.test(document.getElementById("District").value) == false)
     {
         document.getElementById("e_District").innerHTML = "<a href='#District'>2.5.1 Please Valid Enter District </a><br>";
         document.getElementById("District").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_District").style.display="none";
         //stutas=true;
     }
      // State
    if(document.getElementById("State").value == "" || regx2.test(document.getElementById("State").value) == false)
    {
        document.getElementById("e_State").innerHTML = "<a href='#State'>2.5.2 Please Enter Valid State </a><br>";
        document.getElementById("State").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_State").style.display="none";
        //stutas=true;
    }
     // Country
     if(document.getElementById("Country").value == "" || regx2.test(document.getElementById("Country").value) == false)
     {
         document.getElementById("e_Country").innerHTML = "<a href='#Country'>2.5.3 Please Enter Valid Country </a><br>";
         document.getElementById("Country").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_Country").style.display="none";
         //stutas=true;
     }
     // PSU/Goverment
     if(document.getElementById("employed").value == "" || regx3.test(document.getElementById("employed").value) == false)
     {
         document.getElementById("e_employed").innerHTML = "<a href='#employed'>2.12 Enter Govemment/Statutory Body/PSU,specify organization name </a><br>";
         document.getElementById("employed").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_employed").style.display="none";
         //stutas=true;
     } 
    // Adhar Card
    if(document.getElementById("adhar").value == "" || regx4.test(document.getElementById("adhar").value) == false)
     {
         document.getElementById("e_adhar").innerHTML = "<a href='#adhar'>2.17 Please Enter Valid Aadhar Card Number</a><br>";
         document.getElementById("adhar").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_adhar").style.display="none";
         //stutas=true;
     }
     // Father Name
     if(document.getElementById("fathername").value == "" || regx2.test(document.getElementById("fathername").value) == false)
     {
         document.getElementById("e_fathername").innerHTML = "<a href='#fathername'>3.1 Please Enter Valid Father Name</a><br>";
         document.getElementById("fathername").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_fathername").style.display="none";
         //stutas=true;
     }
    // Father Surname
    if(document.getElementById("fathersurname").value == "" || regx2.test(document.getElementById("fathersurname").value) == false)
    {
        document.getElementById("e_fathersurname").innerHTML = "<a href='#fathesurrname'>3.1.1 Please Enter Valid Father Surname</a><br>";
        document.getElementById("fathersurname").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_fathersurname").style.display="none";
        //stutas=true;
    }
    // Mother Name
    if(document.getElementById("mothername").value == "" || regx2.test(document.getElementById("mothername").value) == false)
     {
         document.getElementById("e_mothername").innerHTML = "<a href='#mothername'>3.2 Please Enter Valid Mother Name</a><br>";
         document.getElementById("mothername").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_mothername").style.display="none";
         //stutas=true;
     }
     // Mother Surname
     if(document.getElementById("mothersurname").value == "" || regx2.test(document.getElementById("mothersurname").value) == false)
    {
        document.getElementById("e_mothersurname").innerHTML = "<a href='#mothesurrname'>3.2.1 Please Enter Valid Mother Surname</a><br>";
        document.getElementById("mothersurname").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_mothersurname").style.display="none";
        //stutas=true;
    }
    // Guardian Name
    if(document.getElementById("guardianname").value != "" || regx2.test(document.getElementById("guardianname").value) == false)
     {
         document.getElementById("e_guardianname").innerHTML = "<a href='#guardianname'>3.3 Please Enter Valid Guardin Name</a><br>";
         document.getElementById("guardianname").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_guardianname").style.display="none";
         //stutas=true;
     }
     // Guardian Surname
     if(document.getElementById("guardiansurname").value != "" || regx2.test(document.getElementById("guardiansurname").value) == false)
     {
         document.getElementById("e_guardiansurname").innerHTML = "<a href='#guardiansurname'>3.3.1 Please Enter Guardian Surname</a><br>";
         document.getElementById("guardiansurname").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_guardiansurname").style.display="none";
         //stutas=true;
     }
     // Spouse Name
     if(document.getElementById("spousename").value != "" || regx2.test(document.getElementById("spousename").value) == false)
     {
         document.getElementById("e_spousename").innerHTML = "<a href='#spousename'>3.4 Please Enter Spouse Name</a><br>";
         document.getElementById("spousename").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_spousename").style.display="none";
         //stutas=true;
     }
     // Spouse Surname
     if(document.getElementById("spousesurname").value != "" || regx2.test(document.getElementById("spousesurname").value) == false)
     {
         document.getElementById("e_spousesurname").innerHTML = "<a href='#spousesurname'>3.4.1 Please Enter Spouse  Surname</a><br>";
         document.getElementById("spousesurname").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_spousesurname").style.display="none";
         //stutas=true;
     }
    // Father Passport Number
    if(document.getElementById("fpassportnumber").value != "" || regx4.test(document.getElementById("fpassportnumber").value) == false)
    {
        document.getElementById("e_fpassportnumber").innerHTML = "<a href='#fpassportnumber'>3.5.1 Please Enter Valid Father Passport Number</a><br>";
        document.getElementById("fpassportnumber").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_fpassportnumber").style.display="none";
        //stutas=true;
    }
    // Father Nationality
    if(document.getElementById("fnationality").value != "" || regx2.test(document.getElementById("fnationality").value) == false)
    {
        document.getElementById("e_fnationality").innerHTML = "<a href='#fnationality'>3.5.2 Please Enter Valid Father Natinality</a><br>";
        document.getElementById("fnationality").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_fnationality").style.display="none";
        //stutas=true;
    }
     // Mother Passport Number
     if(regx2.test(document.getElementById("mpassportnumber").value) == false)
     {
         document.getElementById("e_mpassportnumber").innerHTML = "<a href='#mpassportnumber'>3.5.3 Please Enter Valid Mother Passport Number </a><br>";
         document.getElementById("fpassportnumber").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_mpassportnumber").style.display="none";
         //stutas=true;
     }
     // Mother Nationality
     if(regx2.test(document.getElementById("mnationality").value) == false)
     {
         document.getElementById("e_mnationality").innerHTML = "<a href='#mnationality'>3.5.4 Please Enter valid Mother Natinality</a><br>";
         document.getElementById("mnationality").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_mnationality").style.display="none";
         //stutas=true;
     }
     // House No./Street
     if(document.getElementById("street").value == "" || regx5.test(document.getElementById("street").value) == false)
     {
         document.getElementById("e_street").innerHTML = "<a href='#street'>4.1.0 Please Enter Valid House NO. and Street </a><br>";
         document.getElementById("street").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_street").style.display="none";
         //stutas=true;
     }
     // Village or Town or City
     if(document.getElementById("city").value == "" || regx2.test(document.getElementById("city").value) == false)
     {
         document.getElementById("e_city").innerHTML = "<a href='#city'>4.1.1 Please Enter Valid Village or Town or City </a><br>";
         document.getElementById("city").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_city").style.display="none";
         //stutas=true;
     }
     // District
     if(document.getElementById("district").value == "" || regx2.test(document.getElementById("district").value) == false)
     {
         document.getElementById("e_district").innerHTML = "<a href='#district'>4.1.2 Please Enter Valid District </a><br>";
         document.getElementById("district").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_district").style.display="none";
         //stutas=true;
     }
     // Police Station
     if(document.getElementById("police").value == "" || regx2.test(document.getElementById("police").value) == false)
     {
         document.getElementById("e_police").innerHTML = "<a href='#police'>4.1.3 Please Enter Valid Nearest Police Station</a><br>";
         document.getElementById("police").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_police").style.display="none";
         //stutas=true;
     }
     // State
     if(document.getElementById("state").value == ""|| regx2.test(document.getElementById("state").value) == false)
     {
         document.getElementById("e_state").innerHTML = "<a href='#state'>4.1.4 Please Enter Valid  State </a><br>";
         document.getElementById("state").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_state").style.display="none";
         //stutas=true;
     }
     // PIN
     if(document.getElementById("pin").value == "" || regx6.test(document.getElementById("pin").value) == false)
     {
         document.getElementById("e_pin").innerHTML = "<a href='#pin'>4.1.5 Please Enter Valid PIN </a><br>";
         document.getElementById("pin").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_pin").style.display="none";
         //stutas=true;
     }
     // Mobile Number
     if(document.getElementById("mnumber").value == "" || regx1.test(document.getElementById("mnumber").value) == false)
     {
         document.getElementById("e_mnumber").innerHTML = "<a href='#mnumber'>4.1.6 Please Enter Valid Mobile Number </a><br>";
         document.getElementById("mnumber").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_mnumber").style.display="none";
         //stutas=true;
     }
     // E-mail
     if(document.getElementById("mail").value == "" || regx.test(document.getElementById("mail").value) == false)
     {
         document.getElementById("e_mail").innerHTML = "<a href='#mail'>4.1.7 Please Enter Valid E-mail </a><br>";
         document.getElementById("mail").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_mail").style.display="none";
         //stutas=true;
     }
     // Emergency Name And Address
     if(document.getElementById("Ename").value == "" || regx2.test(document.getElementById("Ename").value) == false)
     {
         document.getElementById("e_Ename").innerHTML = "<a href='#Ename'>5.1 Please Enter Valid Emergency Name And Address </a><br>";
         document.getElementById("Ename").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_Ename").style.display="none";
         //stutas=true;
     }
    // Emergency Mobile Number
    if(document.getElementById("Emobilenumber").value == "" || regx1.test(document.getElementById("Emobilenumber").value) == false)
     {
         document.getElementById("e_Emobilenumber").innerHTML = "<a href='#Emobilenumber'>5.2 Please Enter Valid Emergency Mobile Number </a><br>";
         document.getElementById("Emobilenumber").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_Emobilenumber").style.display="none";
         //stutas=true;
     }
     // Emergency Email ID
     if(document.getElementById("Eemail").value == "" || regx.test(document.getElementById("Eemail").value) == false)
     {
         document.getElementById("e_Eemail").innerHTML = "<a href='#Eemail'>5.3 Please Enter Valid Emergency Email</a><br>";
         document.getElementById("Eemail").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_Eemail").style.display="none";
         //stutas=true;
     }
    // Privious Passport Number
     if(document.getElementById("pnumber").value == "" || regx4.test(document.getElementById("pnumber").value) == false)
     {
         document.getElementById("e_pnumber").innerHTML = "<a href='#pnumber'>6.1.1 Please Enter Valid Privious Passport Number </a><br>";
         document.getElementById("pnumber").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_pnumber").style.display="none";
         //stutas=true;
     }
      // Issue Date
     if(document.getElementById("issuedate").value == "")
     {
         document.getElementById("e_issuedate").innerHTML = "<a href='#issuedate'>6.1.2 Please Enter Passport Issue Date </a><br>";
         document.getElementById("issuedate").focus();
         stutas=false;
     }else
     {
        var mydate = new Date(document.getElementById("issuedate").value);
        var today = new Date();
        if( today < mydate)
            {
                document.getElementById("e_issuedate").innerHTML = "<a href='#issuedate'>6.1.2 Please Enter Valid Issue date </a><br>";
            }else
            {
         document.getElementById("e_issuedate").style.display="none";
         //stutas=true;
            }
     }
     // Expiry Date
     if(document.getElementById("expirydate").value == "")
     {
         document.getElementById("e_expirydate").innerHTML = "<a href='#expirydate'>6.1.3 Please Enter Passport Expiry Date </a><br>";
         document.getElementById("expirydate").focus();
         stutas=false;
     }else
     {
        var expiry = new Date(document.getElementById("expirydate").value);
        var issue = new Date(document.getElementById("issuedate").value);
        if( issue > expiry)
            {
                document.getElementById("e_expirydate").innerHTML = "<a href='#expirydate'>6.1.4 Please Enter Valid expiry date </a><br>";
            }else
            {
         document.getElementById("e_expirydate").style.display="none";
         //stutas=true;
            }
     }
     // Place of Issue
     if(document.getElementById("pissue").value == "" || regx2.test(document.getElementById("pissue").value) == false)
     {
         document.getElementById("e_pissue").innerHTML = "<a href='#pissue'>6.1.4 Please Enter Valid Passport Place of Issue </a><br>";
         document.getElementById("pissue").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_pissue").style.display="none";
         //stutas=true;
     }
     //Have applied paaport, but not issued
    //  //File Number
    //  if(document.getElementById("anumber").value == "" || regx8.test(document.getElementById("anumber").value) == false)
    //  {
    //      document.getElementById("e_anumber").innerHTML = "<a href='#anumber'>6.2.1 Please Enter Valid Applied File Number </a><br>";
    //      document.getElementById("anumber").focus();
    //      stutas=false;
    //  }else
    //  {
    //      document.getElementById("e_anumber").style.display="none";
    //      //stutas=true;
    //  }
    //  // Month and Year Applied
    //  if(document.getElementById("my").value == "")
    //  {
    //      document.getElementById("e_my").innerHTML = "<a href='#my'>6.2.2 Please Enter Passport Applied Month and Year </a><br>";
    //      document.getElementById("my").focus();
    //      stutas=false;
    //  }else
    //  {
    //      document.getElementById("e_my").style.display="none";
    //      //stutas=true;
    //  }
    //  // Office applied
    //  if(document.getElementById("poffice").value == "" || regx2.test(document.getElementById("poffice").value) == false) 
    //  {
    //      document.getElementById("e_poffice").innerHTML = "<a href='#poffice'>6.2.3 Please Enter Valid Passport Place of Issue </a><br>";
    //      document.getElementById("poffice").focus();
    //      stutas=false;
    //  }else
    //  {
    //      document.getElementById("e_poffice").style.display="none";
    //      //stutas=true;
    //  }
     // Fee Amount
     if(document.getElementById("fee").value == "" || regx7.test(document.getElementById("fee").value) == false)
     {
         document.getElementById("e_fee").innerHTML = "<a href='#fee'>8.1 Please Enter Fee Amount </a><br>";
         document.getElementById("fee").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_fee").style.display="none";
         //stutas=true;
     }
     // DD Number
     if(document.getElementById("ddnumber").value == "" || regx4.test(document.getElementById("ddnumber").value) == false)
     {
         document.getElementById("e_ddnumber").innerHTML = "<a href='#ddnumber'>8.2.1 Please Enter Valid DD Number</a><br>";
         document.getElementById("ddnumber").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_ddnumber").style.display="none";
         //stutas=true;
     }
     // DD Issue Date
     if(document.getElementById("ddissue").value == "")
     {
         document.getElementById("e_ddissue").innerHTML = "<a href='#ddissue'>8.2.2 Please Enter DD Issue Date </a><br>";
         document.getElementById("ddissue").focus();
         stutas=false;
     }else
        {
        var mydate = new Date(document.getElementById("ddissue").value);
        var today = new Date();
        if( today < mydate)
            {
                document.getElementById("e_ddissue").innerHTML = "<a href='#ddissue'>8.2.2 Please Enter Valid DD Issue date </a><br>";
                stutas=false;
            }else
        {
         document.getElementById("e_ddissue").style.display="none";
         //stutas=true;
        }
    }
    // DD Expiry Date
    if(document.getElementById("ddexpiry").value == "")
    {
        document.getElementById("e_ddexpiry").innerHTML ="<a href='#ddexpiry'> 8.2.3 Please Enter DD Expiry</a><br>";
        document.getElementById("ddexpiry").focus();
        stutas=false;
    }else
        {
            var ex = new Date(document.getElementById("ddexpiry").value);
            var is = new Date(document.getElementById("ddissue").value);
            if(is > ex)
            {
                document.getElementById("e_ddexpiry").innerHTML = "<a href='#ddexpiry'> 8.2.3 Please Enter Valid DD Expiry Date</a><br>";
            }else
            {
                document.getElementById("e_ddexpiry").style.display="none";
            }

        }
     // Bank Name
     if(document.getElementById("bankname").value == "" || regx2.test(document.getElementById("bankname").value) == false)
     {
         document.getElementById("e_bankname").innerHTML = "<a href='#bankname'>8.2.4 Please Enter Valid Bank Name </a><br>";
         document.getElementById("bankname").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_bankname").style.display="none";
         //stutas=true;
     }
     // Bank Branch Name
     if(document.getElementById("branchname").value == "" || regx2.test(document.getElementById("branchname").value) == false)
     {
         document.getElementById("e_branchname").innerHTML = "<a href='#branchname'>8.2.5 Please Enter Valid Bank Branch Name </a><br>";
         document.getElementById("branchname").focus();
         stutas=false;
     }else
     {
         document.getElementById("e_branchname").style.display="none";
         //stutas=true;
     }
    // Place
    if(document.getElementById("place").value == "" || regx2.test(document.getElementById("place").value) == false)
    {
        document.getElementById("e_place").innerHTML = "<a href='#place'>10.1 Please Enter Valid Place</a><br>";
        document.getElementById("place").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_place").style.display="none";
        //stutas=true;
    }
    
    // Date
    if(document.getElementById("Date").value == "")
    {
        document.getElementById("e_Date").innerHTML = "<a href='#Date'>10.2 Please Enter Date</a><br>";
        document.getElementById("Date").focus();
        stutas=false;
    }else
    {
        document.getElementById("e_Date").style.display="none";
        //stutas=true;
    }
    // Signature File
    if(document.getElementById("sign").value == "")
    {
        document.getElementById("e_sign").innerHTML = "<a href='#sign'>10.3 Please Enter Signature </a><br>";
        document.getElementById("sign").focus();
        stutas=false;
    }else
    {
        //         document.getElementById("e_sign").style.display="none";
        //stutas=true;
    }
    //Form Type
    // var yn=document.querySelector('input[name="2"]:checked');
    // if(yn!=null)
    // {
    //     document.getElementById("e_Fname").style.display="none";
    // }else
    // {
    //     document.getElementById("e_Fname").innerHTML = "<a href='#Fcheck'>1.1 Please select Form Type</a><br>";
    // }
    // // Re_issue ,Specify Reason
    // var yn=document.querySelector('input[name="1"]:checked');
    // if(yn!=null)
    // {
    //     document.getElementById("e_1").style.display="none";
    // }else
    // {
    //     document.getElementById("e_1").innerHTML = "<a href='#Fcheck'>1.2 Please select Re_issue Specify Reason</a><br>";
    // }
    // Type of Application
    var applying = document.querySelector('input[name="2"]:checked');
    var Re_issue = document.querySelector('input[name="1"]:checked');
    var change = document.querySelector('input[name="name"]:checked');
    if(applying == null)
    {
        document.getElementById("e_Fname").innerHTML = "<a href='#Fcheck'>1.1 Please select Form Type</a><br>";
    }else if(applying.value == "Re_issue of Passport")
        {
            document.getElementById("e_Fname").style.display="none";
            if(Re_issue == null)
            {
                document.getElementById("e_1").innerHTML = "<a href='#Fcheck'>1.2 Please select Re_issue Specify Reason</a><br>";
            }else if(Re_issue.value == "change in Existing Personal Particulars")
            {
                document.getElementById("e_1").style.display="none";
                if(change == null){
                document.getElementById("e_name").innerHTML = "<a href='#name'>1.3 Please Select change in Existing Personal Particulars</a><br>";
                }else 
                {
                    document.getElementById("e_name").style.display="none";
                }
            }
        }
        else{
            document.getElementById("e_Fname").style.display="none";
        }
    var yn=document.querySelector('input[name="3"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_3").style.display="none";
    }else
    {
        document.getElementById("e_3").innerHTML = "<a href='#3'>1.4 Please select Type of Application </a><br>";
    }
    // Type of Passport Booklet
    var yn=document.querySelector('input[name="4"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_4").style.display="none";
    }else
    {
        document.getElementById("e_4").innerHTML = "<a href='#4'>1.5 Please select Type of Passport Booklet </a><br>";
    }
    // Validity Required
    var yn=document.querySelector('input[name="5"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_5").style.display="none";
    }else
    {
        document.getElementById("e_5").innerHTML = "<a href='#5'>1.6 Please select Validity Required </a><br>";
    }
    // Change Name
    var yn=document.querySelector('input[name="8"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_8").style.display="none";
    }else
    {
        document.getElementById("e_8").innerHTML = "<a href='#8'>2.3 Please select Have You ever changed your Name </a><br>";
    } 
    // Gender
    var yn=document.querySelector('input[name="9"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_9").style.display="none";
    }else
    {
        document.getElementById("e_9").innerHTML = "<a href='#9'>2.6 Please select Gender</a><br>";
    } 
    // Marital Status
    var yn=document.querySelector('input[name="10"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_10").style.display="none";
    }else
    {
        document.getElementById("e_10").innerHTML = "<a href='#10'>2.7 Please select Marital Status </a><br>";
    } 
    // Citizenship of India 
    var yn=document.querySelector('input[name="11"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_11").style.display="none";
    }else
    {
        document.getElementById("e_11").innerHTML = "<a href='#11'>2.8 Please select Citizenship of India </a><br>";
    }
    // Employment Type
    var yn=document.querySelector('input[name="12"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_12").style.display="none";
    }else
    {
        document.getElementById("e_12").innerHTML = "<a href='#12'>2.11 Please select Employment Type</a><br>";
    }
    // Your Parent spouse,Government servent
    var yn=document.querySelector('input[name="13"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_13").style.display="none";
    }else
    {
        document.getElementById("e_13").innerHTML = "<a href='#13'>2.13 Please select Your Parents Government servent or Not </a><br>";
    }
    // Educational Qualification
    var yn=document.querySelector('input[name="14"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_14").style.display="none";
    }else
    {
        document.getElementById("e_14").innerHTML = "<a href='#14'>2.14 Please select Higher Educational Qualification </a><br>";
    }
    // NON-ECR category
    var yn=document.querySelector('input[name="15"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_15").style.display="none";
    }else
    {
        document.getElementById("e_15").innerHTML = "<a href='#15'>2.15 Please select you are in NON-ECR category </a><br>";
    }
    // Parment Address same as a present
    var parment = document.querySelector('input[name="16"]:checked');
    if(parment == null)
    {
        document.getElementById("e_16").innerHTML = "<a href='#16'>4.2 Please select is parment address same as a present</a><br>";
    }else if(parment.value == "No")
    {
        document.getElementById("e_16").style.display="none";
        if(document.getElementById("Ename").value == "" || regx2.test(document.getElementById("Ename").value) == false)
        {
            document.getElementById("e_Ename").innerHTML = "<a href='#Ename'>5.1 Please Enter Valid Emergency Name And Address </a><br>";
            document.getElementById("Ename").focus();
            stutas=false;
        }else if(document.getElementById("Emobilenumber").value == "" || regx1.test(document.getElementById("Emobilenumber").value) == false)
        {
            document.getElementById("e_Ename").style.display="none";
            document.getElementById("e_Emobilenumber").innerHTML = "<a href='#Emobilenumber'>5.1.1 Please Enter Valid Emergency Mobile Number </a><br>";
            document.getElementById("Emobilenumber").focus();
            stutas=false;
        }else if(document.getElementById("Eemail").value == "" || regx.test(document.getElementById("Eemail").value) == false)
        {
            document.getElementById("e_Emobilenumber").style.display="none";
            document.getElementById("e_Eemail").innerHTML = "<a href='#Eemail'>5.1.2 Please Enter Valid Emergency Email</a><br>";
            document.getElementById("Eemail").focus();
            stutas=false;
        }else
        {
            document.getElementById("e_Eemail").style.display="none";
        }
    }else
    {
        document.getElementById("e_16").style.display="none";
    }
    // var yn=document.querySelector('input[name="16"]:checked');
    // if(yn!=null)
    // {
    //     document.getElementById("e_16").style.display="none";
    // }else
    // {
    //     document.getElementById("e_16").innerHTML = "<a href='#16'>4.2 Please select is parment address same as a present</a><br>";
    // }
    // Have you ever applied for passport,but not issued?

    var applied = document.querySelector('input[name="17"]:checked');
    if(applied == null)
    {
        document.getElementById("e_17").innerHTML = "<a href='#17'>6.2 Please select Have you ever applied for passport,but not issued?</a><br>";
    }else if(applied.value == "yes")
    {
        document.getElementById("e_17").style.display="none";
        if(document.getElementById("anumber").value == "" || regx8.test(document.getElementById("anumber").value) == false)
        {
            document.getElementById("e_anumber").innerHTML = "<a href='#anumber'>6.2.1 Please Enter Valid Applied File Number </a><br>";
            document.getElementById("anumber").focus();
            stutas=false;
        }else if(document.getElementById("my").value == "")
        {
            document.getElementById("e_anumber").style.display="none";
            document.getElementById("e_my").innerHTML = "<a href='#my'>6.2.2 Please Enter Passport Applied Month and Year </a><br>";
            document.getElementById("my").focus();
            stutas=false;
        }else if(document.getElementById("poffice").value == "" || regx2.test(document.getElementById("poffice").value) == false) 
        {
            document.getElementById("e_my").style.display="none";
            document.getElementById("e_poffice").innerHTML = "<a href='#poffice'>6.2.3 Please Enter Valid Passport Place of Issue </a><br>";
            document.getElementById("poffice").focus();
            stutas=false;
        }else
        {
            document.getElementById("e_poffice").style.display="none";
        }
    }else
    {
        document.getElementById("e_17").style.display="none";
    }
    var Privious = document.querySelector('input[name=""]:checked');
    var yn=document.querySelector('input[name="17"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_17").style.display="none";
    }else
    {
        document.getElementById("e_17").innerHTML = "<a href='#17'>6.2 Please select Have you ever applied for passport,but not issued?</a><br>";
    }

    /*if(applying.value == "Re_issue of Passport")
        {
            if(document.getElementById("pnumber").value == "" || regx4.test(document.getElementById("pnumber").value) == false)
            {
                document.getElementById("e_pnumber").innerHTML = "<a href='#pnumber'>6.1.1 Please Enter Valid Privious Passport Number </a><br>";
                document.getElementById("pnumber").focus();
                stutas=false;
            }else if(document.getElementById("issuedate").value == "")
            {
                document.getElementById("e_pnumber").style.display="none";
                document.getElementById("e_issuedate").innerHTML = "<a href='#issuedate'>6.1.2 Please Enter Passport Issue Date </a><br>";
                document.getElementById("issuedate").focus();
                stutas=false;
            }else
            {
                var mydate = new Date(document.getElementById("issuedate").value);
                var today = new Date();
                if( today < mydate)
                    {
                        document.getElementById("e_issuedate").innerHTML = "<a href='#issuedate'>6.1.2 Please Enter Valid Issue date </a><br>";
                    }
            } 
        }*/

    // Are any proceedings in respect of an offence alleged to have been committed by you pending before a criminal court in India?  
    var yn=document.querySelector('input[name="18"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_18").style.display="none";
    }else
    {
        document.getElementById("e_18").innerHTML = "<a href='#18'>7.1.1 Are any proceedings in respect of an offence alleged to have been committed by you pending before a criminal court in India?</a><br>";
    }
    // Has any warrant or summons for your appearance been issued & pending before a court under any law for the time being in force?
    var yn=document.querySelector('input[name="19"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_19").style.display="none";
    }else
    {
        document.getElementById("e_19").innerHTML = "<a href='#18'>7.1.2 Has any warrant or summons for your appearance been issued & pending before a court under any law for the time being in force?</a><br>";
    }
    // Has a warrant for your arrest been issued by a court under any law for the time being in force?
    var yn=document.querySelector('input[name="20"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_20").style.display="none";
    }else
    {
        document.getElementById("e_20").innerHTML = "<a href='#20'>7.1.3 Has a warrant for your arrest been issued by a court under any law for the time being in force?</a><br>";
    }
    // Has an order prohibiting your departure from India been made by any court?
    var yn=document.querySelector('input[name="21"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_21").style.display="none";
    }else
    {
        document.getElementById("e_21").innerHTML = "<a href='#21'>7.1.4 Has an order prohibiting your departure from India been made by any court?</a><br>";
    }
    /* Have you, at any time during the period of five years immediately preceding the date of application, been convicted by a court in India for any offence involving moral turpitude and sentenced in respect 
    thereof to imprisonment for not less than two years?*/
    var yn=document.querySelector('input[name="22"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_22").style.display="none";
    }else
    {
        document.getElementById("e_22").innerHTML = "<a href='#22'>7.2.1Have you, at any time during the period of five years immediately preceding the date of application</a><br>";
    }
    // Have you ever been refused/denied passport?
    var yn=document.querySelector('input[name="23"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_23").style.display="none";
    }else
    {
        document.getElementById("e_23").innerHTML = "<a href='#23'>7.3.1 Have you ever been refused/denied passport?</a><br>";
    }
    // Has your passport ever been impounded?
    var yn=document.querySelector('input[name="24"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_24").style.display="none";
    }else
    {
        document.getElementById("e_24").innerHTML = "<a href='#24'>7.3.2 Has your passport ever been impounded?</a><br>";
    }
    // Has your passport ever been revoked?
    var yn=document.querySelector('input[name="25"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_25").style.display="none";
    }else
    {
        document.getElementById("e_25").innerHTML = "<a href='#25'>7.3.3 Has your passport ever been revoked?</a><br>";
    }
    // Have you ever been granted citizenship by any other region/country?
    var yn=document.querySelector('input[name="26"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_26").style.display="none";
    }else
    {
        document.getElementById("e_26").innerHTML = "<a href='#26'>7.4.1 Have you ever been granted citizenship by any other region/country?</a><br>";
    }
    // Have you ever held the passport of any other region/country at any time?
    var yn=document.querySelector('input[name="27"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_27").style.display="none";
    }else
    {
        document.getElementById("e_27").innerHTML = "<a href='#27'>7.4.2 Have you ever held the passport of any other region/country at any time?</a><br>";
    }
    // Have you ever surrendered your Indian passport?
    var yn=document.querySelector('input[name="28"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_28").style.display="none";
    }else
    {
        document.getElementById("e_28").innerHTML = "<a href='#16'>7.4.3 Have you ever surrendered your Indian passport?</a><br>";
    }
    // 	Have you ever applied for renunciation of Indian citizenship?
    var yn=document.querySelector('input[name="29"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_29").style.display="none";
    }else
    {
        document.getElementById("e_29").innerHTML = "<a href='#29'>7.4.4 Have you ever applied for renunciation of Indian citizenship?</a><br>";
    }
    // Have you ever returned to India on Emergency Certificate (EC)?
    var yn=document.querySelector('input[name="30"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_30").style.display="none";
    }else
    {
        document.getElementById("e_30").innerHTML = "<a href='#30'>7.5.1 Have you ever returned to India on Emergency Certificate (EC)?</a><br>";
    }
    // Have you ever been deported from any country?       
    var yn=document.querySelector('input[name="31"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_31").style.display="none";
    }else
    {
        document.getElementById("e_31").innerHTML = "<a href='#31'>7.5.2 Have you ever been deported from any country?</a><br>";
    }
    // Have you ever been repatriated from any country back to India?
    var yn=document.querySelector('input[name="32"]:checked');
    if(yn!=null)
    {
        document.getElementById("e_32").style.display="none";
    }else
    {
        document.getElementById("e_32").innerHTML = "<a href='#32'>7.5.3 ave you ever been repatriated from any country back to India?</a><br>";
    }
    // change in Existing Personal Particulars
    // var yn=document.querySelector('input[name="name"]:checked');
    // if(yn!=null)
    // {
    //     document.getElementById("e_name").style.display="none";
    // }else
    // {
    //     document.getElementById("e_name").innerHTML = "<a href='#name'>1.3 Please Select change in Existing Personal Particulars</a><br>";
    // }
return stutas;
}
// Disabled
function Reason()
    {
            document.getElementById("1").disabled = true;
            document.getElementById("disable2").disabled = true;
            document.getElementById("disable3").disabled = true;
            document.getElementById("disable4").disabled = true;
            document.getElementById("disable5").disabled = true;
            document.getElementById("disable6").disabled = true;
            document.getElementById("disable7").disabled = true;
            document.getElementById("disable8").disabled = true;
            document.getElementById("disable9").disabled = true;
            document.getElementById("disable10").disabled = true; 
            document.getElementById("disable11").disabled = true;
            document.getElementById("disable12").disabled = true;
            document.getElementById("disable13").disabled = true;
            document.getElementById("disable14").disabled = true;
            document.getElementById("disable15").disabled = true;
            document.getElementById("pnumber").disabled = true;
            document.getElementById("issuedate").disabled = true;
            document.getElementById("expirydate").disabled = true;
            document.getElementById("pissue").disabled = true;
            var result=document.getElementById("Fcheck").checked;
            if(result == false)
            {
            document.getElementById("1").disabled = false;
            document.getElementById("disable2").disabled = false;
            document.getElementById("disable3").disabled = false;
            document.getElementById("disable4").disabled = false;
            document.getElementById("disable5").disabled = false;
            document.getElementById("disable6").disabled = false;
            document.getElementById("pnumber").disabled = false;
            document.getElementById("issuedate").disabled = false;
            document.getElementById("expirydate").disabled = false;
            document.getElementById("pissue").disabled = false;
            }
    }
function repersonal()
    {
        document.getElementById("disable7").disabled = true;
        document.getElementById("disable8").disabled = true;
        document.getElementById("disable9").disabled = true;
        document.getElementById("disable10").disabled = true;
        document.getElementById("disable11").disabled = true;
        document.getElementById("disable12").disabled = true;
        document.getElementById("disable13").disabled = true;
        document.getElementById("disable14").disabled = true;
        document.getElementById("disable15").disabled = true;
        var result1=document.getElementById("disable5").checked;
        if(result1 == true)
        {
        document.getElementById("disable7").disabled = false;
        document.getElementById("disable8").disabled = false;
        document.getElementById("disable9").disabled = false;
        document.getElementById("disable10").disabled = false;
        document.getElementById("disable11").disabled = false;
        document.getElementById("disable12").disabled = false;
        document.getElementById("disable13").disabled = false;
        document.getElementById("disable14").disabled = false;
        document.getElementById("disable15").disabled = false;
       
        }
    }
function yes()
    {
        document.getElementById("anumber").disabled = true;
        document.getElementById("my").disabled = true;
        document.getElementById("poffice").disabled = true;
        var result=document.getElementById("no17").checked;
        if(result == false)
        {
            document.getElementById("anumber").disabled = false;
            document.getElementById("my").disabled = false;
            document.getElementById("poffice").disabled = false;
        }
    }
function gov()
    {
        document.getElementById("employed").disabled = false;
    }
function nongov()
    {
        document.getElementById("employed").disabled = true;
    }
function yes1()
    {
        document.getElementById("Ename").disabled = true;
        document.getElementById("Emobilenumber").disabled = true;
        document.getElementById("tphone").disabled = true;
        document.getElementById("Eemail").disabled = true;
        var result = document.getElementById("16").checked;
        if(result == false)
        {
            document.getElementById("Ename").disabled = false;
            document.getElementById("Emobilenumber").disabled = false;
            document.getElementById("tphone").disabled = false;
            document.getElementById("Eemail").disabled = false;
        }
    }
function In()
    {
        document.getElementById("Bplace").disabled = true;
        document.getElementById("District").disabled = true;
        document.getElementById("State").disabled = true;
        document.getElementById("Country").disabled = false;
        var result = document.getElementById("out").checked;
        if(result == false)
        {  
            document.getElementById("Bplace").disabled = false;
            document.getElementById("District").disabled = false;
            document.getElementById("State").disabled = false;
            document.getElementById("Country").disabled = true;
        }
    }
function date()
{
    var today = new Date();
    document.getElementById("Date").value = today.getDate()+ '-'+ today.getMonth()+1+ '-' + today.getFullYear();
}
