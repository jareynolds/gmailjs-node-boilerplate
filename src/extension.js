"use strict";

// I added these so that I could do REST
const Request = require('request');
const Handlebars = require('handlebars');

// I installed a new rest handler that seems to be more straight forward
//var unirest = require('unirest');


// this part is from the boilerplate
console.log("Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;
const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail($);
let senderEmail = '';


window.gmail = gmail;


//  a function for auth and risk score
function getDTAuth(senderEmail) {

    var dtauth = require("./dtauth.js");
    var value = dtauth.getTokenAuth(senderEmail);
    console.log("(getDTAuth) Authenticating to DT for: ", senderEmail);
}
    
    
// main code
gmail.observe.on("load", () => {
   
    const userEmail = gmail.get.user_email();

    gmail.observe.on("view_email", (domEmail) => {
        const emailData = gmail.new.get.email_data(domEmail);
        getDTAuth(emailData.from.address);

    });
});

