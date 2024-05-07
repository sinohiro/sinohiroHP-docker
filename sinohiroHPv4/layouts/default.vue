<template>
    <div class="container">
      <nav>
        <ul>
          <li><nuxt-link to="/" class="logo">sinohiro server</nuxt-link></li>
          <li>
            <nuxt-link
              to="/news"
              class="marker"
              :class="{ active: $route.path === '/news', hover: hover === 'news' }"
              @mouseover="hover = 'news'"
              @mouseleave="hover = ''"
            >
              <span class="bullet"></span>NEWS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/game"
              class="marker"
              :class="{ active: $route.path === '/game', hover: hover === 'game' }"
              @mouseover="hover = 'game'"
              @mouseleave="hover = ''"
            >
              <span class="circle"></span>GAME
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/service"
              class="marker"
              :class="{ active: $route.path === '/service', hover: hover === 'service' }"
              @mouseover="hover = 'service'"
              @mouseleave="hover = ''"
            >
              <span class="bar"></span>SERVICE
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        hover: '',
      };
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
  
  .container {
    display: flex;
  }
  
  nav {
    width: 200px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    margin-bottom: 1.0rem;
  }
  
  .logo {
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    color: black;
    text-decoration: none;
  }
  
  .marker {
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
  
  .marker .bullet,
  .marker .circle,
  .marker .bar {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
  }
  
  .marker .bullet {
    border-radius: 50%;
    background-color: #0bb0e6;
  }
  
  .marker .circle {
    border-radius: 50%;
    background-color: #0bb0e6;
  }
  
  .marker .bar {
    width: 2px;
    background-color: #0bb0e6;
  }
    
  .marker::after {
    content: "";
    width: 0%;
    height: 4px;
    background: #0bb0e6;
    position: absolute;
    bottom: -4px;
    left: 0;
    z-index: -1;
    transition: all .3s;
  }
  
  .marker.active::after {
    width: 100%;
  }
  
  .marker.hover::after {
    width: 100%;
  }
  </style>
  