const EnumStatus = {
    //assinging values to constants
    RECORDING: "recording",
    PLAYING: "playing",
    STOP: "stop",
};

////////////////////////////////////////////////////////
const EnumConvStatus = {
    START: "start",
    SELECT: "select",

    PHISICAL_HEALTH_1: "PHISICAL_HEALTH_1",
    PHISICAL_HEALTH_1_1: "PHISICAL_HEALTH_1_1",
    PHISICAL_HEALTH_1_2: "PHISICAL_HEALTH_1_2",
    PHISICAL_HEALTH_1_3: "PHISICAL_HEALTH_1_3",

    PHISICAL_HEALTH_2: "PHISICAL_HEALTH_2",
    PHISICAL_HEALTH_2_1: "PHISICAL_HEALTH_2_1",
    PHISICAL_HEALTH_2_2: "PHISICAL_HEALTH_2_2",

    PHISICAL_HEALTH_3: "PHISICAL_HEALTH_3",
    PHISICAL_HEALTH_3_1: "PHISICAL_HEALTH_3_1",
    PHISICAL_HEALTH_3_2: "PHISICAL_HEALTH_3_2",

    PHISICAL_HEALTH_4: "PHISICAL_HEALTH_4",
    PHISICAL_HEALTH_4_1: "PHISICAL_HEALTH_4_1",
    PHISICAL_HEALTH_4_2: "PHISICAL_HEALTH_4_2",
    PHISICAL_HEALTH_4_3: "PHISICAL_HEALTH_4_3",
    PHISICAL_HEALTH_4_4: "PHISICAL_HEALTH_4_4",

    PHISICAL_HEALTH_5: "PHISICAL_HEALTH_5",
    PHISICAL_HEALTH_5_1: "PHISICAL_HEALTH_5_1",
    PHISICAL_HEALTH_5_2: "PHISICAL_HEALTH_5_2",
    PHISICAL_HEALTH_5_3: "PHISICAL_HEALTH_5_3",
    PHISICAL_HEALTH_5_4: "PHISICAL_HEALTH_5_4",
    PHISICAL_HEALTH_5_5: "PHISICAL_HEALTH_5_5",

    PHISICAL_HEALTH_8: "PHISICAL_HEALTH_8",
    PHISICAL_HEALTH_8_1: "PHISICAL_HEALTH_8_1",
    PHISICAL_HEALTH_8_2: "PHISICAL_HEALTH_8_2",
    PHISICAL_HEALTH_8_3: "PHISICAL_HEALTH_8_3",
    PHISICAL_HEALTH_8_4: "PHISICAL_HEALTH_8_4",

    PHISICAL_HEALTH_9: "PHISICAL_HEALTH_9",
    PHISICAL_HEALTH_9_1: "PHISICAL_HEALTH_9_1",
    PHISICAL_HEALTH_9_2: "PHISICAL_HEALTH_9_2",
    PHISICAL_HEALTH_9_3: "PHISICAL_HEALTH_9_3",
};
/////////////////////////////////////////////////////////////////////////
const PhysicalHealthResponse = {
    PHISICAL_HEALTH_1_1: false,
    PHISICAL_HEALTH_1_2: false,
    PHISICAL_HEALTH_1_3: false,

    PHISICAL_HEALTH_2_1: false,
    PHISICAL_HEALTH_2_2: false,
    PHISICAL_HEALTH_3_1: false,
    PHISICAL_HEALTH_3_2: false,

    PHISICAL_HEALTH_4_1: false,
    PHISICAL_HEALTH_4_2: false,
    PHISICAL_HEALTH_4_3: false,
    PHISICAL_HEALTH_4_4: false,

    PHISICAL_HEALTH_5_1: false,
    PHISICAL_HEALTH_5_2: false,
    PHISICAL_HEALTH_5_3: false,
    PHISICAL_HEALTH_5_4: false,
    PHISICAL_HEALTH_5_5: false,

    PHISICAL_HEALTH_8_1: false,
    PHISICAL_HEALTH_8_2: false,
    PHISICAL_HEALTH_8_3: false,
    PHISICAL_HEALTH_8_4: false,

    PHISICAL_HEALTH_9_1: false,
    PHISICAL_HEALTH_9_2: false,
    PHISICAL_HEALTH_9_3: false,
};
//////////////////////////////////////////////////////////////////////

