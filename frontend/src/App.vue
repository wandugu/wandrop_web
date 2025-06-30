<template>
  <div id="app">
    <nav>
      <router-link to="/">主页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1em;
  background: #f5f5f5;
}
</style>
