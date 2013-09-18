/*

 Nec.Js v1.0.0
 Necdet_Yazilimlari - WwW.NeCMaN.Tr.Gg - Necdet UYGUR

 functions for call:	_, n, nec, N, NEC, Nec

 * version			: return script	version										: _.version
 * about			: return script	about										: _.about
 * color			: return default	color									: _.color
 * backgroundColor	: return default	background	color						: _.backgroundColor
 * thisFile			: return running	file									: _.thisFile
 * d				: return document.getElementById							: _.d(id)
 * a				: return alert												: _.a(string)
 * title			: return title	replace										: _.title
 * style			: return default	style									: _.style
 * na.i				: return Necdet_Yazilimlari	alphabet	input				: _.na.i(string)
 * na.o				: return Necdet_Yazilimlari	alphabet	output				: _.na.o(string)
 * np.i				: return Necdet_Yazilimlari	encryption	input				: _.np.i(string)
 * np.o				: return Necdet_Yazilimlari	encryption	output				: _.np.o(string)
 * w				: return document.writeln									: _.w(string)
 * get				: return get	method	variable							: _.get(string)
 * encode64			: return code64	encryption	input							: _.encode64(string)
 * decode64			: return code64	encryption	output							: _.decode64(string)
 * rnd				: return random	number										: _.rnd(digit)
 * rndColor			: return random	color										: _.rndColor
 * rndSym			: return random	symbol										: _.rndSym(digit)
 * factorial		: return inputted	number	factorial						: _.factorial(number)
 * reload			: return window.location.reload								: _.reload()
 * hr				: return window.location.href								: _.hr('link')
 * msa				: return styled	fixed	div									: _.msa('your	message',	time)
 * msaHide			: return hide	for	msa										: _.msaHide()
 * forSign			: return Necdet_Yazilimlari	signed	image					: _.forSign()
 * sign				: return Necdet_Yazilimlari	signed	image	print	screen	: _.sign()
 * img				: return Necdet_Yazilimlari	32x32	image					: _.img
 * yn				: return yes	or	no	question							: _.yn(string)
 * q				: return input	question									: _.q(string,	string)
 * date				: return day	month	year								: _.date
 * win				: return open	new	window									: _.win(link,	width,	height)
 * create			: return create	new	object									: _.create(string)
 * str_html			: return stiring	to	html	char						: _.str_html(string)
 * html_str			: return html	to	string	char							: _.html_str(string)
 * d				: return document.getElementById							: _.d(id)
 */

