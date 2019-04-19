"use strict";

function homeController() { 
    const ctrl = this;
    
}


angular
.module('MySiteApp')  
.component('home', {
    template: `
    <h1>Home</h1>
    `,
    controller: homeController
});