<template>
    <html>

    <body>
        <main>
            <div class="main_quiz">
                <div class="question_quiz">
                    <h3>{{ infos.titre }}</h3>
                </div>
                <div class="reponses">
                    <div class="reponse_quiz" v-for="item1 in infos.reponses" :key="item1.id" :id="item1.id">
                        <p>{{ item1.phrase[1] }}</p>
                    </div>
                </div>
                <button @click="get_next_question">Valider</button>
            </div>
        </main>
    </body>

    </html>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
    setup() {
        var infos = ref({})
        async function get_next_question() {
            try {
                // Faites un appel à l'API pour récupérer les détails de l'utilisateur connecté
                const response = await axios.get('http://klebert-host.com:60513/get_random_question');
                console.log(response.data);
                infos.value = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération de la question', error);
            }
        }

        return {
            get_next_question,
            infos,
        }
    },
    onCreated() {
        this.get_next_question();
    },
    // data() {
    //     infos: {
    //         // id: 0,
    //         // question: "Qu'est-ce que le réchauffement climatique ?",
    //         // answer: [
    //         //     "Le réchauffement climatique est l'augmentation à long terme de la température moyenne de la Terre.",
    //         //     "d) Il fait fondre les glaciers uniquement pendant la nuit",
    //         //     "c) Extinction de certaines espèces",
    //         //     "c) Il réduit les phénomènes météorologiques extrêmes dans certaines régions"
    //         // ]
    //     }
    // }
};

</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

main {
    width: 100%;
    height: 100%;
}

.main_quiz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.reponses {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

.reponse_quiz {
    border-radius: 58px;
    padding: 1rem;
    margin: 0.5rem;
    border: 5px solid #cccccc;
    width: 30%;
    height: 50%;
}

.question_quiz {
    margin-bottom: 1rem;
}

button {
    border-radius: 58px;
    padding: 1rem;
    margin: 0.5rem;
    background-color: green;
    color: white;
    font-weight: 700;
    font-size: large;
    border: 5px solid #353535;
    width: 20%;
    height: 40%;
}
</style>