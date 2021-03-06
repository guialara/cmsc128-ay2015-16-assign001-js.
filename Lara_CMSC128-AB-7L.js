/*
	Name: Guia Carmella B. Lara
	Section: CMSC 128 AB-7L
	Program Description:	Library of Functions:	number to word and vice versa
							accepts words and the 2nd argument (JPY, PHP, USD)
							accepts number and the number of jumps with the delimiter
	Progress: 
		Feb.8, 2016: 	Fully working numToWords() -> uses console.log() for output
		Feb.9, 2016: 	Fully working wordsToNum() and wordsToCurrency() -> uses console.log() for output
				Some bugs discovered and fixed for fxn numToWords().
				Fully working numbersDelimited() -> uses console.log() for output
				Passed the Assignment without Documentation
		Feb.11, 2016:	Fully Documented
				Finished Documentation

	Status: Finished
*/

function numToWords(number){
	var num = parseInt(number);//contains the number and is an Integer
	var str = number.toString().split("");//Splitted the number tto get ech char and length of the number
	var word = "";//will contain the final output
	//arrays for the translating numbers to words - index - corresponds to their place in counting
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
	var teen = ['','eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen','seventeen','eighteen', 'nineteen'];
	var tens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var upper = ['hundred','thousand','million'];
	//variables decalared to be used in a accumulative way
	var div;
	var mod;
	var toStr;
	var teenBool = false;//for checking if we will use teen
	if(num != NaN){//checking if the number entered are words
		if(str.length == 7){//if length of the number given is 7
			if(num == 1000000){
				word = ones[1]+" "+upper[2]+word;//sure that it one million since it is the limit
			}else{//if num exceeded 1M
				console.log("One to one million only!");
				return null;
			}
		}else if(str.length == 6){//length is 6
			for(var j=6; j > 0; j-=1){//traverse the length of the num then divide starting from 100000
				if(j==6){
					div = parseInt(num/100000);
					mod = num%100000;
					word = ones[div]+" "+upper[0];
				}else if(j==5){
					div = parseInt(mod/10000);
					mod = mod%10000;
					toStr = mod.toString().split("");
					if(div == 0){//checks if there is no nonzero number following
						if(mod == 0){//checks if there is no more non-zero numbers behind
							word = word+" "+upper[1];
							break;
						}else if(toStr<=4){
							continue;
						}
					}else if(div == 1 && toStr.length == 4){//checks if the div is 1 with followin nonzero digit
						word = word+" "+teen[parseInt(toStr[0])];
						teenBool = true;//needs this to skip a process on the next iteration
					}else{
						word = word+" "+tens[div];
					}
				}else if(j==4){
					if(!teenBool){//where we use teenBool to skip the ff process
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
					}else{//need to do this so that the program will not be confused
						div = parseInt(mod/1000);
						mod = mod - (div*1000);
						word = word+" "+upper[1];
						teenBool = false;//returns to false so can be used again;
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
					}else if(div == 1 && mod > 0){
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
		}else if(str.length == 5){//if length is 5
			for(var j=5; j > 0; j-=1){//traverses the number - process is the same as the one with length 6
				if(j==5){
					div = parseInt(num/10000);
					mod = num%10000;
					toStr = mod.toString().split("");
					if(div == 1 && toStr.length == 4){
						word =teen[parseInt(toStr[0])];
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
					}else if(div == 1 && mod > 0){
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
		}else if(str.length == 4){//with length 4
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
					}else if(div == 1 && mod > 0){
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
		}else if(str.length == 3){//with length 3
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
					}else if(div == 1 && mod > 0){
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
		}else if(str.length == 2){//with length 2
			for(var j=2; j > 0; j-=1){
				if(j==2){
					div = parseInt(num/10);
					mod = num%10;
					toStr = mod.toString().split("");
					if(div == 1 && mod > 0){
						word = teen[parseInt(toStr[0])];
						j=0;
					}else{
						word = tens[div];
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
		}else if(str.length == 1){//length 1
			word = ones[num];
		}else{//if encountered with one billion
			console.log("One to one million only!");
			return null
		}
		console.log(word+"\n");	
	}else{//for strings
		console.log("Not a number!\n");
		return null;
	}
	return word;
}

function wordsToNum(words){
	var splitWords = words.toString().split(" ");//splits the words to traverse through it
	//works like a hashmap
	var map = [];
	map["zero"] = 0;
	map["one"] = 1;
	map["two"] = 2;
	map["three"] = 3;
	map["four"] = 4;
	map["five"] = 5;
	map["six"] = 6;
	map["seven"] = 7;
	map["eight"] = 8;
	map["nine"] = 9;
	map["ten"] = 10;
	map["eleven"] = 11;
	map["twelve"] = 12;
	map["thirteen"] = 13;
	map["fourteen"] = 14;
	map["fifteen"] = 15;
	map["sixteen"] = 16;
	map["seventeen"] = 17;
	map["eighteen"] = 18;
	map["nineteen"] = 19;
	map["twenty"] = 20;
	map["thirty"] = 30;
	map["forty"] = 40;
	map["fifty"] = 50;
	map["sixty"] = 60;
	map["seventy"] = 70;
	map["eighty"] = 80;
	map["ninety"] = 90;
	map["hundred"] = 100;
	map["thousand"] = 1000;
	map["million"] = 1000000;
	var num = 0;//accumulates the num
	var temp = 0;//used for cases of 'hundred thousand'
	for(var i = 0; i < splitWords.length; i+=1){//traverses through the words
		if(splitWords[i] == "million"){//if million, multiply
			num = num * map[splitWords[i]];
		}else if(splitWords[i] == "thousand"){//if thousand multiply
			num = num * map[splitWords[i]];
		}else if(splitWords[i] == "hundred"){//if hundred, get the preceeding word then multiply then add to the num
			temp = map[splitWords[i-1]] * map[splitWords[i]];
			num = num + temp;
		}else{
			if(splitWords[i+1] == "hundred"){//if saw succeeding word is hundred, just continue
				continue;
			}else{//else just add it
				num = num + map[splitWords[i]];
			}
		}		
	}
	if(num <= 1000000 && num != NaN){//checks if num is over 1M
		console.log(num);
		return num;
	}else{
		console.log("ERROR: Number Exceeded One Million.");
		return null;
	}
}

function wordsToCurrency(wordsToCur){
	var stringNum = wordsToCur.toString().split("'");//splits the string by "'"
	//console.log(stringNum);
	var temp = stringNum[1];//assigns the num to temp
	var num = wordsToNum(temp);//gets the num equivalent of the words used
	var cur = stringNum[3];//assigns the currency
	var words = "";//accumulator
	if(num <= 1000000 && num != null){//checks if num is over 1M
		if(cur === "JPY"){//for JPY
			words = cur+num.toString();
		}else if(cur === "USD"){//for USD
			words = cur+num.toString();
		}else if(cur === "PHP"){//F=for PHP
			words = cur+num.toString();
		}else{//if the currency typed is not among the three
			console.log("Currency that entered is not supported.");
			console.log("Accepted Currency: PHP, JPY, USD");
			return null;		
		}
		console.log(words);
	}else{
		console.log("ERROR: Number exceeded One Million.");
	}
	return null;
}

function numberDelimited(numDe){//given example: "1234,',',3"
	var limited = numDe.toString().split("'");//splits the string by "'"
	var charNum = limited[0].split(",");//splits the num part to rmove the ","
	var numSplit = charNum[0].split("");//splits the num part to traverse each char
	var num = parseInt(charNum[0]);//makes the charNum number part an Int
	var charLim = limited[1];//assigns the delimiter for the number
	var jump = limited[2].split(",");//gets the number of jump aand to remove ","
	var jumpSplit = parseInt(jump[1]);//assigns the jump here
	var delim = "";//accumulator for the answer	
	var temp = "";
	if(num <= 1000000){//checks if num is over 1M
		if(jumpSplit <= numSplit.length){//checks if number of jumps is bigger than the length of num
			for(var i=0; i < jumpSplit; i+=1){//traveses through the length of the number
				//checks the number in the last place first
				delim = numSplit[(numSplit.length-1)-i]+delim;//puts the num char infront till jump is exhausted
			}
			delim = charLim+delim;//adds the delimiter in front of the accumulated number
			if(numSplit.length - jumpSplit > 0){//accumulates the numbers that are not jumped over
				for(var i = 0; i < numSplit.length-jumpSplit; i+=1){//starts from the first element
					temp = temp+numSplit[i];//accumulates the left numbers
				}
				delim = temp+delim;//puts the accumulated left numbers in front of the jumped over numbers
			}
			console.log(delim);
		}else{
			console.log("To many jumps.");
		}
	}else{
		console.log("ERROR: Number exceeded One Million.");
	}
		
	return null;
}
