new Vue({
  el: '#desafio',
  data: {
    name: 'yasmim',
    age: '21',
    image:
      'https://www.procure1amigo.com.br/painel/upload/2018-08/animais_imagem383970.png',
  },
  methods: {
    multAge() {
      return this.age * 3;
    },
    randNumber() {
      return Math.random();
    },
  },
});
