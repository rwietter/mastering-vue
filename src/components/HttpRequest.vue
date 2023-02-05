<script>
export default {
  data() {
    return {
      person: {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
      }
    }
  },

  async created() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const response = await fetch(url)
    const data = await response.json()
    this.person = data
  },
}
</script>

<template>
  <div class="content" v-if="person.name">
    <p>Hello {{ person.name }} from {{ person.address.city }}</p>
    <p>Latitude: {{ person.address.geo.lat }}</p>
    <p>Longitude: {{ person.address.geo.lng }}</p>
    <p>Phone: {{ person.phone }}</p>
    <p>Website: {{ person.website }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Username: {{ person.username }}</p>
    <p>Zipcode: {{ person.address.zipcode }}</p>
  </div>
</template>


<style>
.content {
  color: #111;
  padding: 1rem;
}
</style>