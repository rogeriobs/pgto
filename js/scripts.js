// JavaScript Document
Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
    var n = this,
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSeparator = decSeparator == undefined ? "." : decSeparator,
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
    sign = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};
function formatamoeda( OBJ, key , casas){
	var i,j,uBound;
	if(!casas) casas=2;
	//teclas delete, backspace, shift, nao disparam o evento
	if( key!=16 && !(key>36 && key<41) ){
		invertedSTR = new String("");
		invertedSTR = retiraNaoNumericos ( OBJ );
		invertedSTR = inverteString ( invertedSTR );
		if ( invertedSTR.length < 15+casas ){
			UBound = invertedSTR.length;
		}else{
			UBound = 15+casas;
		}
		for(j=0;j<=casas;j++){
			if ( invertedSTR.length == j ){
				UBound = casas+1;
				invertedSTR = invertedSTR + criazeros(casas-j+1);
			}
		}
		STR = new String("");
		for ( i=0; i<UBound; i++){
			STR = STR + invertedSTR.charAt(i);   
			if (i==casas-1)
				STR = STR + ",";
			if ( (i==casas+2) || (i==casas+5) || (i==casas+8) || (i==casas+11) || (i==casas+14) || (i==casas+17) )
				STR = STR + ".";
		}
  
	  STR = inverteString(STR);
	  STR = trimZerosAEsquerda ( STR );
	  STR = fillZerosAEsquerda ( STR, casas+2 );
	 
	  OBJ.value = STR;
	  
	  posicionaCursor(OBJ, "F", 0)
 	}
}
function retornaKeyCode(evt) {
	var isNav, isIE;
	var theKey;

	if (parseInt(navigator.appVersion.charAt(0)) >= 4) {
		isNav = (navigator.appName == "Netscape") ? true : false;
		isIE = (navigator.appName.indexOf("Microsoft" != -1)) ? true : false;
	}
	if(isNav) 
		theKey = evt.which;
	else if (isIE) 
		theKey = window.event.keyCode;
	return theKey;
}
function retiraNaoNumericos(obj){
	obj.value = obj.value.replace(/(\D)/gi,'');
	return obj.value;
}
function inverteStringOLD( vlr){
 var i; 
 STR = new String("");
 
 for(i=vlr.length; i>=0; i--)
  STR = STR + vlr.charAt(i);
 
 return STR;
}
function inverteString (s){
	return s.split("").reverse().join("");
}
function criazeros(casas){
	var i;
	var j='';
	for(i=0;i<casas;i++){
		j = j+'0';
	}
	return j;
}
function trimZerosAEsquerda( vlr){
 var i;
 STR = new String("");
 
 for (i=0; i<vlr.length; i++)
  if ( ( vlr.charAt(i) != '0') && ( vlr.charAt(i) != '.') )
   break;
 
 for (;i<vlr.length;i++)
  STR = STR + vlr.charAt(i);
  
 return STR;  
}
function fillZerosAEsquerda( vlr, minLength ){
 var i;
 STR = new String("");
 
 vlr= trimZerosAEsquerda (vlr);
 
 for (i=0; i < (minLength - vlr.length); i++)
  STR = "0" + STR;
 
 return STR;  
}
function posicionaCursor(OBJ, LOC, POS){
 
 LOC = LOC.toUpperCase();
 
 //S funciona no IE
 if (identificaBrowser() !="IE")
 
  return;
 
 else
 
 {
  if ((LOC == "I") || (LOC == "M") || (LOC == "F"))
  { 
  
   var posicao;
   
   if (LOC == "I")
    posicao = 0;
   
   if (LOC == "F")
    posicao = OBJ.value.length;
   
   if (LOC == "M")
    posicao = POS;
     
   var tRange = OBJ.createTextRange();
   tRange.move("character",posicao);
   tRange.select();
   
  }
  return;
 
 }
}
function identificaBrowser(){
 var strBrowser;
 
 versao = navigator.appVersion;
 nomeBrowser = navigator.appName;
 
 if (navigator.appName.indexOf("Microsoft") != -1) 
  strBrowser = "IE";
 else if(navigator.appName.indexOf("Netscape") != -1)
  strBrowser = "NE";
 else
  strBrowser = "OO";
 
 return strBrowser;
}
function moneyToFloat(v){
	return parseFloat(v.replace(/\./g,'').replace(',','.'));
}
function isNumberDecimal(n){
	var patt = /^\d*[0-9](\.\d*[0-9])?$/gi;
	return patt.test(n);
}
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0 || tecla == 13) return true;
		else  return false;
    }
}
function SomenteNumeroPontoVirgula(e, v){
	var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if(tecla==8 || tecla==0 || tecla == 46 || tecla == 13){
			return true;
		}else{  
			return false;
		}
    }	
}