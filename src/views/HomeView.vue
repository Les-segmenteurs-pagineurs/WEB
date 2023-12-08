<template>
    <main>
        <div class="main">
            <div class="question" v-for="(item, id) in faq" :key="id" :id="id">
                <h3>{{ item.question }}</h3>
                <br>
                <p>{{ item.answer }}</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            faq: [
                {
                    id: 0,
                    question: "Qu'est-ce que le réchauffement climatique ?",
                    answer: "Le réchauffement climatique est l'augmentation à long terme de la température moyenne de la Terre."
                },
                {
                    id: 1,
                    question: "Quelles sont les causes du réchauffement climatique ?",
                    answer: "Les principales causes sont l'activité humaine, notamment les émissions de gaz à effet de serre."
                },
                {
                    id: 2,
                    question: "Quel est l'effet de serre ?",
                    answer: "L'effet de serre est un processus naturel qui maintient la température de la Terre en emprisonnant une partie de la chaleur du soleil dans l'atmosphère."
                },
                {
                    id: 3,
                    question: "Quels sont les gaz à effet de serre les plus préoccupants ?",
                    answer: "Les principaux gaz à effet de serre d'origine humaine sont le dioxyde de carbone (CO2), le méthane (CH4) et le protoxyde d'azote (N2O)."
                },
                {
                    id: 4,
                    question: "Quels sont les effets du réchauffement climatique sur l'environnement ?",
                    answer: "Le réchauffement climatique peut entraîner la fonte des glaciers, l'élévation du niveau de la mer, des événements météorologiques extrêmes et perturber les écosystèmes naturels."
                },
                {
                    id: 5,
                    question: "Comment pouvons-nous lutter contre le réchauffement climatique ?",
                    answer: "Nous pouvons agir en réduisant nos émissions de gaz à effet de serre, en utilisant des énergies renouvelables, en encourageant la préservation des forêts et en adoptant des pratiques plus durables."
                },
                {
                    id: 6,
                    question: "Quelle est la différence entre réchauffement climatique et changement climatique ?",
                    answer: "Le réchauffement climatique fait référence à l'augmentation de la température moyenne, tandis que le changement climatique englobe un éventail plus large de phénomènes liés aux variations climatiques."
                },
                {
                    id: 7,
                    question: "Quelle est l'importance des accords internationaux sur le climat comme l'Accord de Paris ?",
                    answer: "Ces accords visent à réduire les émissions de gaz à effet de serre pour limiter le réchauffement climatique et à encourager la coopération mondiale pour faire face à ce défi mondial."
                },
                {
                    id: 8,
                    question: "Comment le réchauffement climatique affecte-t-il la biodiversité ?",
                    answer: "Le réchauffement climatique peut perturber les habitats naturels, entraîner des migrations d'espèces, augmenter le risque d'extinction pour certaines espèces et modifier les écosystèmes."
                },
                {
                    id: 9,
                    question: "Quels sont les secteurs les plus touchés par le réchauffement climatique ?",
                    answer: "Les secteurs comme l'agriculture, les ressources en eau, la santé publique, l'économie et la sécurité alimentaire peuvent être fortement affectés par les changements climatiques."
                },
                {
                    id: 10,
                    question: "Quels sont les effets du réchauffement climatique sur l'agriculture ?",
                    answer: "Le réchauffement climatique peut affecter l'agriculture en modifiant les schémas météorologiques, en augmentant les risques de sécheresse, d'inondation et de perte de récoltes."
                },
                {
                    id: 11,
                    question: "Quel est le lien entre le réchauffement climatique et la fonte des glaciers ?",
                    answer: "Le réchauffement climatique contribue à la fonte des glaciers en augmentant les températures, ce qui entraîne une fonte plus rapide et une élévation du niveau de la mer."
                },
                {
                    id: 12,
                    question: "Comment le réchauffement climatique affecte-t-il la santé humaine ?",
                    answer: "Le réchauffement climatique peut avoir des conséquences sur la santé humaine en amplifiant les maladies liées à la chaleur, en augmentant les risques d'allergies et en aggravant les problèmes respiratoires."
                },
                {
                    id: 13,
                    question: "Quels sont les effets du réchauffement climatique sur les océans ?",
                    answer: "Le réchauffement climatique peut provoquer l'acidification des océans, la fonte des calottes glaciaires, la perturbation des écosystèmes marins et l'élévation du niveau de la mer."
                },
                {
                    id: 14,
                    question: "Quel est l'impact du réchauffement climatique sur la biodiversité ?",
                    answer: "Le réchauffement climatique peut entraîner des perturbations dans les habitats naturels, des migrations d'espèces, des extinctions potentielles et des changements dans les chaînes alimentaires."
                },
                {
                    id: 15,
                    question: "Comment le réchauffement climatique influence-t-il les événements météorologiques extrêmes ?",
                    answer: "Le réchauffement climatique peut intensifier les événements météorologiques extrêmes tels que les tempêtes, les ouragans, les sécheresses et les inondations."
                },
                {
                    id: 16,
                    question: "Quels sont les risques économiques liés au réchauffement climatique ?",
                    answer: "Le réchauffement climatique peut entraîner des pertes économiques importantes, notamment des dommages aux infrastructures, des coûts de reconstruction et des pertes de production."
                },
                {
                    id: 17,
                    question: "Quels sont les efforts mondiaux pour lutter contre le réchauffement climatique ?",
                    answer: "Les initiatives mondiales comprennent des accords tels que l'Accord de Paris, visant à réduire les émissions de gaz à effet de serre et à promouvoir des pratiques durables."
                },
                {
                    id: 18,
                    question: "Quelles sont les conséquences du réchauffement climatique sur les ressources en eau ?",
                    answer: "Le réchauffement climatique peut affecter les ressources en eau en modifiant les modèles de précipitations, en augmentant les pénuries d'eau et en perturbant les écosystèmes aquatiques."
                },
                {
                    id: 19,
                    question: "Comment le réchauffement climatique peut-il affecter les migrations humaines ?",
                    answer: "Le réchauffement climatique peut influencer les migrations humaines en augmentant les déplacements dus à des conditions météorologiques extrêmes, à la perte de terres et à la montée du niveau de la mer."
                }
            ]
        };
    }
};
</script>

<style>
main {
    padding-top: 3%;
    color: black;
}

.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem;
}

.question {
    background-color: #CCCCCC;
    border: 1px solid black;
    border-radius: 0.5rem;
    max-width: 20%;
    margin: 0 0 1rem 1rem;
    padding: 1rem;
}

p {
    font-weight: 400;
    margin: 0;
}

h3 {
    font-weight: 900;
    font-size: x-large;
    margin: 0;
}

ul {
    list-style-type: none;
    padding: 0;
}
</style>