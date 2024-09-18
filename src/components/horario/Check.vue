<template>
  <v-row>
    <v-col class="text-center">
      
      <v-btn v-if="!jornada_empezada" color="green" @click="empezarJornada">EMPEZAR JORNADA</v-btn>
      <v-btn v-if="jornada_empezada" color="error" @click="acabarJornada">ACABAR JORNADA</v-btn>
    </v-col>
  </v-row>
  
</template>

<script setup>
  import { computed, ref, watch } from 'vue'
  import { useHorariosStore } from '../../store/horarios'
  import { useCalendarioStore } from "../../store/calendario"
  import { useDate } from 'vuetify'
  import { storeToRefs } from "pinia"


  const horariosStore = useHorariosStore()
  const calendarioStore = useCalendarioStore()

  const { jornada_empezada } = storeToRefs(calendarioStore)


  const addHours = (date, hours) => {
    const hoursToAdd = hours * 60 * 60 * 1000;
    date.setTime(date.getTime() + hoursToAdd);
    return date;
  }

  




const adapter = useDate()

const empezarJornada = () => {
  const inicio = adapter.date(new Date())
  const fin = adapter.date(addHours(new Date(), 8))  
  
  const event = {
      title: `${inicio.getHours()}:${inicio.getMinutes()} | --`,
      start: inicio,
      end: fin,
      color: 'red',
      allDay: false,
      id: Date.now()
    }

  const datos = {
    jornadaEmpezada: true,
    event,
  }

  calendarioStore.addEvent(datos)
}
const acabarJornada = () => {
  const evento = calendarioStore.buscarUltimoEvento()
  
  const texto = evento.title.split("|")
  
  evento.end = adapter.date(new Date())

  const nuevoTexto = `${texto[0]} | ${evento.end.getHours()}:${evento.end.getMinutes()}`
  evento.title = nuevoTexto
  evento.color = 'green'
  const datos = {
    jornadaEmpezada: false,
    event: evento
  }

  calendarioStore.actualizarEvento(datos)

}

watch(() => jornada_empezada, val => {
  console.log(val.value)
},{
  deep: true
})

</script>