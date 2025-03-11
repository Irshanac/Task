function checkRecord(s: string): boolean {

   const register = {};
    let checkingL = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            checkingL = true
        }else{
           checkingL = false
          register["L"] = 0
        }
        if (!register[s[i]]) {
            register[s[i]] = 1;
        } else {
            register[s[i]] = register[s[i]] + 1

        }
        if (register["A"] === 2) return false
        if (register["L"] === 3) return false
    }


    return true
};