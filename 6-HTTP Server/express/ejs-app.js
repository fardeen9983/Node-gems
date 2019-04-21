//Make use of EJS for dynamic content delivery with express framework

//Set up express server
const express = require('express');
const app = express();
app.listen(3000);

/** Set the View Engine for express server to EJS
 * This will set the view delivery engine to EJS
 * Also first create a views (default name) folder in app root directory for storing our EJS templates 
 * This will be lookeup up by the server when requested for web pages
 * Inside the directory place all the ejs versions of Web pages
 * 'ejs' is the template for express application's view
*/
app.set('view engine','ejs')

/** Render the EJS page dynamically
 * Set the URL and accept user input and pass it as paramater onto the rendered page
 */
app.get('/:userQuery',(req,res)=>{
    /** EJS templates are not sent simply as response but are rendered 
     * method : render
     * arg0 : String - .ejs file placed in views folder
     * arg1 : Object some data to pass
    */
    res.render('index',
    {
        data : { 
            userQuery : req.params.userQuery,
            searchResults : ['book1','book2','book3'],
            loggedin : false, 
            username : 'fk'
        }
    });
})