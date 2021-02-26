let list = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];

class Solution {

    colectarNieveCuadratica(lista) {
        let total = 0;
        let max = 0;
        for(let i = 0; i < lista.length; i++) {
            let value = lista[i];
            max = value > max ? value : max;
        }

        while (max > 0) {
            let contamos = false;
            let balde = 0;
            for(let i = 0; i < lista.length; i++) {
                let value = lista[i];
                if (value >= max) {
                    contamos = true;
                    total += balde;
                    balde = 0;
                    continue;
                }
                if(contamos) {
                    balde++;
                }
            }
            max--;
        }

        return total;
    }

    colectarNieveLineal(lista) {
        let total = 0;
        let maxLeft = [];
        let maxRight = [];

        let max = 0;
        for(let i = 0; i < lista.length; i++) {
            let value = lista[i];
            max = value > max ? value : max;
            maxLeft.push(max);
        }
        console.log({maxLeft})
        max = 0;
        for(let j = lista.length - 1; j >= 0; j--) {
            let value = lista[j];
            max = value > max ? value : max;
            maxRight.unshift(max);
        }
        console.log({maxRight})
        for(let k = 0; k < lista.length; k++) {
            let a = maxLeft[k];
            let b = maxRight[k]
            let height = lista[k];
            total += Math.min(a,b) - height;   
        }

        return total;
    }

    colectarNieveBest(lista) {
        let total = 0;
        let left = 0;
        let right = lista.length - 1;
        let maxLeft = lista[left];
        let maxRight = lista[right];

        while (left < right) {
            if (lista[left] < lista[right]) {
                if (lista[left] > maxLeft) {
                    maxLeft = lista[left]
                } else {
                    total += maxLeft - lista[left];
                }
                left++;
            } else {
                if (lista[right] > maxRight) {
                    maxRight = lista[right];
                } else {
                    total += maxRight - lista[right];
                }
                right--;
            }
        }

        return total;
    }
}

let result = new Solution().colectarNieveCuadratica(list);
let result2 = new Solution().colectarNieveLineal(list);
let result3 = new Solution().colectarNieveBest(list);

console.log(result);
console.log(result2);
console.log(result3);