document.getElementById("name").textContent = "강동협";
document.getElementById("bio").textContent = "웹 프로그래밍 응용 배우는 중입니다.";
document.getElementById("contact").textContent = "byd1358@naver.com";
document.getElementById("bth").textContent = "2002년 01월 30일";
document.getElementById("Lab").textContent = "CS Lab 랩장을 맡고 있습니다.";


const languages = ["Python", "C, C++", "Java"];
const languageList = document.getElementById("languages");
languages.forEach(lang => {
    let li = document.createElement("li");
    li.textContent = lang;
    languageList.appendChild(li);
});