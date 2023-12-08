<template>
    <div class="cat-wrapper">
      <ul>
        <li>login : {{ infos_categorie.login }}</li>
        <li>nationalite : {{ infos_categorie.nationalite }}</li>
      </ul>
      
    </div>
</template>

<script>
export default {
    name: 'AttemptHistoryLine',
    props : {
        infos_user : Object
    },
}
</script>
  
<style>
.cat-wrapper {
    background-color: green;
    border : 1px solid white;
}
@media (min-width: 1024px) {
    .cat-wrapper {
      display: flex;
      align-items: center;
    }
}
</style>
  