const KeywordsByParagraff = {
    PHISICAL_HEALTH_1: ["vision", "blind"],
    PHISICAL_HEALTH_2: ["nausea", "headaches"],
    PHISICAL_HEALTH_3: ["pain", "breathlessness"],
    PHISICAL_HEALTH_4: [
        "fever",
        "high temperature",
        "cough",
        "painful urination",
        "cough",
        "sneezing",
        "runny noise",
        "sore throat",
        "muscle aches",
        "breathlessness",
    ],
    PHISICAL_HEALTH_4_1: ["fever", "chills"],
    PHISICAL_HEALTH_5: [
        "difficulty seeing",
        "loss of vision",
        "blind",
        "double vision",
        "nausea",
        "vomiting",
        "headaches",
        "fever",
        "high temperature",
        "cough",
        "pain",
        "chest pain",
        "headache",
        "arm weakness",
        "sad",
        "mood",
        "fear",
        "anxious",
        "fatigue",
        "feeling unwell",
        "cough",
        "sneezing",
        "runny noise",
        "sore throat",
        "muscle aches",
        "breathlessness",
        "painful urination",
        "dizziness",
        "unusually severe headache",
        "confusion",
        "disorientation or memory loss",
        "numbness",
        "weakness in an arm",
        "leg or the face",
        "abnormal speech",
        "slurred speech",
        "difficulty with comprehension loss of balance",
        "coordination or the ability to walk",
    ],
    PHISICAL_HEALTH_6: ["leg tenderness", "leg swelling"],
    PHISICAL_HEALTH_7: ["sharp chest pain", "out of breath"],
    PHISICAL_HEALTH_8: ["sad"],
    PHISICAL_HEALTH_9: ["fear"],
    PHISICAL_HEALTH_10: ["fatigue"],
};
//////////////////////////////////////////////////////////////////////

