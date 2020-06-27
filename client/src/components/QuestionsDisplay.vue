<template lang="html">

    <div>
        {{ findCorrectAnswer() }}

        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }}</h3>

        <div class="slidecontainer">
          <input type="range" min="1" :max="" value="50" class="slider" id="slider" v-model="guessAnswer">
        </div>

    </div>

</template>

<script>


    export default {
        name: 'questions-display',
        data() {
            guessAnswer: null,
            correctAnswer: null
        },
        props: {
            selectedAnimal: Object,
            selectedQuestion: Object
        },
        methods: {
            findCorrectAnswer(){
                this.correctAnswer = this.selectedAnimal[selectedQuestion.value]
            }

            // getMaxValue(){
            //     this.SelectedAnimal[]
            // }
        }

    }


</script>

<style lang="css" scoped>
</style>
