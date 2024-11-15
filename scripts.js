const stories = [
    {
        text: "Érase una vez un lobo que quería ser amigo de los corderos."
    },
    {
        text: "Había una vez una tortuga que quería ganar una carrera."
    },
    {
        text: "Una niña que siempre llevaba una capa roja y visitaba a su abuela."
    }
];

let currentStoryIndex = 0;

function showStory() {
    const story = stories[currentStoryIndex];
    document.getElementById('story-text').innerText = story.text;
}

document.getElementById('next-button').onclick = function() {
    currentStoryIndex++;
    if (currentStoryIndex < stories.length) {
        showStory();
    } else {
        document.getElementById('story-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        askQuestion();
    }
};

function askQuestion() {
    const question = "¿Te gustó el cuento?";
    document.getElementById('question').innerText = question;
}

function answer(response) {
    alert("Has respondido: " + response);
}

// Mostrar el primer cuento al cargar la página
showStory();

