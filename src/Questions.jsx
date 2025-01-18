import { useState } from "react";

export const data = {
  quizzes: [
    {
      title: "HTML",
      icon: "/images/icon-html.svg",
      questions: [
        {
          question: "HTML'in açılımı nedir?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question:
            "Bir HTML belgesinin doğru yapısı aşağıdakilerden hangisidir?",
          options: [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>",
          ],
          answer: "<html><head></head><body></body></html>",
        },
        {
          question:
            "Bir belgenin başlığını tanımlamak için hangi HTML öğesi kullanılır?",
          options: ["<head>", "<title>", "<header>", "<top>"],
          answer: "<title>",
        },
        {
          question: "body etiketinin HTML'deki amacı nedir?",
          options: [
            "Belgenin başlık bölümünü tanımlar.",
            "Metin, resim ve bağlantılar gibi sayfadaki tüm içeriği içerir.",
            "Bir HTML belgesinin ana içeriğini tanımlamak için kullanılır.",
            "HTML'de e-posta içeriğinin gövdesini belirtir.",
          ],
          answer:
            "Metin, resim ve bağlantılar gibi sayfadaki tüm içeriği içerir.",
        },
        {
          question:
            "HTML'de bir bağlantı oluşturmak için hangi etiket kullanılır?",
          options: ["<hyperlink>", "<link>", "<a>", "<href>"],
          answer: "<a>",
        },
        {
          question: "HTML'de resim görüntülemek için hangi etiket kullanılır?",
          options: ["<img>", "<image>", "<src>", "<pic>"],
          answer: "<img>",
        },
        {
          question:
            "<img> etiketinde bir resmin yolunu belirtmek için hangi özellik kullanılır?",
          options: ["link", "src", "href", "url"],
          answer: "src",
        },
        {
          question:
            "HTML'de sırasız bir liste oluşturmak için hangi etiket kullanılır?",
          options: ["<ul>", "<ol>", "<list>", "<li>"],
          answer: "<ul>",
        },
        {
          question: "<br> etiketi ne yapar?",
          options: [
            "Metni iki bölüme ayırır.",
            "Kalın bir metin oluşturur.",
            "Bir satır sonu ekler.",
            "Bir tabloda yeni bir satır ekler.",
          ],
          answer: "Bir satır sonu ekler.",
        },
        {
          question: "HTML'de 'fieldset' etiketi ne işe yarar?",
          options: [
            "Bir formdaki ilgili verileri gruplamak için kullanılır.",
            "Alanı sabit bir boyuta ayarlar.",
            "Bir form içindeki alanları otomatik olarak doğrular.",
            "Bir formdaki alanları gizler.",
          ],
          answer: "Bir formdaki ilgili verileri gruplamak için kullanılır.",
        },
      ],
    },
    {
      title: "CSS",
      icon: "/images/icon-css.svg",
      questions: [
        {
          question: "CSS'in açılımı nedir?",
          options: [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question:
            "Hangi HTML özelliği satır içi stilleri tanımlamak için kullanılır?",
          options: ["styles", "style", "class", "font-style"],
          answer: "style",
        },
        {
          question:
            "Bir CSS dosyasına yorum eklemek için hangi sözdizimi kullanılır?",
          options: [
            "// yorum //",
            "/* yorum */",
            "-- yorum --",
            "<!-- yorum -->",
          ],
          answer: "/* yorum */",
        },
        {
          question:
            "Bir öğenin arka plan rengini değiştirmek için hangi özellik kullanılır?",
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
        },
        {
          question:
            "Tüm <p> öğelerine stil uygulamak için nasıl bir yazım kullanılır?",
          options: ["p { }", ".p { }", "#p { }", "all.p { }"],
          answer: "p { }",
        },
        {
          question:
            "Bir öğenin yazı tipini değiştirmek için hangi özellik kullanılır?",
          options: ["font-style", "text-style", "font-family", "typeface"],
          answer: "font-family",
        },
        {
          question:
            "How do you make each word in a text start with a capital letter?",
          options: [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize",
          ],
          answer: "text-transform: capitalize",
        },
        {
          question:
            "CSS'de 'header' sınıfını tanımlamak için nasıl bir yazım kullanılır?",
          options: [".header", "#header", "header", "*header"],
          answer: ".header",
        },
        {
          question: "'position' özelliğinin varsayılan değeri nedir?",
          options: ["relative", "fixed", "absolute", "static"],
          answer: "static",
        },
        {
          question: "CSS'deki z-index özelliğinin amacı nedir?",
          options: [
            "Element sayısını saymak için",
            "Bir öğenin büyütme düzeyini ayarlamak için",
            "Bir öğenin yığın sırasını belirtmek için",
            "Yakınlaştırma efekti oluşturmak için",
          ],
          answer: "Bir öğenin yığın sırasını belirtmek için",
        },
      ],
    },
    {
      title: "JavaScript",
      icon: "/images/icon-js.svg",
      questions: [
        {
          question:
            "Bir uyarı kutusunda 'Merhaba Dünya' çıktısını almak için hangi sözdizimi doğrudur?",
          options: [
            "alertBox('Merhaba Dünya');",
            "msg('Merhaba Dünya');",
            "alert('Merhaba Dünya');",
            "msgBox('Merhaba Dünya');",
          ],
          answer: "alert('Merhaba Dünya');",
        },
        {
          question: "'myFunction' adlı bir işlevi nasıl çağırırsınız?",
          options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()",
          ],
          answer: "myFunction()",
        },
        {
          question: "JavaScript'te IF ifadesi nasıl yazılır?",
          options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
          answer: "if (i == 5)",
        },
        {
          question:
            "'i' 5'e eşit DEĞİLSE bazı kodları çalıştırmak için, bir IF ifadesi nasıl yazılır?",
          options: [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5",
          ],
          answer: "if (i != 5)",
        },
        {
          question: "FOR döngüsü nasıl başlar?",
          options: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
          ],
          answer: "for (i = 0; i <= 5; i++)",
        },
        {
          question:
            "JavaScript'te tek satırlık bir yorumu nasıl ekleyebilirsiniz?",
          options: [
            "'tek satır yorum",
            "//tek satır yorum",
            "<!--tek satır yorum-->",
            "/* tek satır yorum */",
          ],
          answer: "//tek satır yorum",
        },
        {
          question: "JavaScript dizisi yazmanın doğru yolu nedir?",
          options: [
            "var renkler = (1:'red', 2:'green', 3:'blue')",
            "var renkler = ['red', 'green', 'blue']",
            "var renkler = 'red', 'green', 'blue'",
            "var renkler = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
          ],
          answer: "var renkler = ['red', 'green', 'blue']",
        },
        {
          question:
            "JavaScript' de x ve y olan iki değerden yüksek olan sayıyı nasıl bulursunuz?",
          options: [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)",
          ],
          answer: "Math.max(x, y)",
        },
        {
          question:
            "Bir değişkene değer atamak için hangi operatör kullanılır?",
          options: ["-", "*", "=", "x"],
          answer: "=",
        },
        {
          question: "Bir JavaScript nesnesi yazmanın doğru yolu nedir?",
          options: [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');",
          ],
          answer: "var person = {firstName: 'John', lastName: 'Doe'};",
        },
      ],
    },
    {
      title: "Accessibility",
      icon: "/images/icon-accessibility.svg",
      questions: [
        {
          question: "'WCAG' ne anlama geliyor?",
          options: [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines",
          ],
          answer: "Web Content Accessibility Guidelines",
        },
        {
          question:
            "Görme engeli olan kullanıcılarına resimlere alternatif metin sağlamak için hangi öğe kullanılır?",
          options: [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>",
          ],
          answer: "<img alt='description'>",
        },
        {
          question: "ARIA web geliştirmede ne anlama geliyor?",
          options: [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions",
          ],
          answer: "Accessible Rich Internet Applications",
        },
        {
          question:
            "Aşağıdakilerden hangisi WCAG'ın ilkelerinden biri değildir?",
          options: [
            "Algılanabilirlik",
            "Güvenilirlik",
            "İşletilebilirlik",
            "Anlaşılabilirlik",
          ],
          answer: "Güvenilirlik",
        },
        {
          question:
            "Bu renk kontrast oranlarından hangisi normal metin için minimum WCAG 2.1 Düzey AA gereksinimini tanımlar?",
          options: ["3:1", "4.5:1", "7:1", "2:1"],
          answer: "4.5:1",
        },
        {
          question:
            "Aşağıdaki öğelerden hangisi doğası gereği odaklanabilir, yani 'tabindex' özelliği olmadan odaklanabilir?",
          options: ["<div>", "<span>", "<a href='...'>", "<p>"],
          answer: "<a href='...'>",
        },
        {
          question: "Bir HTML sayfasındaki 'lang' özelliğinin amacı nedir?",
          options: [
            "Komut dosyası dilini belirtmek için",
            "Karakter setini tanımlamak için",
            "Sayfa içeriğinin dilini belirtmek için",
            "Dil paketi bildirmek için",
          ],
          answer: "Sayfa içeriğinin dilini belirtmek için",
        },
        {
          question:
            "Hangi kural, içeriğe farenin yanı sıra klavyeyle de erişilebilmesini sağlar?",
          options: [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls",
          ],
          answer: "Keyboard Accessible",
        },
        {
          question:
            "Web erişilebilirliğinde 'gezinmeyi atla' bağlantılarının rolü nedir?",
          options: [
            "Birincil gezinmeyi ana içeriğe atlamak için",
            "Web sitesinin farklı bölümlerine kısayol sağlamak",
            "Kullanıcıların reklamlar gibi istenmeyen bölümleri atlamalarına yardımcı olmak",
            "Gezinmedeki bozuk bağlantıları atlamak için",
          ],
          answer: "Birincil gezinmeyi ana içeriğe atlamak için",
        },
        {
          question:
            "Bu araçlardan hangisi bir web sitesinin erişilebilirliğini kontrol etmeye yardımcı olabilir?",
          options: [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console",
          ],
          answer: "Google Lighthouse",
        },
      ],
    },
  ],
};

