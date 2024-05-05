const nerdamer = require('nerdamer/all');
const gaussElimination = require("../../LinearSystems/methodGauss");

// ex: ("y'' -y'*x=1+x**2", 7, 8, 0, 0, 0.2)
function solve(func, x0, xn, y0, yn, h){
    let n = (xn - x0) / h;
    let data = create_table(x0, xn, y0, yn, n, h)
    let collection_of_funcs_with_constants= insert_known_vars(prepare(func, h), data, n)
    let matrix = to_matrix(collection_of_funcs_with_constants, [...Array(n).keys()].map(x => {
        return `y_${x}`
    }))
    let rights = get_right(collection_of_funcs_with_constants)

    return gaussElimination(matrix, rights)
}

function get_right(funcs){
    return funcs.map(i => {
        let coeffs = nerdamer.coeffs(nerdamer.convertFromLaTeX(i.replace(/=(.+)/g, (str, g) => {
            return `- (${g})`
        })), "x_123123")
        let find = coeffs.toString().match(/(-?\d+\/(\d+))(?!\w|\*)/)
        if (find){
            return -parseFloat(rond(find[1]))
        }
        return 0
    })
}

function rond(x){
    if (x.includes("/")){
        let a = x.split("/")
        return parseFloat(a[0]) / parseFloat(a[1])
    }
    return x
}

function to_matrix(funcs, vars){
    return funcs.map(func => vars.map(variable => extact_coeff(variable, func)))
}

function extact_coeff(variable, func){
    func = func.replace(/=(.+)/g, (str, g) => {
        return `- (${g})`
    })
    let coeffs = nerdamer.coeffs(nerdamer.convertFromLaTeX(func), variable)
    let res = 0
    coeffs.each((e, i) => {
        if (i === 2){
            return res = parseFloat(rond(e.toString()))
        }
    })
    return res
}

function create_table(x0, xn, y0, yn, n, h){
    let data = {
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
    return data
}

function prepare(func, h){
    return func.replace(/([a-zA-Z])(?!_)/g, (str, g) => {
        return `${g}_i`
    }).replace(/(\w)_i''/g, (str, g) => {
        return `(${g}_(i-1) - 2*${g}_i + ${g}_(i+1)) / ${h}**2`
    }).replace(/(\w)_i'/g, (str, g) => {
        return `(${g}_i - ${g}_(i-1)) / ${h}`
    });
}

function insert_known_vars(func, data, n){
    let matrix = []
    for(let i = 1; i < n; i++){
        matrix.push(
            func.replace(/(\w)_\(i-1\)/g, (str, g) => {
                if(data[g][i-1]){
                    return data[g][i-1]
                }
                return `${g}_${i-1}`
            }).replace(/(\w)_\(i\+1\)/g, (str, g) => {
                if(data[g][i+1]){
                    return data[g][i+1]
                }
                return `${g}_${i+1}`
            }).replace(/(\w)_i/g, (str, g) => {
                if(data[g][i]){
                    return data[g][i]
                }
                return `${g}_${i}`
            })
        )
    }
    return matrix
}

console.log(solve("y'' -y'*x=1+x**2", 0, 1, 0, 0, 0.1))

module.exports = solve