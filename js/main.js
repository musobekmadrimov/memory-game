let whoCoded = document.querySelector('.whoCoded')
        let startingText = document.querySelector('#startingText');
        let myButton = document.querySelector('#myButton');
        let letsGoButton = document.querySelector('#letsGoButton');
        let randomArrayDOC = document.querySelector('#randomArrayDOC');
        let randomArray = [];
        let userAnswer = document.querySelector('#userAnswer');
        let answerButton = document.querySelector('#answerButton');
        let result = document.querySelector('#result');
        let userAnswerDOC = document.querySelector('#userAnswerDOC');
        let trueAnswerDOC = document.querySelector('#trueAnswerDOC');
        let restartButton = document.querySelector('#restartButton');

        function startGame() {
            whoCoded.style.display = 'none';
            letsGoButton.style.display = 'block';
            myButton.style.display = 'none';
            startingText.innerText = 'Try to remember the following numbers. The numbers will be shown for 4 seconds.'
            startingText.style.display = 'block'
            for (let i = 0; i < 10; i++) {
                randomArray[i] = Number((Math.random() * 9).toFixed(0));
            }
        }

        function letsGo() {
            letsGoButton.style.display = 'none';
            startingText.style.display = 'none';
            randomArrayDOC.innerText = randomArray;
            setInterval(() => {
                randomArrayDOC.style.display = 'none';
            }, 4000)
            setTimeout(() => {
                userAnswer.style.display = 'block';
                answerButton.style.display = 'block';
            }, 4000)
        }

        function receiveAnswer() {
            userAnswer.style.display = 'none';
            answerButton.style.display = 'none';
            let trueAnswers = 0;
            let userAnswerArray = userAnswer.value.split('');
            for (let j = 0; j < userAnswerArray.length; j++) {
                if (userAnswerArray[j] == randomArray[j]) {
                    trueAnswers += 1;
                }
            }
            restartButton.style.display = 'block';
            trueAnswerDOC.innerText = `True answers: ${randomArray}`;
            userAnswerDOC.innerText = `Your answers: ${userAnswerArray}`;
            result.innerText =
                `Your result: ${trueAnswers} true answers! (${(trueAnswers / 10 * 100).toFixed()}%)`;
        }

        function restartGame() {
            location.reload();
        }