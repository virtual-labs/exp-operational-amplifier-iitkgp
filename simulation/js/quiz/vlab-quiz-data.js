/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Determine the output voltage of the differentiator?",
            "a": [
                {"option": "VO = RF×C1×[dVin/dt] ", "correct": false},
                {"option": "VO = RF×CF×[dVin/dt].", "correct": false},
                {"option": " VO = -RF×C1×[dVin/dt].", "correct": true},
                {"option": " None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "	Inverting amplifier connection is more widely used because it has ",
            "a": [
                {"option": "higher gain", "correct":false},
                {"option": "better frequencystability", "correct": false},
                {"option": " unit gain", "correct":false},
                {"option": " none of the above", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "What is the output Integrator If we give the sinusoidal input",
            "a": [
                {"option": "Square", "correct": false},
                {"option": "Sine", "correct": false},
                {"option": "Triangle", "correct": true},
                {"option": " Linear", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": "This circuit is referred to as a(n) <p style=\"text-align:center\"><img src=\"image/integq.png \" style=\"width:350px;height:200px\"></p>", 
            "a": [
                {"option": "inverting amplifier", "correct": false},
                {"option": "noninverting amplifier", "correct": false},
                {"option": "  integrator", "correct": true},
                {"option": " differentiator", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "Opamp differentiator uses",
            "a": [
                {"option": "Resistor as feedback element", "correct": true},
                {"option": "Capacitor as feedback element", "correct": false},
                {"option": "Inductor as feedback element", "correct": false},
                {"option": "Simple wire as feedback element", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
		//{// Question 6 - Multiple Choice, Single True Answer
            //"q": " The switching speed could be improved by using",
           // "a": [
              //  {"option": " Zener diode at output", "correct": false},
              //  {"option": " Two Zener diode connected back to back at output", "correct": true},
              //  {"option": "Feed back resistor", "correct": false},
               // {"option": "Capacitor in feedback", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            //],
            //"correct": "",
           // "incorrect": "" // no comma here
       
        //}
    ]
};




 