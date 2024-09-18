import { defineStore } from 'pinia'

export const useHorariosStore = defineStore('horarios', {

  state: () => ({
    test: "Hello world !!!",
    jornada_empezada: false,
    
  }),
  getters: {
  },
  actions: {
    cambiarModoJornada(payload) {
      this.jornada_empezada = payload.cambioJornada
      console.log(payload.fecha)

    }
  }

})