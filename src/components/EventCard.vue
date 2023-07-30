<script setup>

//PRA CRIAR UM ESTADO
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
<!--  AQUI PEGAMOS O PARAMETRO DA ROTA-->
  <RouterLink
      class="event-link"
      :to="{ name: 'event-details', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<!--ESTAMOS FALANDO QUE ESSE ESTILO E SO APLICAOD A ESSE COMPONENTE-->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
