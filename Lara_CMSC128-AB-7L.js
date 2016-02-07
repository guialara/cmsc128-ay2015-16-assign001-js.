/*
	Name: Guia Carmella B. Lara
	Section: CMSC 128 AB-7L
	Program Description:	Library of Functions:	number to word and vice versa
							accepts words and the 2nd argument (JPY, PHP, USD)
							accepts number and the number of jumps with the delimiter
	Progress: 
		Feb.8, 2016: Fully working numToWords() -> uses console.log() for output
*/

function numToWords(number){
	var num = parseInt(number);
	var str = number.toString().split("");
	var word = "";
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
	var teen = ['','eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen','seventeen','eighteen', 'nineteen'];
	var tens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var upper = ['hundred','thousand','million'];
	var div;
	var mod;
	var toStr;
	var teenBool = false;
	if(num != NaN){
		if(str.length == 7){
			if(num == 1000000){
				word = ones[1]+" "+upper[3]+word;
			}else{
				console.log("not within the scope!");
			}
		}else if(str.length == 6){
			for(var j=6; j > 0; j-=1){
				if(j==6){
					div = parseInt(num/100000);
					mod = num%100000;
					word = ones[div]+" "+upper[0];
				}else if(j==5){
					div = parseInt(mod/10000);
					mod = mod%10000;
					toStr = mod.toString().split("");
					if(div == 0){
						if(mod == 0){
							word = word+" "+upper[1];
							break;
						}else if(toStr<=4){
							continue;
						}
					}else if(div == 1 && toStr.length == 4){
						word = word+" "+teen[parseInt(toStr[0])];
						teenBool = true;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==4){
					if(!teenBool){
						div = parseInt(mod/1000);
						mod = mod%1000;
						toStr = mod.toString().split("");
						if(div == 0){
							if(mod==0){
								word = word+" "+upper[1];
								break;
							}else if(toStr.length <= 3){
								word = word+" "+upper[1];
								continue;
							}
						}else{
							word = word+" "+ones[div]+" "+upper[1];
						}
					}else{
						div = parseInt(mod/1000);
						mod = mod - (div*1000);
						word = word+" "+upper[1];
						teenBool = false;
					}
				}else if(j==3){
					div = parseInt(mod/100);
					mod = mod%100;
					toStr = mod.toString().split("");
					if(div==0){
						if(mod==0){
							break;
						}else{
							continue;
						}
					}else{
						word = word+" "+ones[div]+" "+upper[0];
					}
				}else if(j==2){
					div = parseInt(mod/10);
					mod = mod%10;
					toStr = mod.toString().split("");
					if(div == 0){
						if(mod == 0){
							break;
						}else if(toStr==1){
							continue;
						}
					}else if(div == 1 && toStr.length == 1){
						word = word+" "+teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==1){
					div = parseInt(mod/1);
					if(div==0){
						break;
					}else{
						word = word+" "+ones[div];
						break;
					}
				}
			}
		}else if(str.length == 5){
			for(var j=5; j > 0; j-=1){
				if(j==5){
					div = parseInt(num/10000);
					mod = num%10000;
					toStr = mod.toString().split("");
					if(div == 1 && toStr.length == 4){
						word =teen[parseInt(toStr[0])]+" "+upper[1];
						teenBool = true;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==4){
					if(!teenBool){
						div = parseInt(mod/1000);
						mod = mod%1000;
						toStr = mod.toString().split("");
						if(div == 0){
							if(mod==0){
								word = word+" "+upper[1];
								break;
							}else if(toStr.length <= 3){
								word = word+" "+upper[1];
								continue;
							}
						}else{
							word = word+" "+ones[div]+" "+upper[1];
						}
					}else{
						div = parseInt(mod/1000);
						mod = mod - (div*1000);
						word = word+" "+upper[1];
						teenBool = false;
					}
				}else if(j==3){
					div = parseInt(mod/100);
					mod = mod%100;
					toStr = mod.toString().split("");
					if(div==0){
						if(mod==0){
							break;
						}else{
							continue;
						}
					}else{
						word = word+" "+ones[div]+" "+upper[0];
					}
				}else if(j==2){
					div = parseInt(mod/10);
					mod = mod%10;
					toStr = mod.toString().split("");
					if(div == 0){
						if(mod == 0){
							break;
						}else if(toStr==1){
							continue;
						}
					}else if(div == 1 && toStr.length == 1){
						word = word+" "+teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==1){
					div = parseInt(mod/1);
					if(div==0){
						break;
					}else{
						word = word+" "+ones[div];
						break;
					}
				}
			}
		}else if(str.length == 4){
			for(var j=4; j > 0; j-=1){
				if(j==4){
					div = parseInt(num/1000);
					mod = num%1000;
					word = ones[div]+" "+upper[1];
				}else if(j==3){
					div = parseInt(mod/100);
					mod = mod%100;
					toStr = mod.toString().split("");
					if(div==0){
						if(mod==0){
							break;
						}else{
							continue;
						}
					}else{
						word = word+" "+ones[div]+" "+upper[0];
					}
				}else if(j==2){
					div = parseInt(mod/10);
					mod = mod%10;
					toStr = mod.toString().split("");
					if(div == 0){
						if(mod == 0){
							break;
						}else if(toStr==1){
							continue;
						}
					}else if(div == 1 && toStr.length == 1){
						word = word+" "+teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==1){
					div = parseInt(mod/1);
					if(div==0){
						break;
					}else{
						word = word+" "+ones[div];
						break;
					}
				}
			}
		}else if(str.length == 3){
			for(var j=3; j > 0; j-=1){
				if(j==3){
					div = parseInt(num/100);
					mod = num%100;
					word = ones[div]+" "+upper[0];
				}else if(j==2){
					div = parseInt(mod/10);
					mod = mod%10;
					toStr = mod.toString().split("");
					if(div == 0){
						if(mod == 0){
							break;
						}else if(toStr==1){
							continue;
						}
					}else if(div == 1 && toStr.length == 2){
						word = word+" "+teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==1){
					div = parseInt(mod/1);
					if(div==0){
						break;
					}else{
						word = word+" "+ones[div];
						break;
					}
				}
			}
		}else if(str.length == 2){
			for(var j=3; j > 0; j-=1){
				if(j==2){
					div = parseInt(num/10);
					mod = num%10;
					toStr = mod.toString().split("");
					if(div == 1 && toStr.length == 1){
						word = teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==1){
					div = parseInt(mod/1);
					if(div==0){
						break;
					}else{
						word = word+" "+ones[div];
						break;
					}
				}
			}		
		}else if(str.length == 1){
			word = ones[num];
		}
		console.log(word+"\n");	
	}else{
		console.log("Not a number!\n");
	}
	return null;
}

function wordsToNum(){
	return null;
}

function wordsToCurrency(){
	return null;
}

function numberDelimited(){
	return null;
}
