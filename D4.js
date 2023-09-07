/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area= function( l1,l2){
    let sum = l1 * l2
    return sum
}
let number1 = 35
let number2 = 16


console.log("L'area del rettangolo è di " + area(number1,number2) + 'mq')

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


const crazySum = function(n1,n2){
    let sum = 0
    if( typeof n1 !== 'number' || typeof n2 !== 'number'){
        sum = 'Dai dei parametri numerici!'
    } else if (n1 !== n2 )
    {sum += n1 + n2 } else { sum += (n1 + n2) * 3}
    return sum
}
console.log(crazySum('a',4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(n3,n4=19){
    let difference = 0
    if (Math.abs(n3) > n4) { difference += Math.abs((n3-n4)* 3)} else{  difference += Math.abs( Math.abs(n3) - n4)}
    return difference
}
console.log(crazyDiff(-3,19))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(n){
   let calc = 0
   if( n !== Math.floor(n)){ calc = 'Inserisci numero intero'}
   else if ( n >= 20 && n <= 100 || n === 400) {calc = true}
   else( calc = false)
   return calc
}
console.log(boundary(1.4))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(m){
    let message = 0
    if( typeof m !== 'string'){message = 'Inserisci una stringa'}
    else if( m.includes('EPICODE')){ message = m} 
    else{ message ='EPICODE '+ m}
    return message
}
console.log(epify('EPICODE vale oro'))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function(o){
    let check = 0
    if ( o < 0){ check= 'Inserisci numero positivo'}
    else if ( o % 3 === 0) { check = 'multiplo di 3 '}
    else if ( o % 7 === 0) { check = 'multiplo di 7'}
    else{ check = 'Non è multiplo di 3 o 7'}
    return check
    }

console.log(check3and7(5))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString= function(a){
 a.split(a)
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(b){

}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function(c){
    let cut = 0
    if( typeof c !== 'string'){cut ='Inserisci una stringa'}
    else { cut = c.splice(0,1)+ c.splice(c.length -1)}
    return cut
}

console.log(cutString('OGGI SONO FELICE'))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
