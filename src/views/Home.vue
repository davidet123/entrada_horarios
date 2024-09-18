<template>
  <v-row>
    <v-col class="ma-2 text-center">
      <h2>Gestión horarios</h2>
      
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mx-2">
      <v-card>
        <v-card-title>
          <Check />
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-sheet>
      <v-calendar
        class="calendario"
        ref="calendar"
        v-model="value"
        :view-mode="type"
        :weekdays="weekday"
        :hide-week-number="hideWeekNumber"
        :interval-height = "calendarHeight"
        :internal-divisions = "internalDivisions"
        :events = "events"
      >
        <!-- <template v-slot:day="day">
          <v-sheet class="d-flex px-1 caption" :color="color"
            >day slot</v-sheet
          >
        </template> -->
    
    </v-calendar>
    </v-sheet>
    </v-col>
  </v-row>
  
</template>

<script setup>

  import { useHorariosStore } from "../store/horarios"
  import { useCalendarioStore } from "../store/calendario"

  import Check from "../components/horario/Check.vue"
  import { useDate } from 'vuetify'
  import { computed, ref, watch } from "vue";
  import { storeToRefs } from "pinia"


  

  const horariosStore = useHorariosStore()
  const calendarioStore = useCalendarioStore()

  const { events, type, weekday } = storeToRefs(calendarioStore)

  // const type = computed(() => calendarioStore.type)
  // const weekday = computed(() => calendarioStore.weekday)
  const value = ref([new Date()])
  const hideWeekNumber = ref(true)

  const internalDivisions = ref(5)

  const calendarHeight = ref(120)

  // const addHours = (date, hours) => {
  //   const hoursToAdd = hours * 60 * 60 * 1000;
  //   date.setTime(date.getTime() + hoursToAdd);
  //   return date;
  // }
  // const adapter = useDate()
  // const inicio = adapter.date(new Date())
  // const fin = adapter.date(addHours(new Date(), 8))
  // console.log(inicio)
  // console.log(fin)
  
  // // console.log(adapter.date(new Date()).getHours())
  // // console.log(adapter.date(new Date()).getMinutes())
  
  
  // const event = {
  //     title: `${inicio.getHours()}:${inicio.getMinutes()}`,
  //     start: inicio,
  //     end: fin,
  //     color: 'blue',
  //     allDay: false,
  //   }

  // const events = ref([])
  // events.value.push(event)


watch(() => events, val => {
  console.log(val.value)
},{
  deep: true
})

</script>

<style scoped>
.v-calendar-month__day {
  min-height: 80px !important;
}


</style>