const EducationalText = {
    START_TEXT:
        "I am doctor B, I am the doctos in this space flight, how can I help you today?, do you have any complain?",

    PHISICAL_HEALTH_1:
        "The spaceflight associated neuro-ocular syndrome is a disease that affects 70 % of astronauts; the reasons why this disease occurs are still unclear, but found in astronauts who have undergone long duration space flight missions in microgravity environments, it may be due to increased intracranial pressure. (1)The Treatment is Acetazolamide 500 mg and 250 mg for 6 and 2 weeks respectively and it may decrease the cerebral pressure. (2)",
    PHISICAL_HEALTH_1_1: "Do you have a blurry vision?",
    PHISICAL_HEALTH_1_2: "Is your vision decreased when you look near? ",
    PHISICAL_HEALTH_1_3: "Do you have black spot in your vision?",

    PHISICAL_HEALTH_2:
        "you may have Space Adaptation Syndrome, This is experienced by about half of all astronauts during the first few days of their space voyage due to micro-pesanteur The treatment is to take drugs like Phenergan, Scopolamine or do some relaxation.",
    PHISICAL_HEALTH_2_1: "Do you have Nausea or  Headaches?",
    PHISICAL_HEALTH_2_2:
        "Do you have a sense that you or your surroundings are spinning or moving?",

    PHISICAL_HEALTH_3:
        "Heart Attack in space : You might need a echo, an electrocardiogram and emergency care with a cardiologist. The absence of gravitational forces affects the cardio-vascular system. During  take of orthostatic syncope can occur and astronauts might also be at greater risk for  developing atrial fibrillation. The amount of epicardial fat increases, the heart becomes more spherical and the left  atrial increases in size.Radiation-induced cardiovascular disease is a well-known complication of radiation exposure. Over the last few years, planning for deep space missions has increased interest in the effects of space radiation on the cardiovascular system, as an increasing number of astronauts will be exposed to space radiation for longer periods of time.There is increasing evidence that it promotes coronary artery disease. Astronauts are 5 times more likely to die of a heart problem. The chances that an astronaut, who went into deep space dies of a cardiac cause is 43%.Do we know In 6 months in space, the heart of an astronaut can age of 10 years (6)A chronic increase of blood pressure in head and neck can result in stiff arteries. Knowledge we gain from echo can help astronauts on earth but can also help people on earth who are sedentary, the eldery or at bed",
    PHISICAL_HEALTH_3_1: "Do you have any thoracic pain?",
    PHISICAL_HEALTH_3_2: "Do you decrease in your breath?",

    PHISICAL_HEALTH_4:
        " General Infection in space: Pneumonia, Urinary Tract Infection, respiratory tract infection:  You might need to take antibiotic then you will have a follow up with a doctor on earth.  A Flu in space is not trivial as the shift of body fluids, results in congestion of the head, including the nose. A simple cold can have a large impact on the wellbeing of astronauts. Nevertheless, in microgravity, potential microbial pathogens demonstrate enhanced expression of virulence factors. The ways that infections spread and how viruses and illnesses behave in the body changes when humans go to space. From the physical stresses that come with launching off-Earth to living in a confined environment without Earth's gravity, even 'regular' illnesses like colds can look much different for astronauts. It's interesting to ponder what would happen if such a virus were to spread in space. On rare occasions throughout spaceflight history, astronauts have fallen ill while in space. While floating off-Earth, astronauts have endured upper respiratory  infections (URI) or colds, urinary tract infections and skin infections.   Factors like radiation, microgravity, stress, and altered sleep cycles could all affect astronaut immune systems… Understanding these immune system changes may help scientists pinpoint the onset of illness, and suggest monitoring strategies, or treatments, that can boost the immune system and prevent full-blown infections and diseases here on Earth.",
    PHISICAL_HEALTH_4_1: "Do you have Fever or chills?",
    PHISICAL_HEALTH_4_2: "Do you feel dizzy?",
    PHISICAL_HEALTH_4_3: "Do you cough?",
    PHISICAL_HEALTH_4_4: "Does it burn when you urinate?",

    PHISICAL_HEALTH_5:
        " Stroke most likely, You need and emergency consultation Neurologic Disease-Cerebrovascular Diseas : Ischemic stroke is by far the most common  type of stroke, accounting for a large majority of strokes. There are two types of  ischemic stroke: thrombotic and embolic. A thrombotic stroke occurs when a blood clot,  called a thrombus, blocks an artery to the brain and stops blood flow. An embolic stroke  occurs when a piece of plaque or thrombus travels from its original site and blocks an   artery downstream. The material that has moved is called an embolus. How much of the  brain is damaged or affected depends on exactly how far downstream in the artery the  blockage occurs. Ischemic stroke is treated by removing the obstruction and restoring  blood flow to the brain. One treatment for ischemic stroke is the FDA-approved drug,  tissue plasminogen activator (tPA), which must be administered within a three-hour  window from the onset of symptoms to work best.  While an Hemorrhagic stroke usually requires surgery to relieve intracranial (within the  skull) pressure caused by bleeding.   By Telemedicine: contact a doctor on earth  for a follow up In space, astronauts are exposed to varied and increased levels of radiation that are different from those on Earth. Three major sources contribute to the space radiation environment: particles trapped in Earth’s magnetic field, solar energetic particles from the Sun, and galactic cosmic rays.  Increased risk of heart disease have been observed in human populations exposed to radiation on Earth. Health risks for astronauts from radiation exposure in space are mainly driven by long-term impacts.",
    PHISICAL_HEALTH_5_1: "Do you have difficulty seeing?",
    PHISICAL_HEALTH_5_2: "Do you have Nausea, Vomiting?",
    PHISICAL_HEALTH_5_3:
        "Do you have unusually severe headache, Confusion, disorientation or memory loss?",
    PHISICAL_HEALTH_5_4:
        "Do you have  Numbness, weakness in an arm, leg or the face?",
    PHISICAL_HEALTH_5_5:
        "Do you have abnormal speech, slurred speech, Difficulty with comprehension, loss of balance, coordination or the ability to walk?",

    PHISICAL_HEALTH_6:
        "Consult a specialist on earth by telemedicine Venous thrombosis is a condition in which a blood clot (thrombus) forms in a vein. This clot can limit blood flow through the vein, causing swelling and pain. Most commonly, venous thrombosis occurs in the 'deep veins' in the legs, thighs, or pelvis (figure 1). This is called a deep vein thrombosis, or DVT. DVT in the leg is the most common type of venous thrombosis. However, a clot can form anywhere in the venous system. If a part or all of the blood clot in the vein breaks off from the site where it is formed, it can travel through the venous system; this is called an embolus. If the embolus lodges in the lung, it is called a pulmonary embolus (PE), a serious condition that leads to over 50,000 deaths a year in the United States. In most cases, PE is caused when part of a DVT breaks off and lodges in the lung. The term 'venous thromboembolism' describes both DVT and PE. ",

    PHISICAL_HEALTH_7:
        "Pulmonary Embolism most likely : Emergency consultation on Earth + Blood Thinners",

    PHISICAL_HEALTH_8:
        "Depression in Space possible The types of problems you may encounter are a decline in mood, cognition, morale, or interpersonal interaction. You could also develop a sleep disorder because your circadian rhythm might be thrown off due to the 38 extra minutes each day on Mars, or by a small, noisy environment, or the stress of prolonged isolation and confinement  Treatment: simulate relaxing environments to help improve the mood of crews in isolation. Engaging in relevant, meaningful activities, including learning a language or learning new medical skills, could help ward off depression and boost morale Space Garden: which could have positive behavioral health benefits in addition to providing a fresh source of food and helping to purify the air Aerobic and resistive exercise has been shown to keep the heart healthy, bones and muscles strong, the mind alert, as well as maintain a more positive outlook.",
    PHISICAL_HEALTH_8_1: "Do you feel sad or guilty the whole day?",
    PHISICAL_HEALTH_8_2: "Since when?",
    PHISICAL_HEALTH_8_3: "Do you cry a lot?",
    PHISICAL_HEALTH_8_4: "Do you have suicidal ideas?",

    PHISICAL_HEALTH_9:
        " Anxiety Disorder in Space Ensuring astronauts get quality sleep is also important; otherwise, their internal biological clocks, or circadian rythm, might be altered by factors like different dark and light cycles, a small and noisy environment, the stress of prolonged isolation and confinement",
    PHISICAL_HEALTH_9_1: "Do you feel stressed?",
    PHISICAL_HEALTH_9_2: "Do you feel Fear?",
    PHISICAL_HEALTH_9_3: "Do you feel anxious about any event?",

    PHISICAL_HEALTH_10:
        "It is important to prepare for the fatigue astronauts may experience during spaceflight, given  that there will be times with heavy workloads and shifting schedules.  New lighting, spurred by the development of Light-Emitting Diode (LED) technology, is used  on the space station to help align astronaut’s circadian rhythms and to improve sleep,  alertness, and performance.",

    DOCTOR_EARTH: "you should go for a doctor by telemedicine on earth",
};
/////////////////////////////////////////////////////////////////////////////////////////////////

