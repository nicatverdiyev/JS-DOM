// Task-01
// Konsola doğum tarixini çıxarın.
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.
// let user = {
//     name : "Nicat",
//     gender : "man",
//     birthday : "03.08.1999"
// }
// console.log(user.birthday);

// Task-02
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.
// let user = {
//      name : "Nicat",
//      gender : "man",
//      birthday : "03.08.1999"
// }
// user.age = 24;
// delete user.birthday;
// console.log(user);

// Task-03
// Obyektə metodlar əlavə edin.
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
//  qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

// let user = {
//     name: "Nicat",
//     surname : "Verdiyev",
//     age: 24,
//     setAge(param){
//         this.age = param
//     },
//     getYearsBeforeRetirement(){
//         return 65 - this.age
//     }
// }
// user.setAge(25)
// console.log(user);
// console.log(user.getYearsBeforeRetirement());

// Task-04
// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
// Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
//     =>client obyekti yaradın.
//     Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//     - Tam adı müştərinin (fullName).
//     - Kredit limiti (creditLimit).
//     - Cari balans (balans).
//     - Minimum ödənişin faizi (precentOfMinPayment).
//     =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getBalance()).
//     Mesaj nümunələri:
//     «Balansınız 3000»,
//     «Borcunuz 2000».
//      =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//     getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum
//     ödəniş məbləği haqqında mesaj qaytarır.
//     Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getMinPaymant()).
//     Mesaj nümunələri:
//     «Minimum ödənişiniz 240»,
//     «Sizin borcunuz yoxdur».
//      =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//     withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//     Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
// client.widthdraw(900)
//      =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//     refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// let client = {
//     fullName : "Nicat Verdiyev",
//     creditLimit : 2500,
//     balans : -300,
//     precentOfMinpayment: 10,
//     getBalance(){
//         if (this.balans >= 0) {
//             console.log(`sizin balansınız ${this.balans} AZN`);
//         }else{
//             console.log(`sizin borcunuz ${this.balans * -1} AZN`);

//         }
//     },
//     getMinPayment(){
//         if (this.balans >= 0) {
//             console.log(`sizin borcunuz yoxdur`);
//         }else{
//             let minPayment = (this.balans * -1) * this.precentOfMinpayment / 100
//             console.log(`sizin minödeişiniz ${minPayment} AZN`);

//         }
//     },
//     refill(param){
//         this.balans += param;
//     },
//     withdraw(param){
//         this.balans -= param;
//     }
// }
// client.refill(30);
// client.getBalance();
// client.getMinPayment();
// client.withdraw(30)



// const btn = document.querySelector("button");

// btn.onclick = function(){
//     alert("hello")
// }
// ------VE YA-----
// function getsSayHello() {
//     alert("hello")  
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", getsSayHello);

// --------CLİCK EDERKEN BACKGROUND VE CLASIN DEİŞMESİ--------

// function getsSayHello() {
//    btn.className = "active" 
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", getsSayHello);

// ----------------VE YA--------------

//  const btn = document.querySelector("button");
//  btn.addEventListener("click", function() {
//     btn.className = "active" 
//  });

// const btn = document.querySelector("button");

// function clicked(e) {
//     e.target.className = "active"
//     btn.removeEventListener("click",clicked)
// }
// btn.addEventListener("click",clicked)

// --------------CLİCK ederken yeni class elave etmek --------

 const btnList = document.querySelectorAll("button");
 for (let i = 0; i < btnList.length; i++) {

     btnList[i].addEventListener("click", function() {

         for (let j = 0; j < btnList.length; j++) {

             btnList[j].classList.remove("active")
         }
         btnList[i].classList.add("active")
     })
    
 }
