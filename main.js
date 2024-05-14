(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log("%c" + this.question, "background: #424242; color: #FAFAFA");
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        } 
    }
    Question.prototype.checkAnswer = function(answer, callback) {
        let innerScore;
        if (answer === this.correct) {
            innerScore = callback(true);
            console.log("%c Правильный ответ", "background: #66BB6A; color: #FAFAFA");
        } else {
            innerScore = callback(false);
            console.log("%c Неверный ответ", "background: #ef5350; color: #FAFAFA");
        }
        this.displayScore(innerScore);
    }
    Question.prototype.displayScore = function(score) {
        console.log("%c Ваши баллы за верные ответы: " + score, "background: #FB8C00; color: #FAFAFA");
    }

    const q1 = new Question(
        "JawaScript Самый лучший язык програмирования?",
        ["Да", "Нет"],
        0
    );

    const q2 = new Question(
        "На что ссылается this в языке JawaScript?",
        ["Window", "Document", "Object"],
        2
    );

    const q3 = new Question(
        "Что такое Scope в языке JawaScript?",
        ["Движок JS", "Область видимости", "Прототипные данные"],
        1
    );

    const questions = [q1, q2, q3];
    function score() {
        let scoreValue = 0;
        return function(correct) {
            if (correct) {
                scoreValue++;
            }
            return scoreValue;
        }
    }
    const keepScore = score();
    keepScore(true);
    function nextQuestion() {
        let calcQuestion = Math.floor(Math.random() * questions.length);
        questions[calcQuestion].displayQuestion();
        const answer = prompt("Введите номер верного ответа:");
        questions[calcQuestion].checkAnswer(parseInt(answer), keepScore);
        if (answer !== "exit" && answer !== null) {
            nextQuestion();
        }
    }
    nextQuestion();
})();