let recognition;
let speech = new SpeechSynthesisUtterance();
let statusVar = EnumStatus.STOP;
let convStatus = EnumConvStatus.START;
let setAnimationGlobal = () => {};

const elNavegadorEsCompatible = () => {
    if (
        navigator.userAgent.indexOf("Chrome") ||
        navigator.userAgent.indexOf("Edge") ||
        navigator.userAgent.indexOf("Safari")
    )
        return true;
    alert("-El Navegador no es compatible con el Reconocimiento de voz");
    console.log("-El Navegador no es compatible con el Reconocimiento de voz");
    return false;
};

function setSpeech() {
    return new Promise(function (resolve, reject) {
        let synth = window.speechSynthesis;
        const id = setInterval(() => {
            if (synth.getVoices().length !== 0) {
                let voices = synth.getVoices();
                voices = voices.filter((v) => v.name.indexOf("English") !== -1);
                console.log("/-/-/-/-/-");
                console.log(voices.map((v) => v.name));
                let validNames = [
                    false,
                    "Mark",
                    "David",
                    "William",
                    "Liam",
                    "Thomas",
                    "Ryan",
                ];

                const validation = (name) => {
                    return validNames.reduce(
                        (total, b) => total || name.indexOf(b) !== -1
                    );
                };
                voices = voices.filter((v) => validation(v.name));
                resolve(voices);
                clearInterval(id);
            }
        }, 10);
    });
}

const setupVoice = () => {
    speech.lang = "en";
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    setSpeech().then((v) => console.log(v));
};

const reproduceVoice = (text) => {
    speech.text = text;
    window.speechSynthesis.speak(speech);
};

