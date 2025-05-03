const slot1Options = ['🔍', '❤️', '🎭', '🌟'];
const slot2Options = ['🏛', '🖼', '👤', '👩‍🎨'];
const slot3FinalOptions = ['❓', '⁉️', '⚡', '💭', '🔔', '🔮'];
const slot3SpinOptions = ['🎉', '🌈', '🔥', '⭐', '💥', '💫', '✨', '🌟', '🎯', '🎲'];

const promptMap = {
    '🔍🏛': "What’s something you learned about a gallery or UMMA space?",
    '🔍🖼': "What’s something you learned about an artwork you saw today?",
    '🔍👤': "What’s something you learned about yourself or your community during your visit?",
    '🔍👩‍🎨': "What’s something you learned about an artist you saw today?",

    '❤️🏛': "What was your favorite part of a gallery or UMMA space?",
    '❤️🖼': "What was your favorite part of an artwork you saw today?",
    '❤️👤': "What was your favorite part of connecting with yourself or your community here?",
    '❤️👩‍🎨': "What was your favorite part of experiencing an artist’s work today?",

    '🎭🏛': "Describe an emotion you felt while experiencing a gallery or UMMA space.",
    '🎭🖼': "Describe an emotion you felt while experiencing an artwork.",
    '🎭👤': "Describe an emotion you felt while reflecting on yourself or your community here.",
    '🎭👩‍🎨': "Describe an emotion you felt while engaging with an artist’s work.",

    '🌟🏛': "Share a highlight related to a gallery or UMMA space.",
    '🌟🖼': "Share a highlight related to an artwork you encountered today.",
    '🌟👤': "Share a highlight related to your personal or community experience here.",
    '🌟👩‍🎨': "Share a highlight related to an artist you learned about today."
};

function spinSlotTogether(slots, optionsArray, stopDelays) {
    return Promise.all(slots.map((slotElement, index) => {
        return new Promise((resolve) => {
            const options = optionsArray[index];
            let interval = setInterval(() => {
                const randomSymbol = options[Math.floor(Math.random() * options.length)];
                slotElement.textContent = randomSymbol;
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                let finalSymbol;
                if (index === 2) {
                    finalSymbol = slot3FinalOptions[Math.floor(Math.random() * slot3FinalOptions.length)];
                } else {
                    finalSymbol = options[Math.floor(Math.random() * options.length)];
                }
                slotElement.textContent = finalSymbol;
                resolve(finalSymbol);
            }, stopDelays[index]);
        });
    }));
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('spinButton').addEventListener('click', async function() {
        document.getElementById('prompt').textContent = '';

        const slots = [
            document.getElementById('slot1'),
            document.getElementById('slot2'),
            document.getElementById('slot3')
        ];

        const stopDelays = [1500, 2500, 3500];

        const [s1, s2] = await spinSlotTogether(slots, [slot1Options, slot2Options, slot3SpinOptions], stopDelays);

        const key = s1 + s2;
        const promptText = promptMap[key] || "Tell us something interesting about your visit!";

        document.getElementById('prompt').textContent = promptText;

        const formContainer = document.querySelector('#gravity-form-container');
        const hiddenInput = document.querySelector('input[name="input_40_1"]');

        formContainer.style.display = 'block'; // show the form
        if (hiddenInput) {
            hiddenInput.value = promptText;
            const event = new Event('change', { bubbles: true });
                hiddenInput.dispatchEvent(event);
               }// autofill the hidden prompt field
            }
        });
});
