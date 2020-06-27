<template lang="html">

    <div>
        {{ findCorrectAnswer() }}

        <h1>{{ correctAnswer }}</h1>

        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }}</h3>

        <div class="slidecontainer">
          <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/100)" class="slider" id="slider" v-model="guessAnswer">
        </div>

    </div>

</template>

<script>


    export default {
        name: 'questions-display',
        data() {
            return {
                guessAnswer: null,
                correctAnswer: null
            }
        },
        props: {
            selectedAnimal: Object,
            selectedQuestion: Object
        },
        methods: {
            findCorrectAnswer(){
                this.correctAnswer = this.selectedAnimal[this.selectedQuestion.value]
            },
            getMaxValue(){
                let max_value = (this.correctAnswer * (1.3 + (Math.random() * 0.3)))
                if (max_value < 100) {
                    max_value = Math.ceil(max_value/100)*100;

                } else if (max_value >= 100 && max_value < 1000) {
                    max_value = Math.ceil(max_value/1000)*1000;

                } else if (max_value >= 1000 && max_value < 10000) {
                    max_value = Math.ceil(max_value/10000)*10000;

                } else if (max_value >= 10000 && max_value < 100000) {
                    max_value = Math.ceil(max_value/100000)*100000;

                } else if (max_value >= 100000 && max_value < 1000000) {
                    max_value = Math.ceil(max_value/1000000)*1000000;

                } else if (max_value >= 1000000 && max_value < 10000000) {
                    max_value = Math.ceil(max_value/10000000)*10000000;
                }

                return max_value
            }
            // getMinValue(){
            //     let min_value = (this.correctAnswer * ( 0.7 - (Math.random() * 0.3)))
            //     if (min_value < 100) {
            //         min_value = Math.ceil(min_value/100)*10;
            //
            //     } else if (min_value >= 100 && min_value < 1000) {
            //         min_value = Math.ceil(min_value/1000)*1000;
            //
            //     } else if (min_value >= 1000 && min_value < 10000) {
            //         min_value = Math.ceil(min_value/10000)*10000;
            //
            //     } else if (min_value >= 10000 && min_value < 100000) {
            //         min_value = Math.ceil(min_value/100000)*100000;
            //
            //     } else if (min_value >= 100000 && min_value < 1000000) {
            //         min_value = Math.ceil(min_value/1000000)*1000000;
            //
            //     } else if (min_value >= 1000000 && min_value < 10000000) {
            //         min_value = Math.ceil(min_value/10000000)*10000000;
            //     }
            //
            //     return min_value
        }
    }


</script>

<style lang="css" scoped>
</style>
