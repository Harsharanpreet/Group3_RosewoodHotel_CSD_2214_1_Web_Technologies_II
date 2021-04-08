var roompics=["1.jpg","2.jpg","3.jpg","4.jpg"];
var rent=[80,100,120,250];
var roomnames=["Single bed","double Bed","suite","King"];
var roomdetails=["No TV, Wifi Facility,Telephone,Room Service, Air conditioned,No Fridge",
"TV, Wifi Facility,Telephone,Room Service, Air conditioned,No Fridge",
"TV, Wifi Facility,Telephone,Room Service, Air conditioned,Fridge,Double bathroom,Sea view",
"TV, Wifi Facility,Telephone,Room Service, Air conditioned,Fridge,Double bathroom,Sea view,Sitting room, small confernce room"]





function init()
{
var currentuser=-1;
var mycart=[];
sessionStorage.setItem("mycart", JSON.stringify(mycart));

//defining array for users
var unames=["Admin"];
var users=["admin@gmail.com"];
var passwords=["1234"];
sessionStorage.setItem("unames", JSON.stringify(unames));
sessionStorage.setItem("users", JSON.stringify(users));
sessionStorage.setItem("passwords", JSON.stringify(passwords));
}


