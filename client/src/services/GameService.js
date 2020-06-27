const animalsURL = 'http://localhost:3000/api/animals/';
const usersURL = 'http://localhost:3000/api/users/';
const questionsURL = 'http://localhost:3000/api/questions/';

export default {

    getQuestions() {
        return fetch(questionsURL)
        .then(res => res.json());
    },

    getAnimals() {
        return fetch(animalsURL)
      .then(res => res.json());
    },

    getUsers() {
        return fetch(usersURL)
        .then(res => res.json());
    },

    getTopThree(){
        return fetch(usersURL + 'top3')
        .then(res => res.json());
    },

    postUser(payload) {
        return fetch(usersURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
}
