const form = document.getElementById('form-inputs')
const imgAprovado = '<img src="./images/aprovado.png"  alt=""Emoji celebrando/>'
const imgReprovado = '<img src="./images/reprovado.png"  alt=""Emoji desapontado/>'

const activities = []
const note = []
const approvedSpan = '<span class="resultado aprovado">Aprovado</span>'
const failedSpan = '<span class="resultado reprovado">Reprovado</span>'
const minimumNote = parseFloat(prompt('Enter the minimum grade'))

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault()

    addRows()
    updateTable()
    updateFinalAverage()
})

    function addRows(){
        const inputNomeMateria = document.getElementById('nome-atividade')
        const inputNotaMateria = document.getElementById('nota-atividade')

        if(activities.includes(inputNomeMateria.value)){
            alert(`A atividade: ${inputNotaMateria.value} Já foi inserida`)
        }
        else{
            activities.push(inputNomeMateria.value)
            note.push(parseFloat(inputNotaMateria.value)) 

            let linha = '<tr>'
            linha += `<td>${inputNomeMateria.value}</td>`
            linha += `<td>${inputNotaMateria.value}</td>`
            linha += `<td>${inputNotaMateria.value >= minimumNote ? imgAprovado : imgReprovado }</td>`
            linha += '</tr>'

            linhas += linha
        }

        inputNomeMateria.value = ''
        inputNotaMateria.value = ''
    }

    function updateTable(){
        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas
    }

    function updateFinalAverage(){
        
        const finalAverage = calculateFinalAverage()

        document.getElementById('finalAverageValue').innerHTML = finalAverage.toFixed(2)
        document.getElementById('finalAverageResult').innerHTML = finalAverage >= minimumNote ? approvedSpan : failedSpan
    }

    function calculateFinalAverage(){
        let sumOfNotes = 0

        for(let i = 0; i < note.length; i++){
            sumOfNotes += note[i]
        }

        return sumOfNotes / note.length
    }