import React, { useState } from 'react';

function AiHelp(){

// dependencies
const { OpenAI } = require('langchain/llms/openai');
const inquirer = require('inquirer');
const { PromptTemplate } = require("langchain/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");
require('dotenv').config();


// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
    model: 'gpt-3.5-turbo'
});

// Uses the instantiated OpenAI wrapper, model, and makes a call based on input from inquirer
const promptFunc = async (input) => {
    try {
        const res = await model.call(input);
        //console.log(res);

        // Instantiation of a new object called "prompt" using the "PromptTemplate" class
        const prompt = new PromptTemplate({
            template: "You are an expert on California benefits programs like Medi-Cal, Calworks, Calfresh, General Relief and will answer the user’s benefits questions thoroughly as possible.\n{format_instructions}\n{question}",
            inputVariables: ["question"],
            partialVariables: { format_instructions: formatInstructions },
        });


        const promptInput = await prompt.format({
            question: input
        });


        console.log(await parser.parse(res));

    }
    catch (err) {
        console.error(err);
    }
};

// Initialization function that uses inquirer to prompt the user and returns a promise. It takes the user input and passes it through the call method
const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Ask question about Benefits Programs (CF/CW/MC/GR):',
        },
    ]).then((inquirerResponse) => {
        promptFunc(inquirerResponse.name)
    });
};

// Calls the initialization function and starts the script
init();

// With a `StructuredOutputParser` we can define a schema for the output.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
    code: "Detailed answer that answers the user's question",
    explanation: "detailed explanation of the example provided",
});

const formatInstructions = parser.getFormatInstructions();
}
export default AiHelp;