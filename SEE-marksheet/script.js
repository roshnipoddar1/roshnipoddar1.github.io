function generateCertificate(){
    const name = document.querySelector("#studentName"). Value;
const symbolNo = document.querySelector("#symbolNo"). Value;
const dob = document.querySelector("#dob"). Value;
const schoolName = document.querySelector("#schoolName"). Value;



document.querySelector("#certName").textContent = name;
document.querySelector("#certSymbolNo").textContent = symbolNo;
document.querySelector("#certDob").textContent = dob;
document.querySelector("#certschoolName").textContent = schoolName;



}