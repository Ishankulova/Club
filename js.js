let question = prompt('Сколько человек в клубе?')
if(question <10 && question >=0)  {

    let question_two = prompt('Имя скажи?').trim().toLowerCase()
    if(question_two.charAt(0) === 'a'){

        let question_three = prompt('Сколько лет тебе а?')
        if(question_three >=20 && question_three <=40) {

            let question_four = prompt('Сколько у тебя денег бомжара?')
            if(question_four >= "$" + 100) {

                let question_five = prompt('Боже, сколько человек хотят присоединиться в клуб?') 
                if(question_five <= 10 - question) {
                    alert ('Ок, проходите!')
                } else {
                    alert ('Место нет в клубе банагзики кан укажон!!')
                }

            } else {
                alert('Ты бомж, здесь не твоё место.')
            }

        } else {
            alert ('Холи малолетка буди укажон.')
        }

    } else {
        alert ('Гурез, туя номат "А" ба не .') 
    }

} else {
    alert ('Куда э, максимиум 10 человек')
}