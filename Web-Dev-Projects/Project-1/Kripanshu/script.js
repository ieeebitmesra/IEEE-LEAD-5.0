var light=document.getElementById("light");
light.onclick=function(){
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    light.src="images/dark.png";
  }
  else {
    light.src="images/light.png";
  }
  }


var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.','Frontend Developer', 'Competitive Programmer.'],
    typeSpeed: 70,
  });

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents=document.getElementsByClassName("tab-contents");
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  const prevbtn=document.querySelector(".prev");
  const nextbtn=document.querySelector(".next");
  const imgcontainer=document.querySelector(".prjimg")
  const imgs=document.querySelectorAll(".prjpic")
  let cur=1;
  let timeout;
  nextbtn.addEventListener("click",()=>{
    cur++;
    clearTimeout(timeout)
    update();
  })
  prevbtn.addEventListener("click",()=>{
    cur--;
    clearTimeout(timeout)
    update();
  })
  update()
  function update(){
    if(cur>imgs.length) cur=1
    if(cur<1) cur=imgs.length
    imgcontainer.style.transform=`translateX(${-(cur-1)*100}%)`
    timeout=setTimeout(()=>{
      cur++;
      update();
    },2000)
  }
  var sidemenu=document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right="40px";
  }
  function closemenu(){
    sidemenu.style.right="-200px";
  }
  
  async function fetchRating() {
    const username = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (!username) {
        resultDiv.innerHTML = "<p class='error'>Please enter a username.</p>";
        return;
    }
    try {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
        const data = await response.json();
        if (data.status === "OK") {
            const user = data.result[0];
            resultDiv.innerHTML = `
                <p><strong>User:</strong> ${user.handle}</p>
                <p><strong>Rating:</strong> ${user.rating}</p>
                <p><strong>Max Rating:</strong> ${user.maxRating}</p>
                <p><strong>Max Rating:</strong> ${user.maxRank}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p class='error'>Error: ${data.comment}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = "<p class='error'>An error occurred while fetching data.</p>";
        console.error(error);
    }
}