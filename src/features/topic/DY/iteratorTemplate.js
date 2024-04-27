// calculator takes fStrix, x_i, y_i, h return y_(i+1) and addition information
export function wrapper(calculator){
    return function common(fStrix, x0, y0, h, n){
        let xi = x0
        let yi = y0

        let res = {}
        
        for(let i = 0; i <= n; i++){
            let calculated = calculator(fStrix, xi, yi, h)

            res[i] = {"xi": xi, "yi": yi, ...calculated}

            xi += h
            yi = calculated["y_(i+1)"]
        }
        return res
    }
}
