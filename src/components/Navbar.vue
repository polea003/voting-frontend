<template>
  <nav>
  
    <Dropdown title="Poisitions" :items="services" />
   
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'President',
          
        },
        {
          title: 'Vice President',
          
        },
        {
          title: 'Secretary',
          
        },
        {
          title: 'Treasurer',
          
        }
      ]
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: rgb(36, 0, 240);
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  background-color: #444;

}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>