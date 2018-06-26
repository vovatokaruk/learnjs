function genereteFibobancciSequence(n){
    if (!n || isNaN(n)) {
        return null;
    }
    if (n < 2) {
        return [1]
    }
       var fibo = [1, 1];
        for (var i = 2; i < n; i++) {
            fibo[i] = fibo[i-1]+ fibo[i-2];
        }
         return fibo;
    }
    console.log(genereteFibobancciSequence(10))
