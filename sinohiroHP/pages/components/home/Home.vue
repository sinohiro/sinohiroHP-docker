<template>
  <section class="home">
    <HomeHero/>
    <v-card
      color="#333"
      dark
      tile
    >
      <v-container>
        <v-row class="home-contents">
          <v-col>
            <h3>Profile</h3>
            <h2>Name</h2>
            <p>sinohiro</p>
            
            <h2>School</h2>
						<p>釧路工業高等専門学校 2022年3月卒業<br>
						National Institute of Technology, Kushiro College Graduation in March 2022</p>
            <p>北見工業大学 2024年3月卒業<br>
            Kitami Institute of Technology Graduated in March 2024</p>
            <p>北見工業大学 大学院 在学<br>
            Kitami Institute of Technology Graduate School Student </p>
            <v-btn
              x-large
              depressed
              color="primary"
              dark
              href="https://www.kitami-it.ac.jp/"
              target="_blank"
            >
              School HP
            </v-btn>

            <h2>Birthday</h2>
							<p>01月18日 January 18</p>

						<h2>My Hobby</h2>
							<p>.Game<br>
								.Watch anime<br>
								.Making PC</p>
          </v-col>
          
          <v-col md="3" class="home-contents-img">
            <v-img 
              :src="require('@/assets/img/sinohirosan.png')"
              max-height="500"
              max-width="500"
              class="ma-1"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card
      color="white"
      dark
      tile
    >
      <v-container>
        <v-row class="home-contents">
          <v-col>
            <h3>Contact</h3>
            <div class="social">
							<a href="https://www.facebook.com/profile.php?id=100025645427583" class="link facebook" target="_parent"><i class="fab fa-facebook-square"></i></a>
							<a href="https://twitter.com/sinohiro966" class="link twitter" target="_parent"><i class="fab fa-twitter"></i></a>
							<a href="https://github.com/sinohiro" class="link discord" target="_parent"><i class="fab fa-github-square"></i></a>
						</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
import HomeHero from './HomeHero.vue'
import '@fortawesome/fontawesome-free/css/all.css'
 
export default {
  components: {
    HomeHero
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 35px;
}

h1 {
  font-size: 60px;
}

h3 {
  font-size: 30px;
  color: hotpink;
  border-bottom: 3px solid hotpink;
}

.hero_title {
  padding: 5%;
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.home-contents {
  img {
    width: 400px;
	  height: 400px;
    float: right;
  }
}

// social button start--------------------------------------
.social {
  top: 50%;
  text-align: center;
	margin: 10px;
}

.social .link {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px dashed hotpink;
  background-clip: content-box;
  padding: 10px;
  transition: .5s;
  color: hotpink;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 70px;
}

.social .link span {
  display: block;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.social .link:hover {
  padding: 20px;
  color: hotpink;
  margin-left: -5px;
  transform: translateX(10px) rotate(360deg);
}

.social .link.discord {
  background-color: #2C2F33;
  color: white;
}

.social .link.twitter {
  background-color: #00ACEE;
  color: white;
}

.social .link.facebook {
  background-color: #3B5998;
  color: white;
}
// social button end--------------------------------------
</style>