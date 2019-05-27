<template>
  <nav
    id="sidebar"
    slot="sidebar"
    class="App__nav"
  >
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          About
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BitsSideBar'
}
</script>

<style>
nav {
  white-space: nowrap;
  background: #37474f;
  position: fixed;
  top: 65px;
  height: 100%;
  width: 15%;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
}
</style>
