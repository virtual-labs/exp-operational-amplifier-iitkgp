/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var prequizJSON = {
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
    "prequestions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "preq": "Differentiation amplifier produces",
            "prea": [
			 {"option":"Output waveform as integration of input waveform", "correct": false},
                {"option":"Input waveform as integration of output waveform", "correct": false},              
                {"option":"Output waveform as derivative of input waveform", "correct": true},
				{"option": "Input waveform as derivative of output waveform", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": "Which factor makes the differentiator circuit unstable?",
            "prea": [
                {"option": "Output Impedence", "correct":false},
                {"option": "Gain", "correct": true},
				{"option": "Noise", "correct": false},
				{"option": "Input voltage", "correct": false}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": "What will be  the output differentiator if we give sinosoidal input",
            "prea": [
                {"option": "Triangle", "correct": false},
                {"option": "Square", "correct": true},
               {"option": "Sine", "correct": false},
				{"option": "Linear", "correct": false}// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "Opamp integrator uses",
            "prea": [
                {"option": "Resistor as a feedback element ", "correct": false},
                {"option": "Capacitor as a feedback element ", "correct": true},
                {"option": "Inductor as a feedback element ", "correct": false},
                {"option": "Simple wire as a feedback element ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": "An Opamp can be used to generate the waveform having shape",
            "prea": [
                {"option": "Pulse", "correct": false},
                {"option": " Square", "correct": false},
                {"option": "Triangle", "correct": false},
                {"option": "All of the above", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
		//{// Question 6 - Multiple Choice, Single True Answer
            //"preq": "  The speed of switching in the Schmitt trigger depends on ",
            //"prea": [
               // {"option": " Open loop gain ", "correct": true},
                //{"option": " Input resistor", "correct": false},
                //{"option": " Hysteresis", "correct": false},
                //{"option": "  Feedback resistor", "correct": false} // no comma here
           // ],
            //"correct": "",
            //"incorrect": "" // no comma here
       
       // }	
    ]
};
