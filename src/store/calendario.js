import { defineStore } from 'pinia'

export const useCalendarioStore = defineStore('calendario', {

  state: () => ({
    type: 'month',
    weekday: [1, 2, 3, 4, 5, 6, 0],
    value: [new Date()],
    events: [],
    jornada_empezada: false,
    ultimoEvento: null

    
  }),
  getters: {
  },
  actions: {
    cambiarModoJornada(payload) {
      this.jornada_empezada = payload.cambioJornada

    },
    addEvent(payload) {
      console.log(payload)
      this.jornada_empezada = payload.jornadaEmpezada
      this.ultimoEvento = payload.event.id

      this.events.push(payload.event)
    },
    buscarUltimoEvento() {
      return this.events.find(evento => evento.id === this.ultimoEvento)
    },
    actualizarEvento(payload) {
      const id = payload.event.id
      const evento = this.events.find(e => e.id === id)
      evento.start = payload.event.start
      evento.end = payload.event.end
      this.jornada_empezada = payload.jornadaEmpezada
      this.ultimoEvento = null
      console.log(evento)
    }
  }

})