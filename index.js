

// bai tap tinh diem chuan dau rot
/**
 * input
 *  sumScore
 *  BonusPlace
 *  BonusPer
 *  TotalScore
 *  StandardScore
 * 
 * process
 *  totalScore >= StandardScore
 * output
 *  surcess or lose
 */
function ex1(){
  
    var standScore = document.getElementById("standnumber").value;
    var a = Number(document.getElementById("sub1").value);
    var b = Number(document.getElementById("sub2").value);
    var c = Number(document.getElementById("sub3").value);
    var studentType = document.getElementById("SList01").value;
    var area = document.getElementById("SList00").value;
    var areaGrade = calAreaGrade(area);
    var studentTypeGrade = calStudentType(studentType);
    var total= parseInt(a) + parseInt(b) + parseInt(c) + areaGrade + studentTypeGrade;
    console.log(total);
    if (sub1 == 0 || sub2 == 0 || sub3 == 0){
        document.getElementById("kq").value = ("bạn đã rớt do điểm của một trong 3 môn bằng 0");
    }else if (total >= standScore){
        document.getElementById("kq").value =("xin chúc mừng bạn đã đậu với số diểm là "+ total);
    }else if (total < standScore){
        document.getElementById("kq").value =("bạn đã rớt với số diểm là "+ total);
    }
}


function calAreaGrade (area) {
    if (area === "1"){
        return 2;
    }
    else if (area === "2"){
        return 1;
    }
    else if (area === "3"){
        return 0.5;
    }else{
        return 0;
    }

}
function calStudentType(type){
    if (type === "1"){
        return 2.5;
    }else if (type === "2"){
        return 2.5;
    }else if (type === "3"){
        return 1;
    }else{
        return 0;
    }
}

function ex2(){
    var name = document.getElementById("Name").value;
    var kw = Number(document.getElementById("Enumber").value);
    if (kw<50){
        totalPrice = 500*kw;
        document.getElementById("ElectricRes").value = ("Họ tên:"+name+";"+" Số tiền điện tháng này là: "+ new Intl.NumberFormat('vn-VN').format(totalPrice)+" vnd;")
    }else if(100 >= kw){
        totalPrice = 500 * 50 +(kw - 50) *650;
        document.getElementById("ElectricRes").value = ("Họ tên:"+name+";"+" Số tiền điện tháng này là: "+ new Intl.NumberFormat('vn-VN').format(totalPrice)+" vnd;")
    }else if(200 >= kw){
        totalPrice = 500 * 50 +(kw * 650) + ((kw - 100)*850);
        document.getElementById("ElectricRes").value = ("Họ tên:"+name+";"+" Số tiền điện tháng này là: "+ new Intl.NumberFormat('vn-VN').format(totalPrice)+" vnd;")
    }
    else if( 350 >= kw){
        totalPrice = 500 * 50 +(kw * 650) + (kw * 850)+((kw - 200)*1100);
        document.getElementById("ElectricRes").value = ("Họ tên:"+name+";"+" Số tiền điện tháng này là: "+ new Intl.NumberFormat('vn-VN').format(totalPrice)+" vnd;")
    }
    else if(350<kw){
        totalPrice = 500 * 50 +(kw * 650) + (kw * 850) + (kw * 1100)+ ((kw - 350)*1300);
        document.getElementById("ElectricRes").value = ("Họ tên:"+name+";"+" Số tiền điện tháng này là: "+ new Intl.NumberFormat('vn-VN').format(totalPrice)+" vnd;")
    }
    
}

function ex3() {
    var names = document.getElementById("nameex3").value;
    var TotalYearMoney = Number(document.getElementById("YMoney").value);
    var peoplebase = Number(document.getElementById("PersMoney").value);
    var salaPax = TotalYearMoney - 4e+6- peoplebase *16e+5;
        salaPax = Number(salaPax);
    var totalpax;
    totalpax = Number(totalpax);
    if (salaPax <= 60e+6 ){
        totalpax = (salaPax * 5)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if (salaPax > 60e+6 && salaPax <= 120e+6){
        totalpax = (salaPax * 10)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if (salaPax > 120e+6 && salaPax <= 210e+6){
        totalpax = (salaPax * 15)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if(salaPax > 210e+6 && salaPax <= 384e+6){
        totalpax = (salaPax * 20)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if(salaPax > 384e+6 && salaPax <=624e+6){
        totalpax = (salaPax * 25)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if(salaPax > 624e+6 && salaPax <= 960e+6){
        totalpax = (salaPax * 30)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }else if (salaPax > 960e+6){
        totalpax = (salaPax * 5)/100 ;
        document.getElementById("Pax").value =(names +"; "+"tổng thu nhập chịu thuế của bạn là: " +new Intl.NumberFormat('vn-VN').format(salaPax)+"; "+"số tiền thuế thu nhập cá nhân của bạn là: "+new Intl.NumberFormat('vn-VN').format(totalpax));
    }

}function change(){
    var list = document.getElementById("List").value;
    console.log(list);
    if (list == 2){
        console.log(list);
       document.getElementById("channelList").classList.remove("hidden");
       document.getElementById("channelList").classList.add("show");
    }else if (list == 1){
        document.getElementById("channelList").classList.add("hidden");
        document.getElementById("channelList").classList.remove("show");
    }
}

function ex4(){
    var name = document.getElementById("CusId").value;
    var Vchanel = document.getElementById("VipChannel").value;
    var numchanel = document.getElementById("channelList").value;
    var list = document.getElementById("List").value;
    var cus1 = 32.5;
    console.log (cuschannel) ;


}
function tinhTienCap(){
    var e=document.getElementById("List").value,
    n=document.getElementById("CusId").value,
    t=document.getElementById("VipChannel").value,
    u=document.getElementById("channelList").value,
    c=0;
        "2"==e?c=tinhTong(15,75,50,t,u,5):
        "1"==e?c=tinhTong(4.5,20.5,7.5,t,0,0):
        alert("Hãy chọn loại khách hàng"),
    document.getElementById("netmoney").innerHTML="Mã khách hàng: "+n+"; Tiền cáp: "+new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(c)}
    
function tinhTong(e,n,t,u,c,l){
        var m=e+n+t*u;return c>10&&(m+=(c-10)*l),m
    }