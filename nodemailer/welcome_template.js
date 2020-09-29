const Welcome = data => {

  return `
  <!DOCTYPE html>
  <html style="margin: 0; padding: 0;">
  
      <head>
          <title>Welcome!</title>
      </head>
  
          <body style="margin: 0; padding: 0;">
             <br />
             <br />
             <div>Welcome to Vote Goat!</div>
             <br />
             <div>Go to https://vote-goat.herokuapp.com to become a more informed voter.</div>
             <br />
             <br />
          </body>
  
    </html>
   `;
};

module.exports = { Welcome };