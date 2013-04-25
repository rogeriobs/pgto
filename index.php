<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="AUTHOR" content="Rogério BS" />
<title>Cálculo de Financiamento - PGTO</title>
<link href="css/index.style.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript">
	window.onload = function(){
		
		calcular = function(){
	
			var valor   = document.getElementById('txt_Valor').value;
			var juros   = document.getElementById('txt_taxajuros').value;
			var nparc   = document.getElementById('txt_parcelas').value;
			var entrada = document.getElementById('txt_entrada').value;
			
			entrada = moneyToFloat(entrada);			
			valor = moneyToFloat(valor) - entrada;
			
			juros = parseFloat(juros.replace(/[\,]/g,'.'));
			
			var i = juros / 100;
			
			CF = i / (1 - (1 / (Math.pow((1 + i),nparc))));
			PMT = valor * CF;
			
			valorTT = PMT * nparc;
			
			document.getElementById('txt_resultParcelas').value = PMT.formatMoney(2,'.',',');
			document.getElementById('txt_resultTotalFinan').value = valorTT.formatMoney(2,'.',',');	
			
			return false;
		}
		document.getElementById('frmCalculaPGTO').addEventListener('submit', calcular, true);
	}
</script>
</head>

<body>
<h2 class="tit">Cálculo de Financiamento - PGTO</h2>
<div id="bodyBody">
	<form id="frmCalculaPGTO" onsubmit="return false;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="12%" nowrap="nowrap">Valor:</td>
        <td width="88%">
        	<input name="txt_Valor" type="text" id="txt_Valor" onkeydown="formatamoeda(this,retornaKeyCode(event),2)" onkeyup="formatamoeda(this,retornaKeyCode(event),2)" value="0,00" maxlength="15" />
        </td>
      </tr>
      <tr>
        <td nowrap="nowrap">Entrada:</td>
        <td>
          <input name="txt_entrada" type="text" id="txt_entrada" onkeydown="formatamoeda(this,retornaKeyCode(event),2)" onkeyup="formatamoeda(this,retornaKeyCode(event),2)" value="0,00" maxlength="15" />
        </td>
      </tr>
      <tr>
        <td nowrap="nowrap">Parcelas:</td>
        <td><label for="txt_parcelas"></label>
        <input name="txt_parcelas" type="text" id="txt_parcelas" onkeypress="return SomenteNumero(event)" maxlength="5" /></td>
      </tr>
      <tr>
        <td nowrap="nowrap">Taxa / Juros %</td>
        <td>
        	<label for="txt_taxajuros"></label>
        <input name="txt_taxajuros" type="text" id="txt_taxajuros" onkeypress="return SomenteNumeroPontoVirgula(event, this.value)" maxlength="5" /></td>
      </tr>
      <tr>
        <td height="50" nowrap="nowrap">&nbsp;</td>
        <td height="50" align="right" valign="bottom"><input type="submit" name="bt_calcular" id="bt_calcular" value="Calcular" /></td>
      </tr>
    </table>
    <br />
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="37%" nowrap="nowrap">Valor das Parcelas:</td>
        <td width="63%">
        	<input name="txt_resultParcelas" type="text" disabled="disabled" class="inputText" id="txt_resultParcelas" readonly="readonly" /></td>
      </tr>
      <tr>
        <td nowrap="nowrap">Valor Total Financiado:</td>
        <td>
        	<input name="txt_resultTotalFinan" type="text" disabled="disabled" class="inputText" id="txt_resultTotalFinan" readonly="readonly" /></td>
      </tr>
    </table>
    </form>
</div>
</body>
</html>