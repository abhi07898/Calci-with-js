
var temp=0;
var oprt = 0;
var result=0;
var new_val = 0;
var count=1;
debugger;
function val_hold(a) {
	temp = a;
	document.getElementById("input").value+=temp;
	new_val = document.getElementById("input").value;
}

function oprt_hold(b) {
	oprt = b;
	document.getElementById("input").value =oprt;
	switch (oprt) {
		case '+':
			claculate(symbol='+');
			if(count%2!=0) {
				document.getElementById("input").value ='';
				count++;
			} else {
				document.getElementById("input").value=result;
				count++;
			}
			break;
		case '-':
			claculate(symbol='-');
			if(count%2!=0) {
				document.getElementById("input").value ='';
				count++;

			} else {
				document.getElementById("input").value=result;
				count++;
			}
			break;
		case '*':
			claculate(symbol='*');
			if(count%2!=0) {
				document.getElementById("input").value ='';
				count++;

			} else {
				document.getElementById("input").value=result;
				count++;
			}
			break;
		case '/':
			claculate(symbol='/');
			if(count%2!=0) {
				document.getElementById("input").value ='';
				count++;
			} else {
				document.getElementById("input").value=result;
				count++;
			}
			break;
		case '%':
			claculate(symbol='%');
			if(count%2!=0) {
				document.getElementById("input").value ='';
				count++;
			} else {
				document.getElementById("input").value=result;
				count++;
			}
			break;
	}
}
function claculate(symbol) {		
		var updated = Number(new_val);
		var operation = symbol;  
		if(operation=='+') {
			result = result + updated;		
			console.log(result);	
			new_val = 0;	
		}	
		if(operation=='-') {
			if (result ==  0) {
				result = updated - result;	
			} else {
				result = result - updated;	
			}				
			console.log(result);	
			new_val = 0;	
			}
		if(operation=='*') {
			if (result == 0 ) {
				result = 1 * updated;	
			} else {
				result = result * updated;	
				new_val = 1;
			}		
			console.log(result);	
				
		}
		if(operation=='/') {
			if (result > 0 ) {
				result = result / updated;	
			} else {
				result = updated / 1;	
			}				
			console.log(result);	
			new_val = 1;	
		}
		if(operation=='%') {
			if (result ==  0 ) {
				result = updated;	
			} else {
				result = result%updated;	
			}		
			console.log(result);	
			new_val = 1;	
		}		
}
function clearall() {
	document.getElementById("input").value= '';
	result= 0 ;
}
