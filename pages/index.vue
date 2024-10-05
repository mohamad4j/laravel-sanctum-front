<script setup>
useFetch('http://localhost:8000/sanctum/csrf-cookie')
const getUser = () => {
  const { user } = useSanctumAuth()
  console.log(user)
}
const loginUser = async () => {
  const { login } = useSanctumAuth()
  console.log(login)
  const credentials = {
    email: "jabarzadeh.mohamad@gmail.com",
    password: "123456",
    remember: true,
  }
  await login(credentials)
}
</script>

<template>
  <div>
    <button @click="loginUser">login</button>
    <button @click="getUser" style="margin-left: 16px">user</button>
  </div>
</template>

<style scoped>

</style>
