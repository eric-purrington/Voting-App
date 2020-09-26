const Events = data => {


// How to put specific event that was saved into this email?
  return `
    <!DOCTYPE html>
   <html style="margin: 0; padding: 0;">
   
       <head>
           <title>Events</title>
       </head>
   
           <body style="margin: 0; padding: 0;">
              <br />
              <br />
              <div>You have saved events!</div>
              <br />
              <br />
           </body>
   
     </html>
    `;
};

module.exports = { Events };