// ex: ("y'' -y'*x=1+x**2", 7, 8, 0, 0, 0.2)
// я пришел к системе которую надо решить, но она в
// формате строк я хз как извлечь коэфы
// пока думаю
export function solve(func, x0, xn, y0, yn, h){
    func = func.replace(/(\w)''/g, (str, g) => {
        return `(${g}_(i-1) - 2*${g}_i + ${g}_(i+1)) / ${h}**2`
    }).replace(/(\w)'/g, (str, g) => {
        return `(${g}_i - ${g}_(i-1)) / ${h}`
    }).replace(/([a-zA-Z])(?!_)/, (str, g) => {
        return `${g}_i`
    } );
    let n = (xn - x0) / h;
    data = {
        "x":{
            0: x0,
            n: xn
        },
        "y": {
            0: y0,
            n: yn
        }
    }
    for(let i = 1; i < n; i++){
        data["x"][i] = x0 + h * i
    }
    let matrix = []
    for(let i = 1; i < n; i++){
        matrix.push(
            func.replace(/(\w)_\(i-1\)/g, (str, g) => {
                if(data[g]){
                    return data[g][i-1]
                }
                return `${g}_${i-1}`
            }).replace(/(\w)_\(i+1\)/g, (str, g) => {
                if(data[g]){
                    return data[g][i+1]
                }
                return `${g}_${i+1}`
            }).replace(/(\w)_i/g, (str, g) => {
                if(data[g]){
                    return data[g][i]
                }
                return `${g}_${i}`
            })
        )
    }
}