const PlayText = (text) => {
    const animations = ["one","two","three"]
    const random = Math.floor(Math.random() * animations.length);

    setAnimationGlobal(animations[random])
    document.getElementById('text-doctor').innerHTML = "Doctor: "+text;
    console.log("Play: ", text);
    recognition.stop();
    statusVar = EnumStatus.STOP;
    console.log("PlayText stop");
    setTimeout(function () {
        reproduceVoice(text);
        statusVar = EnumStatus.PLAYING;
        speech.onend = () => {
            console.log("stop---");
            //setTimeout(()=>{
            statusVar = EnumStatus.RECORDING;
            recognition.start();
            document.getElementById('text-user').innerHTML = "User: --";
            setAnimationGlobal("idle")
            //}, 2000)
        };
    }, 2000);
};

const KeywordsValidator = (text, keywords) => {
    console.log(
        "KeywordsValidator: ",
        text,
        [false]
            .concat(keywords)
            .reduce((total, b) => total || text.indexOf(b) !== -1)
    );
    return [false]
        .concat(keywords)
        .reduce((total, b) => total || text.indexOf(b) !== -1);
};

const IsYes = (text) => {
    console.log("IsYes: ", text, text.toLowerCase().indexOf("yes") !== -1);
    return text.toLowerCase().indexOf("yes") !== -1;
};

const ProcessText = (text, fromQuestion, toQuestion) => {
    if (convStatus == EnumConvStatus[fromQuestion]) {
        PhysicalHealthResponse[fromQuestion] = IsYes(text);
        PlayText(EducationalText[toQuestion]);
        convStatus = EnumConvStatus[toQuestion];
        return true;
    }
    return false;
};

