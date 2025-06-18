// funnyAnimalJokes.js
// Generates a funny animal joke using OpenAI API

const { OpenAI } = require('openai');
require('dotenv').config();

async function makeFunnyAnimalJoke() {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    // Array of random animals
    const animals = [
        'penguin', 'elephant', 'giraffe', 'platypus', 'octopus',
        'kangaroo', 'sloth', 'flamingo', 'hedgehog', 'llama',
        'koala', 'panda', 'armadillo', 'narwhal', 'peacock',
        'capybara', 'quokka', 'axolotl', 'meerkat', 'alpaca',
        'toucan', 'chameleon', 'otter', 'raccoon', 'chinchilla'
    ];
    
    // Randomly select an animal
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    const prompt = `Tell me a funny original joke about a ${randomAnimal}.`;
    
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a comedian who tells animal jokes.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 100
        });

        const joke = response.choices[0].message.content.trim();
        console.log(`Here's a funny ${randomAnimal} joke:\n`, joke);
    } catch (error) {
        console.error('Error generating joke:', error);
    }
}

// Run the joke function if this file is executed directly
if (require.main === module) {
    makeFunnyAnimalJoke();
}

module.exports = makeFunnyAnimalJoke;