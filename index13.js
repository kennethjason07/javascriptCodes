//Modules

//index13.js

export function abc()
{

}

export function def(){

}

//app.js

import{abc,def}="./index13.js"

//index13.js

export default function abc(){

}

//app.js

import def from "./index13.js"

def();