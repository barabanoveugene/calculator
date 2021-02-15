export function Calculator () {
    return {
        evaluate (string) {
            const result = string.replace(/[^-()\d/*+.]/g, '')
            return eval(result)
        }
    }
}

const data = document.getElementById('data')
const result = document.getElementsByTagName('output')[0]
const getResult = result.getAttribute('result')

data.onchange = function (event) {
	if (Calculator().evaluate(event.target.value) === undefined) {
      result.value = 'Must enter numbers' 
    } 
    else result.value = Calculator().evaluate(event.target.value)
}