const { useState, useEffect, useMemo } = React;

function App() {
  const lessons = [
    {
      level: "Рівень 1",
      title: "Короткі слова",
      text:
        "суд акт код спір мета збір межа види указ стан зміст дані склад закон право особа позов заява орган влада доказ норма строк витяг копія текст",
    },
    {
      level: "Рівень 1",
      title: "Базові правничі слова",
      text:
        "рішення ухвала скарга справа суддя стаття вимоги свідок експерт захист відзив термін процес апарат статус засади сторона порядок штраф арешт огляд запис підпис палата пленум рахунок система реєстр висновок підстава ознаки допомога",
    },
    {
      level: "Рівень 1",
      title: "Слова 5–7 літер",
      text:
        "конкурс робота умови повага свободи предмет позивач адвокат кабінет мережа факти проєкт об’єкт зв’язок постанова апеляція касація інтереси прокурор нотаріус категорія обставини значення присяга рейтинг мантія оригінал печатка відповідь перегляд відповідач провадження",
    },

    {
      level: "Рівень 2",
      title: "Службові конструкції",
      text:
        "до про зі при поза між в на пунктом статтею відповідно згідно із а також або чи та але проте однак крім окрім зокрема особливо навіть лише також водночас разом у разі у випадку за умови за наявності за відсутності з метою у межах у складі щодо стосовно відносно",
    },
    {
      level: "Рівень 2",
      title: "Докази і джерела",
      text:
        "доказування належність допустимість достовірність достатність свідчення показання експертиза висновок спеціаліст перекладач речовий електронний письмовий оригінал копія витяг засвідчення легалізація апостиль факсиміле",
    },
    {
      level: "Рівень 2",
      title: "Цифрові та письмові джерела",
      text:
        "камера схов опечатування огляд місцезнаходження сторінка посилання метадані база пристрій сервер архів копіювання відтворення запис звук відео характеристика обладнання носій дебати промова репліка таємниця нарадча кімната",
    },

    {
      level: "Рівень 3",
      title: "Структура рішення",
      text:
        "проголошення вступна описова мотивувальна резолютивна підпис аркуш справа том індекс пошта лист конверт рекомендований повідомлення розписка кур’єр телефонограма факс електронка",
    },
    {
      level: "Рівень 3",
      title: "Система і платежі",
      text:
        "кабінет модуль підсистема ідентифікатор квитанція збір мито штраф пеня аванс компенсація витрати прожитковий мінімум працездатний межа поріг сума валюта рахунок",
    },
    {
      level: "Рівень 3",
      title: "Оцінка і обставини",
      text:
        "оцінка обставини доказ висновок аргумент факти аналіз перевірка достовірність належність допустимість достатність сукупність",
    },

    {
      level: "Рівень 4",
      title: "Посилання на норми",
      text:
        "стаття 1, статтею 5 Закону, частина друга статті 1, абзацом першим пункту 4 Положення, пунктом 5 розділу ІІ Порядку, статтею 55 Конституції України, відповідно до пункту 7 частини першої статті 4 Закону, на підставі пункту 1-1 частини першої статті 19 Закону України, передбачених пунктами 1, 2 частини п’ятої статті 361 цього Кодексу, вказаних у пунктах 1-3, 5 частини першої статті 36 Закону України, частина перша статті 2 Закону, пункт 7 частини першої статті 4 Кодексу, пункт 12 частини першої статті 4 Закону, абзац перший частини шостої статті 18 Указу, пункт 1-1 частини першої статті 19 Закону",
    },
    {
      level: "Рівень 4",
      title: "Типові конструкції мотивувальної частини",
      text:
        "згідно з пунктом 5 частини четвертої, згідно з абзацом першим частини шостої, згідно з вимогами цього Кодексу, згідно з розпорядженням голови суду, згідно із Законом № 1416-IX від 27.04.2021, згідно з Положенням про Єдину систему, згідно з конституційними принципами, на підставі пункту 1-1 частини першої, на підставі матеріалів справи, на підставі закону чи міжнародного договору, на підставі висновків Верховного Суду, у межах повноважень та у спосіб, у межах встановлених цим Кодексом строків, у межах бюджетних асигнувань",
    },
    {
      level: "Рівень 4",
      title: "Словосполучення та реквізити",
      text:
        "набрання рішенням суду законної сили, визнання протиправним та скасування рішення, залишення позовної заяви без руху, відмова у відкритті провадження, зупинення провадження у справі, відшкодування шкоди, заподіяної дією, стягнення на користь позивача, рішенням суду у справі № 160/2345/25, постановою суду апеляційної інстанції у справі № 320/2424/26, справа № 460/2386/26",
    },

    {
      level: "Рівень 5",
      title: "Найвища соціальна цінність",
      text:
        "Людина, її життя і здоров'я, честь і гідність, недоторканність і безпека визнаються в Україні найвищою соціальною цінністю. Права і свободи людини та їх гарантії визначають зміст і спрямованість діяльності держави. Утвердження і забезпечення прав і свобод людини є головним обов'язком держави. Держава відповідає перед людиною за свою діяльність.",
    },
    {
      level: "Рівень 5",
      title: "Верховенство права та рівність",
      text:
        "Суд при вирішенні справи керується принципом верховенства права, відповідно до якого, зокрема, людина, її права та свободи визнаються найвищими цінностями. Усі учасники судового процесу є рівними перед законом і судом. Не може бути привілеїв чи обмежень прав учасників за ознаками раси, політичних, релігійних переконань, статі, майнового стану або за мовними ознаками.",
    },
    {
      level: "Рівень 5",
      title: "Незалежність судді",
      text:
        "Суддя у своїй діяльності щодо здійснення правосуддя є незалежним від будь-якого незаконного впливу, тиску або втручання. Суддя здійснює правосуддя на основі Конституції і законів України, керуючись при цьому принципом верховенства права. Втручання у діяльність судді щодо здійснення правосуддя забороняється і має наслідком відповідальність, установлену законом.",
    },
  ];

  const lessonGroups = [
    { level: "Рівень 1", items: ["Короткі слова", "Базові правничі слова", "Слова 5–7 літер"] },
    { level: "Рівень 2", items: ["Службові конструкції", "Докази і джерела", "Цифрові та письмові джерела"] },
    { level: "Рівень 3", items: ["Структура рішення", "Система і платежі", "Оцінка і обставини"] },
    { level: "Рівень 4", items: ["Посилання на норми", "Типові конструкції мотивувальної частини", "Словосполучення та реквізити"] },
    { level: "Рівень 5", items: ["Найвища соціальна цінність", "Верховенство права та рівність", "Незалежність судді"] },
  ];

  const keyboardRows = [
    [
      { ua: "’", en: "`", tone: "bg-[#A8C9F0]/20" },
      { ua: "1", en: "", tone: "bg-[#8ED79C]/20" },
      { ua: "2", en: "", tone: "bg-[#8ED79C]/20" },
      { ua: "3", en: "", tone: "bg-[#7FCDEB]/20" },
      { ua: "4", en: "", tone: "bg-[#E1A3C8]/20" },
      { ua: "5", en: "", tone: "bg-[#F0C27B]/20" },
      { ua: "6", en: "", tone: "bg-[#F0C27B]/20" },
      { ua: "7", en: "", tone: "bg-[#ECE67E]/20" },
      { ua: "8", en: "", tone: "bg-[#E1A3C8]/20" },
      { ua: "9", en: "", tone: "bg-[#7FCDEB]/20" },
      { ua: "0", en: "", tone: "bg-[#8ED79C]/20" },
      { ua: "-", en: "", tone: "bg-[#8ED79C]/20" },
      { ua: "=", en: "", tone: "bg-[#8ED79C]/20" },
      { ua: "Backspace", en: "", tone: "bg-[#A8C9F0]/20", width: "w-[140px]" },
    ],
    [
      { ua: "Tab", en: "", tone: "bg-[#A8C9F0]", width: "w-[92px]" },
      { ua: "й", en: "Q", tone: "bg-[#8ED79C]" },
      { ua: "ц", en: "W", tone: "bg-[#7FCDEB]" },
      { ua: "у", en: "E", tone: "bg-[#E1A3C8]" },
      { ua: "к", en: "R", tone: "bg-[#F0C27B]" },
      { ua: "е", en: "T", tone: "bg-[#F0C27B]" },
      { ua: "н", en: "Y", tone: "bg-[#ECE67E]" },
      { ua: "г", en: "U", tone: "bg-[#ECE67E]" },
      { ua: "ш", en: "I", tone: "bg-[#E1A3C8]" },
      { ua: "щ", en: "O", tone: "bg-[#7FCDEB]" },
      { ua: "з", en: "P", tone: "bg-[#8ED79C]" },
      { ua: "х", en: "[", tone: "bg-[#8ED79C]" },
      { ua: "ї", en: "]", tone: "bg-[#8ED79C]" },
      { ua: "\\", en: "", tone: "bg-[#A8C9F0]", width: "w-[96px]" },
    ],
    [
      { ua: "Caps", en: "", tone: "bg-[#A8C9F0]", width: "w-[110px]" },
      { ua: "ф", en: "A", tone: "bg-[#8ED79C]" },
      { ua: "і", en: "S", tone: "bg-[#7FCDEB]" },
      { ua: "в", en: "D", tone: "bg-[#E1A3C8]" },
      { ua: "а", en: "F", tone: "bg-[#F0C27B]", home: true },
      { ua: "п", en: "G", tone: "bg-[#F0C27B]" },
      { ua: "р", en: "H", tone: "bg-[#ECE67E]" },
      { ua: "о", en: "J", tone: "bg-[#ECE67E]", home: true },
      { ua: "л", en: "K", tone: "bg-[#E1A3C8]" },
      { ua: "д", en: "L", tone: "bg-[#7FCDEB]" },
      { ua: "ж", en: ";", tone: "bg-[#8ED79C]" },
      { ua: "є", en: "'", tone: "bg-[#8ED79C]" },
      { ua: "Enter", en: "", tone: "bg-[#A8C9F0]", width: "w-[128px]" },
    ],
    [
      { ua: "Shift", en: "", tone: "bg-[#A8C9F0]", width: "w-[144px]" },
      { ua: "я", en: "Z", tone: "bg-[#8ED79C]" },
      { ua: "ч", en: "X", tone: "bg-[#7FCDEB]" },
      { ua: "с", en: "C", tone: "bg-[#E1A3C8]" },
      { ua: "м", en: "V", tone: "bg-[#F0C27B]" },
      { ua: "и", en: "B", tone: "bg-[#F0C27B]" },
      { ua: "т", en: "N", tone: "bg-[#ECE67E]" },
      { ua: "ь", en: "M", tone: "bg-[#ECE67E]" },
      { ua: "б", en: ",", tone: "bg-[#E1A3C8]" },
      { ua: "ю", en: ".", tone: "bg-[#7FCDEB]" },
      { ua: ".", en: "/", tone: "bg-[#8ED79C]" },
      { ua: "Shift", en: "", tone: "bg-[#A8C9F0]", width: "w-[154px]" },
    ],
  ];

  const [screen, setScreen] = useState("home");
  const [lessonIndex, setLessonIndex] = useState(0);

  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const [cursor, setCursor] = useState(0);

  const [hardWords, setHardWords] = useState([]);
  const [hardTraining, setHardTraining] = useState(false);
  const [hardTrainingText, setHardTrainingText] = useState("");
  const [hardMistakeWords, setHardMistakeWords] = useState([]);
  const [hardTrainingFinished, setHardTrainingFinished] = useState(false);

  const [customMode, setCustomMode] = useState(null); // null | insert | free
  const [customText, setCustomText] = useState("");
  const [customInput, setCustomInput] = useState("");

  const lesson = useMemo(() => lessons[lessonIndex], [lessonIndex]);

  const isCustomInsert = customMode === "insert";
  const isCustomFree = customMode === "free";
  const isCustom = isCustomInsert || isCustomFree;

  const lessonText = lesson.text;
  const text = hardTraining
    ? hardTrainingText
    : isCustomInsert
    ? customText
    : lessonText;

  const activeChar = !isCustomFree && !hardTrainingFinished ? text[cursor] || "" : "";

  const resetTrainer = () => {
    setStarted(false);
    setInput("");
    setCursor(0);
    setHardWords([]);
    setHardTraining(false);
    setHardTrainingText("");
    setHardMistakeWords([]);
    setHardTrainingFinished(false);
  };

  const openHome = () => setScreen("home");
  const openLibrary = () => setScreen("library");

  const openLesson = (index) => {
    setCustomMode(null);
    setCustomText("");
    setCustomInput("");
    setLessonIndex(index);
    resetTrainer();
    setScreen("trainer");
  };

  const openCustomInsert = () => {
    setCustomMode("insert");
    setCustomText("");
    setCustomInput("");
    resetTrainer();
    setScreen("trainer");
  };

  const openCustomFree = () => {
    setCustomMode("free");
    setCustomText("");
    setCustomInput("");
    resetTrainer();
    setStarted(true);
    setScreen("trainer");
  };

  const restartLesson = () => {
    if (isCustomFree) {
      setCustomInput("");
      setStarted(true);
      return;
    }

    setInput("");
    setCursor(0);
    setStarted(false);

    if (hardTraining) {
      setHardMistakeWords([]);
      setHardTrainingFinished(false);
    } else {
      setHardWords([]);
    }
  };

  const nextLesson = () => {
    if (hardTraining || isCustom) return;
    if (lessonIndex < lessons.length - 1) {
      setLessonIndex((prev) => prev + 1);
      resetTrainer();
    }
  };

  const startHardTraining = () => {
    if (hardWords.length === 0) return;
    setHardTrainingText(hardWords.join(" "));
    setHardMistakeWords([]);
    setHardTraining(true);
    setHardTrainingFinished(false);
    setInput("");
    setCursor(0);
    setStarted(false);
  };

  const finalizeHardTraining = () => {
    setHardWords(hardMistakeWords);
    setHardTrainingFinished(true);
    setStarted(false);
  };

  const stopHardTraining = () => {
    setHardTraining(false);
    setHardTrainingText("");
    setHardMistakeWords([]);
    setHardTrainingFinished(false);
    setInput("");
    setCursor(0);
    setStarted(false);
  };

  const repeatHardTraining = () => {
    if (hardWords.length === 0) return;
    setHardTrainingText(hardWords.join(" "));
    setHardMistakeWords([]);
    setHardTrainingFinished(false);
    setInput("");
    setCursor(0);
    setStarted(false);
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (screen !== "trainer") return;
      if (hardTrainingFinished) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (isCustomInsert && !customText.trim() && !hardTraining) return;

      if (isCustomFree) {
        if (e.key === "Tab") {
          e.preventDefault();
          return;
        }

        if (e.key === "Backspace") {
          e.preventDefault();
          setCustomInput((prev) => prev.slice(0, -1));
          return;
        }

        if (e.key === "Enter") {
          e.preventDefault();
          setCustomInput((prev) => prev + "\n");
          return;
        }

        if (e.key.length === 1) {
          e.preventDefault();
          setCustomInput((prev) => prev + e.key);
        }

        return;
      }

      if (!started) {
        if (e.key === "Tab" || e.key === "Backspace") {
          e.preventDefault();
          return;
        }
        if (e.key.length === 1 || e.key === "Enter") {
          setStarted(true);
        }
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        setInput((prev) => prev.slice(0, -1));
        setCursor((prev) => Math.max(0, prev - 1));
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        setInput((prev) => prev + "\n");
        setCursor((prev) => prev + 1);
        return;
      }

      if (e.key.length === 1) {
        e.preventDefault();
        const nextChar = e.key;
        const expected = text[cursor] || "";

        if (expected && nextChar !== expected) {
          const currentWord = getCurrentWord(text, cursor);

          if (hardTraining) {
            if (currentWord && !hardMistakeWords.includes(currentWord)) {
              setHardMistakeWords((prev) => [...prev, currentWord]);
            }
          } else {
            if (currentWord && !hardWords.includes(currentWord)) {
              setHardWords((prev) => [...prev, currentWord]);
            }
          }
        }

        setInput((prev) => prev + nextChar);
        setCursor((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [
    screen,
    hardTrainingFinished,
    isCustomInsert,
    isCustomFree,
    customText,
    started,
    text,
    cursor,
    hardTraining,
    hardMistakeWords,
  ]);

  useEffect(() => {
    if (!hardTraining) return;
    if (hardTrainingFinished) return;
    if (!text.length) return;
    if (cursor < text.length) return;
    finalizeHardTraining();
  }, [cursor, text, hardTraining, hardTrainingFinished]);

  const getWordBounds = (sourceText, position) => {
    if (!sourceText || position < 0 || position >= sourceText.length) return null;
    if (sourceText[position] === " ") return null;

    let start = position;
    let end = position;

    while (start > 0 && sourceText[start - 1] !== " ") {
      start -= 1;
    }
    while (end < sourceText.length - 1 && sourceText[end + 1] !== " ") {
      end += 1;
    }

    return { start, end };
  };

  const currentWordBounds =
    !isCustomFree && !hardTrainingFinished ? getWordBounds(text, cursor) : null;

  const isKeyActive = (key) => {
    if (!activeChar) return false;
    return key.ua.toLowerCase() === activeChar.toLowerCase();
  };

  const getKeyClass = (key) => {
    const active = isKeyActive(key);
    const width = key.width || "w-[56px]";
    return [
      "relative flex h-[58px] shrink-0 items-center justify-center rounded-[16px] border border-[#C9D2E1] shadow-sm transition-all duration-150",
      width,
      key.tone,
      "text-[#2B2B2B]",
      active ? "ring-2 ring-[#3F51D7] scale-[1.04] brightness-[0.96]" : "",
    ].join(" ");
  };

  const renderTrainingText = () =>
    text.split("").map((char, i) => {
      const typed = input[i];
      const inCurrentWord =
        currentWordBounds && i >= currentWordBounds.start && i <= currentWordBounds.end;

      let textClass = "text-[#A0A7B7]";
      if (typed) {
        textClass = typed === char ? "text-[#111827]" : "text-[#D14141]";
      }

      return (
        <span key={i} className={inCurrentWord ? "bg-[#EEF2FF] rounded-[4px]" : ""}>
          {!hardTrainingFinished && i === cursor ? (
            <span className="inline-block h-[24px] w-[2px] translate-y-[3px] animate-pulse bg-[#3F51D7] align-middle" />
          ) : null}
          <span className={textClass}>{typed || char}</span>
        </span>
      );
    });

  const renderFreeText = () => {
    const chars = customInput.split("");
    return (
      <>
        {chars.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
        <span className="inline-block h-[24px] w-[2px] translate-y-[3px] animate-pulse bg-[#3F51D7] align-middle" />
      </>
    );
  };

  const getAbsoluteIndex = (groupIndex, itemIndex) => groupIndex * 3 + itemIndex;
  const isCurrentLesson = (index) => index === lessonIndex && screen === "trainer";

  return (
    <div className="min-h-screen bg-[#EEF1F6] text-[#121826]">
      <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-6">
        <div className="overflow-hidden rounded-[28px] border border-[#D9E0EB] bg-[#F8FAFD] shadow-[0_10px_30px_rgba(23,35,79,0.06)]">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E4E9F1] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#3F51D7] text-2xl font-semibold text-white">
                V
              </div>
              <div>
                <div className="text-[30px] font-semibold tracking-tight">Type the law</div>
                <div className="text-[13px] text-[#667085]">Натхнення структурою AI Act Explorer</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[14px] text-[#667085] whitespace-nowrap">Verba Law You: Набирай вільно</div>
              <div className="rounded-[18px] border border-[#D8DFEB] bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] text-[#2E3A59]">
                UA ONLY
              </div>

              {screen !== "library" ? (
                <button
                  type="button"
                  onClick={openLibrary}
                  className="rounded-[18px] bg-[#3F51D7] px-5 py-3 text-[15px] font-medium text-white"
                >
                  Відкрити бібліотеку
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openHome}
                  className="rounded-[18px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                >
                  На головну
                </button>
              )}
            </div>
          </header>

          {screen === "home" ? (
            <main className="px-5 py-5 lg:px-6">
              <section className="rounded-[26px] border border-[#DEE5EF] bg-white p-6 shadow-[0_6px_18px_rgba(17,24,39,0.04)]">
                <div className="flex flex-wrap items-start justify-between gap-8">
                  <div className="max-w-[820px]">
                    <div className="text-[22px] font-semibold tracking-tight text-[#111827]">
                      Професійний тренажер сліпого десятипальцевого друку для юристів
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={openLibrary}
                        className="rounded-[18px] bg-[#3F51D7] px-6 py-3 text-[16px] font-medium text-white hover:brightness-95"
                      >
                        Відкрити бібліотеку
                      </button>
                    </div>
                  </div>

                  <div className="inline-block max-w-[520px] rounded-[20px] border border-[#D6DBE6] bg-[#F7F9FC] px-5 py-4">
                    <div className="mb-3 text-[22px] font-semibold text-[#111827]">
                      Де літера "Ґ"?
                    </div>
                    <div className="text-[16px] leading-[1.45] text-[#546077]">Правий ALT + г → ґ</div>
                    <div className="mt-2 text-[16px] leading-[1.45] text-[#546077]">
                      SHIFT + правий ALT + г → Ґ
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                  <div className="mb-3 text-[20px] font-semibold text-[#111827]">
                    Чому юристу важливо друкувати наосліп?
                  </div>
                  <div className="space-y-2 text-[16px] leading-[1.55] text-[#546077]">
                    <div>Сліпий друк – це тренування мозку, а не лише пальців.</div>
                    <div>Формується моторна пам’ять і нейронні зв’язки.</div>
                    <div>Менше поглядів на клавіатуру. Менше помилок. Більше швидкості.</div>
                    <div>Зменшується когнітивне навантаження. Легше формулювати думки.</div>
                    <div>Менше навантаження на очі, шию та спину.</div>
                  </div>

                  <div className="mt-5 text-[16px] leading-[1.55] text-[#546077]">
                    <div>Швидкість у 2–5 разів вища.</div>
                    <div>Початківець: 10–30 слів/хв.</div>
                    <div>Сліпий друк: 50–80+ слів/хв.</div>
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                  <div className="mb-3 text-[20px] font-semibold text-[#111827]">Основні правила</div>
                  <div className="space-y-2 text-[16px] leading-[1.55] text-[#546077]">
                    <div>1. Базова позиція. Ліва рука: Ф І В А. Права: О Л Д Ж.</div>
                    <div>2. Великі пальці – пробіл.</div>
                    <div>3. Не дивитися на клавіатуру. Інакше навичка не формується.</div>
                    <div>4. Спочатку точність. Потім швидкість.</div>
                    <div>5. Кожен палець має свою зону.</div>
                    <div>6. Повернення у базову позицію після кожного натискання.</div>
                    <div>7. Ритм важливіший за швидкість.</div>
                    <div>8. Не поспішайте перші 7–10 днів.</div>
                  </div>

                  <div className="mt-5 text-[16px] leading-[1.55] text-[#546077]">
                    Цікавий факт. Рух пальців швидший за усвідомлення натискання. Це рівень автоматизму.
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                  <div className="mb-4 text-[20px] font-semibold text-[#111827]">Клавіатура</div>

                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[1100px] space-y-3">
                      {keyboardRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-2">
                          {row.map((key) => (
                            <div
                              key={`home-${rowIndex}-${key.ua}`}
                              className={[
                                "relative flex h-[58px] shrink-0 items-center justify-center rounded-[16px] border border-[#C9D2E1] shadow-sm",
                                key.width || "w-[56px]",
                                key.tone,
                                "text-[#2B2B2B]",
                              ].join(" ")}
                            >
                              <div className="flex flex-col items-center justify-center leading-none">
                                <span className="text-[16px] font-medium">{key.ua}</span>
                                {key.en ? (
                                  <span className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#4B5563]">
                                    {key.en}
                                  </span>
                                ) : null}
                              </div>

                              {key.home ? (
                                <span className="absolute bottom-[8px] h-[3px] w-[18px] rounded-full bg-[#24348F]" />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))}

                      <div className="flex justify-center pt-1">
                        <div className="relative flex h-[58px] w-[478px] items-center justify-center rounded-[16px] border border-[#C9D2E1] bg-[#A8C9F0] text-[#2B2B2B] shadow-sm">
                          <span className="text-[16px] font-medium">Пробіл</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-start">
                  <button
                    type="button"
                    onClick={openLibrary}
                    className="rounded-[18px] bg-[#3F51D7] px-6 py-3 text-[16px] font-medium text-white hover:brightness-95"
                  >
                    Відкрити бібліотеку
                  </button>
                </div>
              </section>
            </main>
          ) : screen === "library" ? (
            <main className="px-5 py-5 lg:px-6">
              <section className="rounded-[26px] border border-[#DEE5EF] bg-white p-6 shadow-[0_6px_18px_rgba(17,24,39,0.04)]">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-[22px] font-semibold tracking-tight">Відкрита бібліотека уроків</div>
                  <div className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[12px] font-medium text-[#3146C8]">
                    Усі уроки відкриті
                  </div>
                </div>

                <div className="mb-2 text-[14px] text-[#667085]">
                  Доступ до всіх уроків одразу, без блокування рівнів
                </div>
                <div className="mb-6 text-[14px] text-[#667085]">Оберіть урок і почніть друк</div>

                <div className="mb-6">
                  <button
                    type="button"
                    onClick={openHome}
                    className="rounded-[16px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                  >
                    На головну
                  </button>
                </div>

                <section className="mb-6 rounded-[24px] border border-[#3F51D7] bg-[#EEF2FF] p-6">
                  <div className="mb-2 text-[22px] font-semibold tracking-tight">Власний текст</div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={openCustomInsert}
                      className="rounded-[16px] bg-[#3F51D7] px-5 py-3 text-[15px] font-medium text-white"
                    >
                      Вставити текст
                    </button>

                    <button
                      type="button"
                      onClick={openCustomFree}
                      className="rounded-[16px] border border-[#3F51D7] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                    >
                      Чистий аркуш
                    </button>
                  </div>
                </section>

                <div className="space-y-5">
                  {lessonGroups.map((group, groupIndex) => (
                    <div
                      key={group.level}
                      className="rounded-[24px] border border-[#3F51D7] bg-[#EEF2FF] p-6"
                    >
                      <div className="mb-4 text-[13px] uppercase tracking-[0.18em] text-[#7B8499]">
                        {group.level}
                      </div>

                      <div className="space-y-3">
                        {group.items.map((item, itemIndex) => {
                          const absoluteIndex = getAbsoluteIndex(groupIndex, itemIndex);
                          const activeCard = isCurrentLesson(absoluteIndex);

                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => openLesson(absoluteIndex)}
                              className={[
                                "block w-full rounded-[18px] border px-6 py-5 text-left text-[18px] transition cursor-pointer",
                                activeCard
                                  ? "border-black bg-[#F8FAFD] shadow-[0_0_0_2px_rgba(63,81,215,0.15)]"
                                  : "border-[#DDE4EE] bg-white hover:border-[#3F51D7] hover:bg-[#EEF2FF]",
                              ].join(" ")}
                            >
                              <div>{item}</div>
                              <div className="mt-2 text-[13px] text-[#6D778C]">Почати</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          ) : (
            <main className="px-5 py-5 lg:px-6">
              <section className="rounded-[26px] border border-[#DEE5EF] bg-white p-6 shadow-[0_6px_18px_rgba(17,24,39,0.04)]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    {!isCustom && !hardTraining ? (
                      <div className="text-[13px] uppercase tracking-[0.28em] text-[#6D778C]">{lesson.level}</div>
                    ) : null}

                    <h1 className="mt-3 text-[52px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111827]">
                      {hardTraining ? "Складні слова" : isCustom ? "Власний текст" : lesson.title}
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setScreen("library")}
                      className="rounded-[18px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                    >
                      До бібліотеки
                    </button>

                    <button
                      type="button"
                      onClick={restartLesson}
                      className="rounded-[18px] bg-[#3F51D7] px-5 py-3 text-[15px] font-medium text-white"
                    >
                      Почати заново
                    </button>

                    {hardTraining ? (
                      <button
                        type="button"
                        onClick={stopHardTraining}
                        className="rounded-[18px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                      >
                        Назад до уроку
                      </button>
                    ) : null}
                  </div>
                </div>

                {isCustomInsert && !hardTraining ? (
                  <div className="mt-6 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="text-[16px] font-medium text-[#2E3A59]">Вставте текст для тренування</div>
                      <div className="text-[14px] text-[#667085]">{customText.length}/3000</div>
                    </div>

                    <textarea
                      value={customText}
                      onChange={(e) => {
                        const limited = e.target.value.slice(0, 3000);
                        setCustomText(limited);
                        setInput("");
                        setCursor(0);
                        setStarted(false);
                        setHardWords([]);
                      }}
                      placeholder="Вставте свій текст тут"
                      className="min-h-[180px] w-full rounded-[18px] border border-[#D8DFEB] bg-white px-4 py-4 text-[16px] leading-[1.5] text-[#111827] outline-none"
                    />

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setCustomText("");
                          setInput("");
                          setCursor(0);
                          setStarted(false);
                          setHardWords([]);
                        }}
                        className="rounded-[16px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                      >
                        Очистити текст
                      </button>
                    </div>
                  </div>
                ) : null}

                {isCustomFree && !hardTraining ? (
                  <div className="mt-6 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                    <div className="mb-3 text-[16px] font-medium text-[#2E3A59]">
                      Вільний набір тексту
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setCustomInput("");
                          setStarted(true);
                        }}
                        className="rounded-[16px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                      >
                        Очистити текст
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="mt-7 rounded-[24px] border border-[#DCE3EE] bg-[#F7F8FB] p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="mb-1 text-[13px] uppercase tracking-[0.18em] text-[#6D778C]">
                      Don’t look. Just type
                    </div>
                    <div className="rounded-full border border-[#D8DFEB] bg-white px-3 py-1 text-[13px] text-[#667085]">
                      {hardTrainingFinished
                        ? "Тренування завершено"
                        : isCustomFree
                        ? "Вільний набір"
                        : started
                        ? "Набір активний"
                        : "Просто почніть друкувати"}
                    </div>
                  </div>

                  <div className="min-h-[180px] rounded-[20px] border border-[#DCE3EE] bg-white px-5 py-5 text-[28px] leading-[1.75]">
                    {isCustomFree ? renderFreeText() : renderTrainingText()}
                  </div>

                  {!isCustomFree ? (
                    hardTrainingFinished ? (
                      <div className="mt-4 flex items-center justify-start gap-3">
                        <button
                          type="button"
                          onClick={stopHardTraining}
                          className="rounded-[16px] border border-[#D8DFEB] bg-white px-5 py-3 text-[15px] font-medium text-[#2E3A59]"
                        >
                          Повернутися до уроку
                        </button>

                        <button
                          type="button"
                          onClick={repeatHardTraining}
                          disabled={hardWords.length === 0}
                          className={[
                            "rounded-[16px] px-5 py-3 text-[15px] font-medium transition",
                            hardWords.length === 0
                              ? "cursor-default border border-[#D8DFEB] bg-white text-[#98A2B3]"
                              : "bg-[#3F51D7] text-white hover:brightness-95",
                          ].join(" ")}
                        >
                          Ще раз складні слова
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4 flex items-center justify-start gap-3">
                        {!hardTraining && !isCustom ? (
                          <button
                            type="button"
                            onClick={nextLesson}
                            disabled={lessonIndex >= lessons.length - 1}
                            className={[
                              "rounded-[16px] px-5 py-3 text-[15px] font-medium transition",
                              lessonIndex >= lessons.length - 1
                                ? "cursor-default border border-[#D8DFEB] bg-white text-[#98A2B3]"
                                : "bg-[#3F51D7] text-white hover:brightness-95",
                            ].join(" ")}
                          >
                            {lessonIndex >= lessons.length - 1 ? "Курс завершено" : "Далі"}
                          </button>
                        ) : null}

                        {!isCustomFree ? (
                          <button
                            type="button"
                            onClick={startHardTraining}
                            disabled={hardWords.length === 0 || hardTraining}
                            className={[
                              "rounded-[16px] px-5 py-3 text-[15px] font-medium transition",
                              hardWords.length === 0 || hardTraining
                                ? "cursor-default border border-[#D8DFEB] bg-white text-[#98A2B3]"
                                : "border border-[#3F51D7] bg-white text-[#2E3A59] hover:bg-[#EEF2FF]",
                            ].join(" ")}
                          >
                            Тренувати складні слова
                          </button>
                        ) : null}
                      </div>
                    )
                  ) : null}

                  <div className="mt-6 flex flex-col items-center">
                    <div className="w-full max-w-[1100px] space-y-3">
                      {keyboardRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-2">
                          {row.map((key) => (
                            <div key={`${rowIndex}-${key.ua}`} className={getKeyClass(key)}>
                              <div className="flex flex-col items-center justify-center leading-none">
                                <span className="text-[16px] font-medium">{key.ua}</span>
                                {key.en ? (
                                  <span className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#4B5563]">
                                    {key.en}
                                  </span>
                                ) : null}
                              </div>

                              {key.home ? (
                                <span className="absolute bottom-[8px] h-[3px] w-[18px] rounded-full bg-[#24348F]" />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))}

                      <div className="flex justify-center pt-1">
                        <div
                          className={[
                            "relative flex h-[58px] w-[478px] items-center justify-center rounded-[16px] border border-[#C9D2E1] bg-[#A8C9F0] text-[#2B2B2B] shadow-sm transition-all duration-150",
                            activeChar === " " ? "ring-2 ring-[#3F51D7] scale-[1.04] brightness-[0.96]" : "",
                          ].join(" ")}
                        >
                          <span className="text-[16px] font-medium">Пробіл</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {!isCustomFree ? (
                  <section className="mt-5 rounded-[26px] border border-[#DEE5EF] bg-white p-5 shadow-[0_6px_18px_rgba(17,24,39,0.04)]">
                    <div className="mb-3 text-[22px] font-semibold tracking-tight">Складні слова</div>

                    <div className="space-y-2">
                      {hardWords.length > 0 ? (
                        hardWords.map((word, idx) => (
                          <div
                            key={`${word}-${idx}`}
                            className="rounded-[14px] border border-[#E5EAF2] bg-[#F8FAFD] px-4 py-3 text-[17px] text-[#1D2433]"
                          >
                            {word}
                          </div>
                        ))
                      ) : (
                        <div className="rounded-[14px] border border-[#E5EAF2] bg-[#F8FAFD] px-4 py-3 text-[15px] text-[#75809A]">
                          Тут з’являться складні слова
                        </div>
                      )}
                    </div>
                  </section>
                ) : null}
              </section>
            </main>
          )}

          <footer className="border-t border-[#E4E9F1] px-6 py-4 text-center text-[13px] text-[#667085]">
            Created by © 2026 Verba Law You. Type the law correctly.
          </footer>
        </div>
      </div>
    </div>
  );
}

function getCurrentWord(text, cursor) {
  if (!text || cursor < 0) return "";

  let start = cursor;
  let end = cursor;

  while (start > 0 && text[start - 1] !== " ") {
    start -= 1;
  }

  while (end < text.length && text[end] !== " ") {
    end += 1;
  }

  return text.slice(start, end).trim();
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);