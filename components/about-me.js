"use strict";

function aboutMeController() { 
    const ctrl = this;
    
}


angular
.module('MySiteApp')  
.component('aboutMe', {
    template: `
    <h1>About Me</h1>
    `,
    controller: aboutMeController
});