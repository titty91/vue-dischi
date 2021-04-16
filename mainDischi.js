// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi.
// In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.

// console.log('ciaooo');

function initVue(){

  new Vue({
    el:'#app',
    data:{
      pippos:[],
      allSelect:'All'
    },
    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(pippo => {
      //console.log(pippo);
      //console.log(pippo.data.response);
      this.pippos = pippo.data.response
    })
    .catch(() => console.log('error'))
  }
  });
}








function init(){
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
