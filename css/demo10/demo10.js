// window.addEventListener('load',function(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
// 			var javaobj = JSON.parse(xhttp.response);     
// 			var click=document.getElementById('click');
// 			console.log(click);       
// 			click.addEventListener("onclick",function(){
// 				console.log('ok em ');
// 			});
//         }
//     };
//     xhttp.open("GET", "products.json", true);
//     xhttp.send();
// })
var customers=document.getElementById('customers');
customers.addEventListener("change",genderChanged(customers));
// hàm in ra
function genderChanged(obj){	
	var obj=obj.value;
	var t,test="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			t = JSON.parse(this.responseText);
			if(obj=="all"){
				for(i in t){
					test += 
					'<div class="food">'+
						'<div class="top">' +
							' <img src="icon/'+t[i].type+'.png'+'" alt="">'+
							'<p>'+t[i].name+'</p>'+
						'</div>'+
						'<img class="image" src="images/'+t[i].image+'" alt="">'+
						'<p class="price">'+ '&dollar;'+ t[i].price+'</p>'+
					'</div>';
				}
			document.getElementById("core").innerHTML = test;
			}
			else if(obj=="vegetables"){
				for(i in t){
					 
					if(t[i].type=="vegetables"){
						test +=
						'<div class="food">'+
						'<div class="top">' +
							' <img src="icon/'+t[i].type+'.png'+'" alt="">'+
							'<p>'+t[i].name+'</p>'+
						'</div>'+
						'<img class="image" src="images/'+t[i].image+'" alt="">'+
						'<p class="price">'+ '&dollar;'+ t[i].price+'</p>'+
					'</div>';
					}
					
				}
			document.getElementById("core").innerHTML = test;
			}
			else if(obj=="meat"){
				for(i in t){
					 
					if(t[i].type=="meat"){
						test +=
						'<div class="food">'+
						'<div class="top">' +
							' <img src="icon/'+t[i].type+'.png'+'" alt="">'+
							'<p>'+t[i].name+'</p>'+
						'</div>'+
						'<img class="image" src="images/'+t[i].image+'" alt="">'+
						'<p class="price">'+ '&dollar;'+ t[i].price+'</p>'+
					'</div>';
					}
					
				}
			document.getElementById("core").innerHTML = test;
			}
			else{
				for(i in t){
					 
					if(t[i].type=="soup"){
						test +=
						'<div class="food">'+
						'<div class="top">' +
							' <img src="icon/'+t[i].type+'.png'+'" alt="">'+
							'<p>'+t[i].name+'</p>'+
						'</div>'+
						'<img class="image" src="images/'+t[i].image+'" alt="">'+
						'<p class="price">'+ '&dollar;'+ t[i].price+'</p>'+
					'</div>';
					}
					
				}
			document.getElementById("core").innerHTML = test;
			}
		}
	};
	xmlhttp.open("GET","products.json", true);
	xmlhttp.send();
}
// hàm tìm kiếm
function seach(){
	var txt=document.getElementById('txt').value;
	var n,t,test="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			t = JSON.parse(this.responseText);
			
			for(i in t){
				n=t[i].name;				 
				if(n.indexOf(txt)==0){
					test +=
					'<div class="food">'+
					'<div class="top">' +
						' <img src="icon/'+t[i].type+'.png'+'" alt="">'+
						'<p>'+t[i].name+'</p>'+
					'</div>'+
					'<img class="image" src="images/'+t[i].image+'" alt="">'+
					'<p class="price">'+ '&dollar;'+ t[i].price+'</p>'+
				'</div>';
				}				
			}
			if(test==""){
				test='<div id="no"> <p>not found</p></div>'
			}
			document.getElementById("core").innerHTML = test;
		}

	};
	xmlhttp.open("GET","products.json", true);
	xmlhttp.send();
}


  

