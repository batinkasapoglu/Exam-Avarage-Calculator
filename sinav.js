function hesapla(){
    var sinav1=document.getElementById("sinav1").value;
    var sinav2=document.getElementById("sinav2").value;
    var sinav3=document.getElementById("sinav3").value;

    var s1=Number(sinav1);
    var s2=Number(sinav2);
    var s3=Number(sinav3);

    var ort=(s1 + s2 + s3) / 3 ;

    if(ort > 49.5){
        document.getElementById("sonuc").innerHTML="ortalama "+ ort + " geçtiniz"
    }else{
        document.getElementById("sonuc").innerHTML="ortalama "+ ort + " kaldınız"
    }

}

   
    var hesapbtn=document.getElementById("btn");
    hesapbtn.onclick=hesapla;   
