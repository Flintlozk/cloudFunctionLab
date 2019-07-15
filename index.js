const { WebhookClient } = require("dialogflow-fulfillment");

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */


exports.initFunction = (req,res) =>{
	const agent = new WebhookClient({ request: req, response: res });
  	const { Card, Suggestion } = require("dialogflow-fulfillment");
	let intentMap = new Map();
  
  	function mainFunc(agent) {
    	agent.add(`SERVER 1: GOOD \nSERVER 2: GOOD \nSERVER 3: FALSE \n`)
    	console.log("WHAT YOU NEED ME TO DO");
  	}

 	function checker(agent) {
    	agent.add("Inititate Cloud State. . .");
    	agent.add("READY TO GO;");
  	}
  
  	if (agent.requestSource === "FACEBOOK") {
    	intentMap.set("Init", checker);
    	intentMap.set("Main Function", mainFunc);
  	}
 
  	agent.handleRequest(intentMap);
}