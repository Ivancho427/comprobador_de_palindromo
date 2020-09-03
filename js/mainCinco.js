let monedas = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
]

function checkCashRegister(price, cash, cid) {
let cambio;
let cambioMonedas = [];
let precioPago = (cash - price);
let totalefectivo = 0;
let tiquete;
let numeroTiquete;
let restaPrecioMonedas;

for (var i = 0; i < cid.length; i++) {
    totalefectivo += cid[i][1];   
}  if (precioPago > totalefectivo) {
    cambio = { status: "INSUFFICIENT_FUNDS", change: [] };
} else if (precioPago == totalefectivo) {
    cambio = { status: "CLOSED", change: cid };
} else {

    for (var i = 0; i < monedas.length; i++) {
        for (var j = 0; j < cid.length; j++) {
            if (monedas[i][0] === cid[j][0]) {
                numeroTiquete = (parseFloat(cid[j][1]) / parseFloat(monedas[i][1])).toFixed(0);
                tiquete = [monedas[i][0], 0]
                for (var k = 1; k <= numeroTiquete; k++) {                  
                    restaPrecioMonedas = (parseFloat(precioPago) - parseFloat(monedas[i][1])).toFixed(2);
                    if (restaPrecioMonedas >= 0) {
                      
                     precioPago = restaPrecioMonedas;
                        tiquete[1] = parseFloat((parseFloat(tiquete[1]) + parseFloat(monedas[i][1])).toFixed(2));
                    } else {
                        break;
                    }
                }
                if (tiquete[1] !== 0) {
                    cambioMonedas.push(tiquete);
                }
            }
        }
    }
    if (precioPago == 0) {
        cambio = { status: "OPEN", change: cambioMonedas };
    } else {
        cambio = { status: "INSUFFICIENT_FUNDS", change: [] };
    }
}
return cambio;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));