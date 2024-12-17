function calculerNote(event) {
 
  const bonnesReponses = {
    question1: "c",
    question2: "c",
    question3: "b",
    question4: "d",
    question5: "b",
    question6: "b",
    question7: "b",
    question8: "c",
    question9: "b",
    question10: "a"
  };

  let score = 0;

  const question1Elements = document.getElementsByName("question1");
  for (const element of question1Elements) {
    if (element.checked && element.value === bonnesReponses.question1) {
      score++;
    }
  }

 
  const question2Elements = document.getElementsByName("question2");
  for (const element of question2Elements) {
    if (element.checked && element.value === bonnesReponses.question2) {
      score++;
    }
  }

  const question3Elements = document.getElementsByName("question3");
  for (const element of question3Elements) {
    if (element.checked && element.value === bonnesReponses.question3) {
      score++;
    }
  }

  const question4Elements = document.getElementsByName("question4");
  for (const element of question4Elements) {
    if (element.checked && element.value === bonnesReponses.question4) {
      score++;
    }
  }

  const question5Elements = document.getElementsByName("question5");
  for (const element of question5Elements) {
    if (element.checked && element.value === bonnesReponses.question5) {
      score++;
    }
  }

  const question6Elements = document.getElementsByName("question6");
  for (const element of question6Elements) {
    if (element.checked && element.value === bonnesReponses.question6) {
      score++;
    }
  }

  const question7Elements = document.getElementsByName("question7");
  for (const element of question7Elements) {
    if (element.checked && element.value === bonnesReponses.question7) {
      score++;
    }
  }

  const question8Elements = document.getElementsByName("question8");
  for (const element of question8Elements) {
    if (element.checked && element.value === bonnesReponses.question2) {
      score++;
    }
  }

  const question9Elements = document.getElementsByName("question9");
  for (const element of question9Elements) {
    if (element.checked && element.value === bonnesReponses.question9) {
      score++;
    }
  }

  const question10Elements = document.getElementsByName("question10");
  for (const element of question10Elements) {
    if (element.checked && element.value === bonnesReponses.question10) {
      score++;
    }
  }

  alert(`Votre score est de ${score}`);
}

document.getElementById("quiz-form").addEventListener("submit", calculerNote);