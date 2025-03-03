// Question #3
let userPassword = "asdasdasdasda";
// เริ่มเขียนโค้ดตรงนี้
userPassword.length;
const checkPasswordStrength = (pass) => {
	warningPass = "";
	if (pass.length < 6) {
		warningPass = "Weak (╬▔皿▔)╯";
	} else if (pass.length >= 6 && pass.length <= 10) {
		warningPass = "Medium （︶^︶） ￣へ￣";
		// console.log("warningPass:", warningPass);
	} else if (pass.length > 10) {
		warningPass = "Strong (〃￣︶￣)人(￣︶￣〃)";
		// console.log("warningPass: ", warningPass);
	} else {
		warningPass = "Password is wrong ( ˘︹˘ )";
		// console.log("warningPass: ", warningPass);
	}
	return warningPass;
};

console.log(checkPasswordStrength(userPassword));
