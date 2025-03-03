// Question #3
let userPassword = "asdasdasdasda";
// เริ่มเขียนโค้ดตรงนี้
userPassword.length;
const checkPasswordStrength = (pass) => {
	warningPass = "";
	if (pass.length < 6) {
		warningPass = "Weak";
	} else if (pass.length >= 6 && pass.length <= 10) {
		warningPass = "Medium";
		console.log("warningPass: ", warningPass);
	} else if (pass.length > 10) {
		warningPass = "Strong";
		console.log("warningPass: ", warningPass);
	} else {
		warningPass = "Password is wrong";
		console.log("warningPass: ", warningPass);
	}
	return warningPass;
};

console.log(checkPasswordStrength(userPassword));