var msatm;
_ = {
	version : "1.0.0",
	about : "Necdet_Yazilimlari - WwW.NeCMaN.Tr.Gg - Necdet UYGUR",
	color : "#222",
	backgroundColor : "#f2f2f2",
	thisFile : (function () {
		return window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
	})(),
	d : function (x) {
		return document.getElementById(x);
	},
	a : function (x) {
		if (x == undefined) {
			return (alert(_.about));
		} else {
			return alert(x);
		}
	},
	title : function (x) {
		if (x == undefined) {
			return (document.title = _.about);
		} else {
			return document.title = x;
		}
	},
	style : (function () {
		document.write("<style>body,html,div,span{margin:0;padding:0;color:#000;background-color:#fff;font-family:sans-serif,arial;}img{border:0;}</style>");
	})(),
	na : {
		i : function (x) {
			var mtn = x.toUpperCase();
			var ksp = mtn.split('');
			var i = 0;
			var yksp = "";
			while (i <= ksp.length - 1) {
				if (ksp[i] == "0") {
					yksp += "/11111"
				}
				if (ksp[i] == "1") {
					yksp += "/01111"
				}
				if (ksp[i] == "2") {
					yksp += "/00111"
				}
				if (ksp[i] == "3") {
					yksp += "/00011"
				}
				if (ksp[i] == "4") {
					yksp += "/00001"
				}
				if (ksp[i] == "5") {
					yksp += "/00000"
				}
				if (ksp[i] == "6") {
					yksp += "/10000"
				}
				if (ksp[i] == "7") {
					yksp += "/11000"
				}
				if (ksp[i] == "8") {
					yksp += "/11100"
				}
				if (ksp[i] == "9") {
					yksp += "/11110"
				}
				if (ksp[i] == "A") {
					yksp += "/01"
				}
				if (ksp[i] == "B") {
					yksp += "/1000"
				}
				if (ksp[i] == "C") {
					yksp += "/1010"
				}
				if (ksp[i] == "D") {
					yksp += "/100"
				}
				if (ksp[i] == "E") {
					yksp += "/0"
				}
				if (ksp[i] == "F") {
					yksp += "/0010"
				}
				if (ksp[i] == "G") {
					yksp += "/110"
				}
				if (ksp[i] == "H") {
					yksp += "/0000"
				}
				if (ksp[i] == "I") {
					yksp += "/00"
				}
				if (ksp[i] == "J") {
					yksp += "/0111"
				}
				if (ksp[i] == "K") {
					yksp += "/101"
				}
				if (ksp[i] == "L") {
					yksp += "/0100"
				}
				if (ksp[i] == "M") {
					yksp += "/11"
				}
				if (ksp[i] == "N") {
					yksp += "/10"
				}
				if (ksp[i] == "O") {
					yksp += "/111"
				}
				if (ksp[i] == "P") {
					yksp += "/0110"
				}
				if (ksp[i] == "Q") {
					yksp += "/1101"
				}
				if (ksp[i] == "R") {
					yksp += "/010"
				}
				if (ksp[i] == "S") {
					yksp += "/000"
				}
				if (ksp[i] == "T") {
					yksp += "/1"
				}
				if (ksp[i] == "U") {
					yksp += "/001"
				}
				if (ksp[i] == "V") {
					yksp += "/0001"
				}
				if (ksp[i] == "W") {
					yksp += "/011"
				}
				if (ksp[i] == "X") {
					yksp += "/1001"
				}
				if (ksp[i] == "Y") {
					yksp += "/1011"
				}
				if (ksp[i] == "Z") {
					yksp += "/1100"
				}
				if (ksp[i] == ".") {
					yksp += "/010101"
				}
				if (ksp[i] == ",") {
					yksp += "/110011"
				}
				if (ksp[i] == "!") {
					yksp += "/00110"
				}
				if (ksp[i] == "?") {
					yksp += "/001100"
				}
				if (ksp[i] == " ") {
					yksp += "/ "
				}
				i++;
			}
			return (yksp);
		},
		o : function (x) {
			var mtn = x.toUpperCase();
			var ksp = mtn.split('/');
			var i = 0;
			var yksp = "";
			while (i <= ksp.length - 1) {
				if (ksp[i] == "11111") {
					yksp += "0"
				}
				if (ksp[i] == "01111") {
					yksp += "1"
				}
				if (ksp[i] == "00111") {
					yksp += "2"
				}
				if (ksp[i] == "00011") {
					yksp += "3"
				}
				if (ksp[i] == "00001") {
					yksp += "4"
				}
				if (ksp[i] == "00000") {
					yksp += "5"
				}
				if (ksp[i] == "10000") {
					yksp += "6"
				}
				if (ksp[i] == "11000") {
					yksp += "7"
				}
				if (ksp[i] == "11100") {
					yksp += "8"
				}
				if (ksp[i] == "11110") {
					yksp += "9"
				}
				if (ksp[i] == "01") {
					yksp += "A"
				}
				if (ksp[i] == "1000") {
					yksp += "B"
				}
				if (ksp[i] == "1010") {
					yksp += "C"
				}
				if (ksp[i] == "100") {
					yksp += "D"
				}
				if (ksp[i] == "0") {
					yksp += "E"
				}
				if (ksp[i] == "0010") {
					yksp += "F"
				}
				if (ksp[i] == "110") {
					yksp += "G"
				}
				if (ksp[i] == "0000") {
					yksp += "H"
				}
				if (ksp[i] == "00") {
					yksp += "I"
				}
				if (ksp[i] == "0111") {
					yksp += "J"
				}
				if (ksp[i] == "101") {
					yksp += "K"
				}
				if (ksp[i] == "0100") {
					yksp += "L"
				}
				if (ksp[i] == "11") {
					yksp += "M"
				}
				if (ksp[i] == "10") {
					yksp += "N"
				}
				if (ksp[i] == "111") {
					yksp += "O"
				}
				if (ksp[i] == "0110") {
					yksp += "P"
				}
				if (ksp[i] == "1101") {
					yksp += "Q"
				}
				if (ksp[i] == "010") {
					yksp += "R"
				}
				if (ksp[i] == "000") {
					yksp += "S"
				}
				if (ksp[i] == "1") {
					yksp += "T"
				}
				if (ksp[i] == "001") {
					yksp += "U"
				}
				if (ksp[i] == "0001") {
					yksp += "V"
				}
				if (ksp[i] == "011") {
					yksp += "W"
				}
				if (ksp[i] == "1001") {
					yksp += "X"
				}
				if (ksp[i] == "1011") {
					yksp += "Y"
				}
				if (ksp[i] == "1100") {
					yksp += "Z"
				}
				if (ksp[i] == "010101") {
					yksp += "."
				}
				if (ksp[i] == "110011") {
					yksp += ","
				}
				if (ksp[i] == "00110") {
					yksp += "!"
				}
				if (ksp[i] == "001100") {
					yksp += "?"
				}
				if (ksp[i] == " ") {
					yksp += " "
				}
				i++;
			}
			return (yksp);
		}
	},
	np : {
		i : function (x) {
			x = x + "";
			var y = x.split('');
			var z = "";
			for (i = 0; i <= (y.length - 1); i++) {
				z += 10 - parseInt(y[i]);
			};
			return (z);
		},
		o : function (x) {
			x = x + "";
			var y = x.split('');
			var z = "";
			for (i = 0; i <= (y.length - 1); i++) {
				z += 10 - parseInt(y[i]);
			};
			return (z);
		}
	},
	w : function (x) {
		return document.writeln(x);
	},
	get : function (x) {
		if (window.location.href.indexOf("?") != "-1") {
			var y = window.location.href.split('?')[1].split('&');
			for (i = 0; i <= (y.length - 1); i++) {
				if (x == y[i].split('=')[0]) {
					return (y[i].split('=')[1]);
				}
			}
		} else {
			return undefined;
		}
	},
	encode64 : function (input) {
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var output = "";
		var chr1,
		chr2,
		chr3 = "";
		var enc1,
		enc2,
		enc3,
		enc4 = "";
		var i = 0;
		do {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			};
			output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = "";
		} while (i < input.length);
		return output;
	},
	decode64 : function (input) {
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var output = "";
		var chr1,
		chr2,
		chr3 = "";
		var enc1,
		enc2,
		enc3,
		enc4 = "";
		var i = 0;
		var base64test = /[^A-Za-z0-9\+\/\=]/g;
		if (base64test.exec(input)) {
			alert("err");
		};
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do {
			enc1 = keyStr.indexOf(input.charAt(i++));
			enc2 = keyStr.indexOf(input.charAt(i++));
			enc3 = keyStr.indexOf(input.charAt(i++));
			enc4 = keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			};
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			};
			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = "";
		} while (i < input.length);
		return output;
	},
	rnd : function (x) {
		return Math.round(Math.random() * parseFloat(x));
	},
	rndColor : (function () {
		var i = 1;
		var boya = '#';
		while (i <= 6) {
			boya += Math.round(Math.random() * parseFloat(15)).toString(16);
			i++;
		};
		return (boya);
	})(),
	rndSym : function (x) {
		var sonuc = "";
		var harsay = 'ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxyz0123456789';
		var i = 1;
		while (i <= x) {
			sonuc += harsay.split('')[Math.round(Math.random() * parseFloat(harsay.length - 1))];
			i++;
		};
		return sonuc;
	},
	factorial : function (x) {
		var i = parseFloat(fac);
		if (i == 0) {
			return 1;
		} else {
			var sayi = 1;
			while (1 <= i) {
				sayi = i * sayi;
				i--;
			}
			return sayi;
		}
	},
	reload : function () {
		return window.location.reload();
	},
	hr : function (x) {
		return window.location.href = x;
	},
	msa : function (x, y) {
		clearTimeout(msatm);
		msatm = setTimeout("_.msaHide();", parseFloat(y));
		d('msa').style.display = 'block';
		d('msa').innerHTML = x;
	},
	msaHide : function () {
		d("msa").innerHTML = "";
		d("msa").style.display = "none";
	},
	forSign : function () {
		return ('<center><img alt="' + _.about + '" title="' + _.about + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAoCAIAAABo2KMqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZrNmeMgDIbTcbaErWEbSCebw5y2ApfhEmYAgRCSQGA743iHPHMYm/+XT0IouX3MzwiBm6v868/f+ddDwLGKvG7zYxFwQCcvCxIpn7wGYLmqOq/f3R/XRXddX3Fsdu9Xu8qrZ6qwfpMCVjBr9gx6bp0Wr8/mB0mZFBq87s81D7I8OAsoXp/3UBCe0sM4tsfi+pJjkI7cAM3ylj26Mtd9bVZQtE9fYflkfvw5EUJGL+Zl8zyTl1t8kEpSGOjGzZnuMBBaV3hZ8MrKJIojcsW36d2yUH3x5lpLTSyGPdZUtltfUfp+moFFAlWaRCT0BIqZFyFHVKH9m2uGUgFeb1439rN4PZYgADdd5pBiAcw4rRbEiGsvhIYr1uyJ1sRyvbmfi+HfuuxR9WKmvliQAcsnJ8OQvu4e3Pp8JH9fnBLhvEg0uT+naNA/qs3D3p3KC0Wtno8D/it5Nu/Ighx1x79NX9n0voUX6EjaO31ZiSdwv2Nr/sw8PPgfMF8CTHdliunq/ktv/iL/1YiBOnihg0oRWCX+KsIvdHcRH/rw7O9id6k3/XzUmqd3rRhsu7+XwSzFZ/mvBuq3LtoY38s1NYJb6cjeGklzclvuj4gGJYZhmnn3vi4pmPlwfgLRsJXTCOPqUBrzH8t/gRdvR2RtiV0d5S59MZdvsjAzGWYPp1fY5b/o7OVxKWn+CF5ykSqa9s7/N97N1lePKMxgYvLKafvaCcCs1T2W9+10ufH1ILTuzp3KnETX5S/MqL+mVnm7vmhyleqr5shKXnHeQAiuLN20yEYMLR7abWhCBjR40eCAeagaL9WRafYIlNxljdyEc76V6I3c9WLGpaGvULQui+87bELIAvHe4IpIEztpt6C9z4T4xv94jud4fXXzSlYYFhPvuH4FceZCB7CSlNyBJhVwJIsRu869FWlDOVaxeVKMp/LCDWYZgSyobKOoxsKmKrwkBpaXzgPyscptEpt2Li/hTaKFoHTKby3wybRH+AaOrFbhpY91EC8ZVez2X4r3VdPtuPIstiN4VcY6gpeaRGW8ascivufno3ZaEaOjEUZhi0fZY2Ws3bxqgXvnl7W0uRL6cgeRj6z8fWF5PnpffoS+6PFIvpvcysvMZCGvnppYp0b/Ku/H8jlXWdXr5jl5jbGdvHbw6vm166wTf7868nvqn173CxWYrRLSxTK8AAAAAElFTkSuQmCC" /></center>');
	},
	sign : function () {
		document.write("<br><br>" + _.forSign());
	},
	img : (function () {
		return ('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEXSURBVFhH3VfRDsMgCOyn++fdMLOhBDlAui028WGzzOO8A3Yc//C01s7MIuyZuBFz5U5fvD+E1iemA/DG8ndHfAcxNk7nQwc+BgBlQxj3BzCy1Nj4CgPbANAsOliduoBeqGJAWtRlwwgAVlDUWvAoAGRXZtULXBkDs3olQaU0gIrhLHNLN1qMKkJEKz+EA+W6iTSnWzNCgRFxlnd43qzQFaBE+P4SA5pW0BXy/WUNyMOQeKVmTACzIcM6xJu9bGa3gUTUafekE7FgCQAhJLN3aFfFB5oUA3IckwwgPZgApI2sKuax508YsARZpgG6u/0ZmNUDJMKSK7CmHQ0AUn6oEqKqlvlXpA0roWak2LOLcGWVt+3MD74AdFgZkLhbNp0AAAAASUVORK5CYII%3D')
	})(),
	yn : function (x) {
		return confirm(x);
	},
	q : function (x, y) {
		return prompt(x, y);
	},
	date : (function () {
		return ("<input style='color:#2300ca;border:1px solid #999;padding:2px;text-align:center;width:200px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background:#aaa;color:#eee;' value='" + new Date().getDate() + " " + new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık")[new Date().getMonth()] + " " + new Date().getFullYear() + "' disabled />");
	})(),
	win : function (x, y, z) {
		window.open(x, "", "centerscreen=no, resizable=no, scrollbars=yes, dependent=no, dialog=no, minimizable=no, menubar=no, toolbar=no, location=no, personalbar=no, status=no, titlebar=no, left=4, top=4, height=" + z + ", width=" + y + ",");
	},
	create : function (x, y) {
		obj = document.createElement(x);
		obj.setAttribute("id", y);
		document.getElementsByTagName('html')[0].appendChild(obj);
		return y;
	},
	str_html : function (str) {
		if (str == "")
			alert("empty");
		i = 0;
		ret_str = "";
		while (i < str.length) {
			ret_str += "&#" + str.charCodeAt(i) + ";";
			i++;
		}
		return ret_str;
	},
	html_str : function (str) {
		if (str == "")
			alert("empty");
		arr_ = str.split(";");
		ret_str = "";
		for (i = 0; i < arr_.length; i++) {
			if (arr_[i] != "") {
				arr_[i] = arr_[i].replace(/&#/gi, '');
				ret_str += String.fromCharCode(arr_[i]);
			}
		}
		return ret_str;
	},
};
n = _;
nec = _;
N = _;
NEC = _;
Nec = _;

function d(x) {
	return document.getElementById(x);
};
(function () {
	var x = document.createElement("div");
	x.setAttribute('id', 'msa');
	x.setAttribute('style', 'display:none;background-color:#eee;padding:4px;width:100%;border:0;border-bottom:1px solid #aaa;position:fixed;top:0;left:0;z-index:999;font-family:sans-serif,arial;cursor:default;');
	document.getElementsByTagName('html')[0].appendChild(x);
})();