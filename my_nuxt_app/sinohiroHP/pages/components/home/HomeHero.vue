<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>Welcome to</p>
          <p>sinohiro server</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style  lang="scss" scoped>

.home-hero__content {
  background: url("../../../assets/img/bg.png");
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 50vh;

  @include display_pc {
    height: 100vh;
  }
 
  &-text {
    color: white;
    text-align: center;
    font-size: 72px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }

  }
}
</style>