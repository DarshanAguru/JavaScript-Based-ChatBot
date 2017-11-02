//  Text field id = inText
//  Screen id = dialog
//  .inti (p  >  [b])
//  .us (p   >  [b])

var  dictionary  =  {
"HOW ARE YOU"  :   [
                                     "Fine, thanks.",
                                     "Good!",
                                     "Boored.",
                                     "Charged.",
                                     "Calm.",
                                     "Cool.",
                                     "Happy!"
                                      ],
"WHO ARE YOU"  :   [
                                    "Computer.",
                                    "Personal Assistance.",
                                    "Kid.",
                                    "A gaming Hub." 
                                     ],
"WHAT IS YOUR NAME"  :   [
                                              "My name is INTI.",
                                              "You can call me INTI.",
                                              "What ever you wish you can call.",
                                              "If you want you can call me INTI.",
                                              "Its INTI."
                                               ],
"WHAT IS YOUR AGE"  :   [
                                           "about Million Years.",
                                           "Why don't you search in Google.",
                                           "Don't Know.",
                                           "can't guess." 
                                            ],
"CAN YOU TALK TO ME"  : [
                                              "Yes I'm free now.",
                                              "Oh sorry! I am doing some logical processes.",
                                              "What do you want to say.",
                                               ],
"CAN YOU CHAT WITH ME"   :   [
                                                       "I think I am doing it now!",
                                                       "OK.",
                                                       "Sure.",
                                                       "I can.",
                                                       "Why not."
                                                         ],
"HI"  :   [
            "Namaste. How are you?"
             ],
"HELLO"  :    [
                       "Hola!  How are You?"
                        ],  
"FINE"  :   [
                  "Me too.",
                  "Nice.",
                  "I'm not.",
                  "Good."
                   ],
"GOOD"  :   [
                     "Oh! me too.",
                     "Cool.",
                     "I'm Not"
                      ],
"HII"  :   [
               "Hello!  How are you?"
                ],
"WHY NOT"  :   [
                           "Cause I am fighting with viruses.",
                           "Having fever.",
                           "Just Kidding."
                             ], 
"ITS BOORING"  :   [
                                  "Let's play games.",
                                  "Me too.",
                                  "Surf on web."
                                  ],
"WHAT ARE YOU DOING"  :  [
                                                 "Doing some million logical processes.",
                                                 "Chatting with you.",
                                                 "Enjoying an electric bath."
                                                  ],
"BYE"  :  [
                "See ya!",
                "Bye!",
                "Good Bye!",
                "Come again."
                  ],
"OK" :  [
              ":)"
              ]
};

//  Takes input from <input type=text>
//  @param textField HTML Element where input is being taken from
function  takeInput(e)  {

// e.which ==  13  -> ENTER
if  (e.which != 13)  {
return false;
}

 var  question = this.value;
 appendOutput("<p class='us'><b>You  &raquo;</b>"  +  question  +  "</p>", out);
 appendOutput("<p clas='inti'><b>INTI  &raquo;</b>"  +  processInput(question)  +  "</p>", out);
 appendOutput("<hr/>",  out);

  this.focus();
  this.select();

out.scrollByLines(100);
}

// process input
function processInput(question)  {
   var  answer = "I'm sorry. I can't find....";

  //  #1 using a dictionary
   if  (dictionary[question.toUpperCase()])  {
   var randkey  =  parseInt(Math.random()    *  dictionary[question.toUpperCase()].length);
   answer  =  dictionary[question.toUpperCase()][randkey];
}

return  answer;
}


//  Displays output
//  @param message string Message to be displayed
//  @param dest HTML Element where message is to be displayed
function  appendOutput(message, dest)  {
dest.innerHTML  +=  message;

}


//  Init code
var input = document.getElementById("inText");
input.onkeyup = takeInput;
var out = document.getElementById("dialog");

input.focus();