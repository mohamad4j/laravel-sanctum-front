<script setup>
const { login } = useSanctumAuth()
console.log(login)
const credentials = {
  email: "jabarzadeh.mohamad@gmail.com",
  password: "123456",
  remember: true,
}

await login(credentials)
const router = useRouter()
router.push('/6')
</script>

<template>
login
</template>

<style scoped>

</style>