const chatbotInput = (text) => {
    document.getElementById('text-user').innerHTML = "User: "+text;
    if (text.length >= 2) {
        if (convStatus == EnumConvStatus.START) {
            PlayText(EducationalText.START_TEXT);
            convStatus = EnumConvStatus.SELECT;
        }

        if (convStatus == EnumConvStatus.SELECT) {
            if (KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_1)) {
                PlayText(EducationalText.PHISICAL_HEALTH_1_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_1_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_2)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_2_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_2_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_3)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_3_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_3_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_4)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_4_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_4_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_5)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_5_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_5_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_6)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_6);
                //convStatus = EnumConvStatus.PHISICAL_HEALTH_6_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_7)
            ) {
                ////////////////////////////////
                PlayText(EducationalText.PHISICAL_HEALTH_7);
                //convStatus = EnumConvStatus.PHISICAL_HEALTH_7_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_8)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_8_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_8_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_9)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_9_1);
                convStatus = EnumConvStatus.PHISICAL_HEALTH_9_1;
                return;
            } else if (
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_10)
            ) {
                PlayText(EducationalText.PHISICAL_HEALTH_10);
                //convStatus = EnumConvStatus.PHISICAL_HEALTH_10_1;
                return;
            } else {
                //PlayText(EducationalText.DOCTOR_EARTH);
                return;
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_1

        if (ProcessText(text, "PHISICAL_HEALTH_1_1", "PHISICAL_HEALTH_1_2")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_1_2", "PHISICAL_HEALTH_1_3")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_1_3) {
            PhysicalHealthResponse.PHISICAL_HEALTH_1_3 = IsYes(text);
            const valid =
                PhysicalHealthResponse.PHISICAL_HEALTH_1_1 ||
                PhysicalHealthResponse.PHISICAL_HEALTH_1_2 ||
                PhysicalHealthResponse.PHISICAL_HEALTH_1_3;
            if (valid) {
                PlayText(EducationalText.PHISICAL_HEALTH_1);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_2
        if (ProcessText(text, "PHISICAL_HEALTH_2_1", "PHISICAL_HEALTH_2_2")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_2_2) {
            PhysicalHealthResponse.PHISICAL_HEALTH_2_2 = IsYes(text);
            const valid =
                PhysicalHealthResponse.PHISICAL_HEALTH_2_1 ||
                PhysicalHealthResponse.PHISICAL_HEALTH_2_2;
            if (valid) {
                PlayText(EducationalText.PHISICAL_HEALTH_2);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_3
        if (ProcessText(text, "PHISICAL_HEALTH_3_1", "PHISICAL_HEALTH_3_2")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_3_2) {
            PhysicalHealthResponse.PHISICAL_HEALTH_3_2 = IsYes(text);
            const valid =
                PhysicalHealthResponse.PHISICAL_HEALTH_3_1 ||
                PhysicalHealthResponse.PHISICAL_HEALTH_3_2;
            if (valid) {
                PlayText(EducationalText.PHISICAL_HEALTH_3);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_4
        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_4_1) {
            PhysicalHealthResponse.PHISICAL_HEALTH_4_1 =
                IsYes(text) ||
                KeywordsValidator(text, KeywordsByParagraff.PHISICAL_HEALTH_4_1);
            PlayText(EducationalText.PHISICAL_HEALTH_4_2);
            convStatus = EnumConvStatus.PHISICAL_HEALTH_4_2;
            return;
        }

        if (ProcessText(text, "PHISICAL_HEALTH_4_2", "PHISICAL_HEALTH_4_3")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_4_3", "PHISICAL_HEALTH_4_4")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_4_4) {
            PhysicalHealthResponse.PHISICAL_HEALTH_4_4 = IsYes(text);
            let count = 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_4_1 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_4_2 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_4_3 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_4_4 ? 1 : 0;

            if (count >= 2) {
                PlayText(EducationalText.PHISICAL_HEALTH_4);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_5
        if (ProcessText(text, "PHISICAL_HEALTH_5_1", "PHISICAL_HEALTH_5_2")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_5_2", "PHISICAL_HEALTH_5_3")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_5_3", "PHISICAL_HEALTH_5_4")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_5_4", "PHISICAL_HEALTH_5_5")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_5_5) {
            PhysicalHealthResponse.PHISICAL_HEALTH_5_5 = IsYes(text);
            let count = 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_5_1 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_5_2 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_5_3 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_5_4 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_5_5 ? 1 : 0;

            if (count >= 2) {
                PlayText(EducationalText.PHISICAL_HEALTH_5);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_8
        if (ProcessText(text, "PHISICAL_HEALTH_8_1", "PHISICAL_HEALTH_8_2")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_8_2", "PHISICAL_HEALTH_8_3")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_8_3", "PHISICAL_HEALTH_8_4")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_8_4) {
            PhysicalHealthResponse.PHISICAL_HEALTH_8_4 = IsYes(text);
            let count = 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_8_1 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_8_2 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_8_3 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_8_4 ? 1 : 0;

            if (count >= 1) {
                PlayText(EducationalText.PHISICAL_HEALTH_8);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_9
        if (ProcessText(text, "PHISICAL_HEALTH_9_1", "PHISICAL_HEALTH_9_2")) {
            return;
        }
        if (ProcessText(text, "PHISICAL_HEALTH_9_2", "PHISICAL_HEALTH_9_3")) {
            return;
        }

        if (convStatus == EnumConvStatus.PHISICAL_HEALTH_9_3) {
            PhysicalHealthResponse.PHISICAL_HEALTH_9_3 = IsYes(text);
            let count = 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_9_1 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_9_2 ? 1 : 0;
            count += PhysicalHealthResponse.PHISICAL_HEALTH_9_3 ? 1 : 0;

            if (count >= 1) {
                PlayText(EducationalText.PHISICAL_HEALTH_9);
            } else {
                PlayText(EducationalText.DOCTOR_EARTH);
            }
            convStatus = EnumConvStatus.SELECT;
            return;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////// PHISICAL_HEALTH_10
    }
};

const voiceRecoderStart = (setAnimation) => {
    setAnimationGlobal = setAnimation
    console.log("///////////////////////////////////");
    setupVoice();
    if (elNavegadorEsCompatible()) {
        console.log("+El Navegador es compatible con el Reconocimiento de voz");
        recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition)();

        recognition.lang = "en-US";
        /*recognition.onend = (event) => {
                recognition.stop();
                recognition.start();
            };*/

        recognition.onresult = (resultado) => {
            const text = resultado.results[0][0].transcript;
            document.getElementById("text-user").innerHTML = "User: "+text;
            console.log("Capture: ", text.trim());
            chatbotInput(text.trim());
        };

        setInterval(() => {
            console.log(
                "Recording...",
                statusVar,
                statusVar === EnumStatus.RECORDING
            );
            if (statusVar === EnumStatus.RECORDING) {
                recognition.stop();
                statusVar = EnumStatus.STOP;
                console.log("Recording stop");

                statusVar = EnumStatus.RECORDING;
                recognition.start();
            }
        }, 5000);
        recognition.start();
        statusVar = EnumStatus.RECORDING;
    }
};

const stop = () => {
    console.log("stop STOP");
    recognition.stop();
    statusVar = EnumStatus.STOP;
};

const miFunc = () => {
    voiceRecoderStart();
};

export { voiceRecoderStart };