export default function Questions({ selectedCategory, onRetry }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const selectedQuiz = data.quizzes.find(
    (quiz) => quiz.title === selectedCategory
  );

  const correctAnswer = selectedQuiz.questions[currentQuestionIndex].answer;

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedChoice(option);
    }
  };
  
  const progressPercentage = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setIsSubmitted(false);
    } 
  };

  const handleSubmit = () => {
    if (!selectedChoice) {
      alert("lütfen bir şık seçin");
    } else {
      if (selectedChoice === correctAnswer) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
      }
      setIsSubmitted(true);
    }
  }
  
  const selections = ["A", "B", "C", "D"];

  const categories = data.quizzes.map((quiz) => quiz.title);

  return (
    <div className="container-inner">
      {isSubmitted &&
      currentQuestionIndex === selectedQuiz.questions.length - 1 ? (
        <>
          <div className="info">
            <h2>
              Quiz Tamamlandı! <br /> <span>Skorunuz...</span>
            </h2>
          </div>
          <div className="selectionsBox">
            <div className="resultBox">
              <div
                class={`questionsTitle ${selectedQuiz.title.toLowerCase()}Btn`}
              >
                <img
                  src={`/images/${selectedQuiz.title.toLowerCase()}-icon.svg`}
                />
                <p>{selectedQuiz.title}</p>
              </div>
              <div class="score">
                <p>
                  {correctAnswersCount}{" "}
                  <span>{selectedQuiz.questions.length} üzerinden</span>
                </p>
              </div>
            </div>
            <button className="playAgainBtn" onClick={onRetry}>Tekrar Dene</button>
          </div>
        </>
      ) : (
        <>
          <div className="info">
            <div className="welcomePart">
              <p className="questionNumber">
                {currentQuestionIndex + 1} / {selectedQuiz.questions.length}
              </p>
              <p className="question">
                {selectedQuiz.questions[currentQuestionIndex].question}
              </p>
              <ProgressBar progressPercentage={progressPercentage} />
            </div>
          </div>
          <div className="selectionsBox">
            <div className="questionsPart">
              <div className="topicSelection">
                {selectedQuiz.questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={`optionBtn ${
                        isSubmitted
                        ? option === correctAnswer
                          ? selectedChoice === correctAnswer
                            ? "correct selected"
                            : "correct"
                          : option === selectedChoice
                          ? "inCorrect"
                          : ""
                        : selectedChoice === option
                        ? "selected"
                        : ""
                    }`}
                    >
                      <div className="selectionBox">
                      <h5
      className={`${
        isSubmitted
          ? option === correctAnswer
            ? selectedChoice === correctAnswer
              ? "selectionsCorrect"
              : "selectionsCorrectWithoutBorder"
            : option === selectedChoice
            ? "selectionsIncorrect"
            : ""
          : selectedChoice === option
          ? "selectionsSelected"
          : ""
      }`}
    >{selections[index]}</h5>
                        <span>{option} {isSubmitted && option === correctAnswer && selectedChoice !== correctAnswer && (
      <img
        src="/images/correctIcon.svg"
        alt="Correct"
        className="tickIcon"
      />
    )}
    {isSubmitted && option === selectedChoice && option !== correctAnswer && (
      <img
        src="/images/wrongIcon.svg"
        alt="Incorrect"
        className="wrongIcon"
      />
    )}
    </span>
                       
                      </div>
                    </button>
                  )
                )}
              </div>
              <div className="submitBtns">
                <button
                  onClick={handleSubmit}
                  className={isSubmitted ? "isSubmitted" : "submitBtn"}
                >
                  Yanıtı gönder
                </button>
                <button
                  onClick={handleNextQuestion}
                  className={!isSubmitted ? "notSubmit" : "submitBtn"}
                >
                  Sonraki soru
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


function ProgressBar({ progressPercentage }) {
  return (
    <div className="progressBarOuter">
      <div
        className="progressBarInner"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};


