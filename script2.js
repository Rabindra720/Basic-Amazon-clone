// // alert("Welcome to website whatsup!");
// // let headings=document.getElementsByClassName("heading");
// // console.log(headings);
// // console.dir(headings);
// // let heading1=document.getElementById("nochange");
// // console.log(heading1);
// // console.dir(heading1);

// // let parg=document.getElementsByTagName("p");
// // console.dir(parg);

// // // yesari bhanda query selector use garda je pani access garna milxa jastai id class tag 
// // let new12=document.querySelector("p");
// // console.dir(new12); 
// // // returns first element 
// // let new11=document.querySelectorAll("p");
// // console.dir(new11);
// // it returns all paragrpah as node list.
// // ani arko kura query selector prayog garda id lai # class lai. rakhnu parxa hai.
// let hhh=document.querySelector("h2");
// // hhh.innerText = hhh.innerText + "from Aona college"
// console.dir(hhh.innerText);
// hhh.innerText = hhh.innerText + "from Aona college"
// // ani arko kura console ma yo tag ko inner text atawa inner htl access garna ko lagi hhh.innerText athawa hhh.innerHTML lekhne ho .
// // innerHTML le purai tag haru sahit dinxa text vane innerText le text matrai dinxa.
// // Arrtribute bhaneko aaba id class haru
// let par=document.querySelector("p");
// console.log(par);
// let pp=par.getAttribute("class");
// console.log(pp);

// let hhw=document.querySelector("h2");
// // console.log(hhw.getAttribute("id"));
// // If YOU WANT TO CHNAGE ATTRIBUTE VALUE THEN
// let hh2=(hhw.setAttribute("id","new id is changed."));
// console.log(hh2);

// // regarding style if you want to see style or change 
// let h2s2=document.querySelector("h2");
// console.log(h2s2.style.backgroundColor="green");
// h2s2.innerText="My anem is aRujan";
// h2s2.style.fontSize="14px";
// // creating new element
// let newbtn=document.createElement("button");
// newbtn.innerText="THis is new button";
// newbtn.style.backgroundColor="yellow";
// newbtn.style.color="black";
// console.log(newbtn);
// // since i created new eleemnt and if I want to add in my browser then 
// // lets say i want to add that at end of h2 node.

// let div=document.querySelector("div");
// div.append(newbtn);
// // append chai div koend ma aauxa 
// let newbuttn=document.createElement("button");
// newbuttn.innerText="THis is prepend property";
// newbuttn.style.borderRadius="0%";
// h2s2.prepend(newbuttn);
// // prepend chai start ma ho aaba 
// // before ra after chai node bhanda thyakai bahira athawa bhitra ho
// let newpa=document.createElement("p");
// newpa.innerText="Thia ia parAGraph";
// div.before(newpa);
// // after chai
// let newwww=document.createElement("div");
// newwww.style.height="100px";
// newwww.style.width="100px";
// newwww.innerText="This is use of after ";
// newwww.style.backgroundColor="yellow";
// div.after(newwww);
// if you want to delete then
// newbuttn.remove();
// if you want to write or add class name then we use class list
let new22=document.getElementsByClassName("headings");
new22[0].classList.add("newprop");

