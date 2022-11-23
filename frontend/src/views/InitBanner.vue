<template>
  <header>
    <a href="#" class="logo">BaseCamp</a>
    <ul class="navigation">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="http://localhost:5173">Explore BaseCamp</a></li>
      <li><a href="#">Release</a></li>
      <li><a href="#">Notice</a></li>
    </ul>
  </header>
  <section class="parallax">
    <img src="monutain_01.png" id="m1">
    <img src="trees_02.png" id="t2">
    <img src="monutain_02.png" id="m2">
    <img src="trees_01.png" id="t1">
    <img src="man.png" id="man">
    <img src="plants.png" id="plants">
    <h2 id="text">Explore BaseCamp</h2>
  </section>
  <section class="sec">
    <h2>Parallax Scrolling Website</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in voluptatem tempore consectetur,
      molestias omnis amet veniam quaerat, maxime quam reiciendis sequi vel. Nemo exercitationem quasi, atque
      laboriosam veniam quas, inventore sunt qui autem tempora labore incidunt facilis animi officia, velit
      nihil illum enim a possimus quia deserunt dolorem. Laudantium ipsum exercitationem ullam pariatur,
      voluptates impedit dolor adipisci sapiente vitae sint necessitatibus sunt voluptate quia eum rem itaque
      fugit odit nihil rerum illo nemo. Dignissimos, doloremque, magnam asperiores numquam voluptatem soluta,
      tempora minus delectus expedita ratione labore sint aperiam. At porro a consequuntur odio, alias
      explicabo commodi? Praesentium reiciendis incidunt labore dicta blanditiis ullam dolor, excepturi
      distinctio laborum cum voluptatum id error consequatur alias adipisci dolorum modi in ad nesciunt
      recusandae doloribus minima? Voluptatibus iusto vero saepe exercitationem reprehenderit velit eos
      eligendi cupiditate dolorum minus? Dolore molestiae sequi doloremque tempore nisi ea numquam dicta.
      Maxime laboriosam minima modi eveniet inventore et nemo non hic possimus rem excepturi recusandae
      asperiores totam, dolorem incidunt pariatur necessitatibus ullam ducimus numquam est sequi deleniti
      harum. Dolorem porro cumque repudiandae recusandae dicta consectetur eaque voluptates velit totam hic
      ratione, molestiae quaerat mollitia ea modi maxime corporis dignissimos! Pariatur officia ex
      perspiciatis eveniet eos alias atque laudantium vero quia consequuntur repellendus quis omnis, cum sit
      excepturi expedita fuga debitis! Dolorum tempora explicabo at optio molestias aliquam odio quo atque
      consequatur inventore accusamus facere assumenda repudiandae ex accusantium quidem, animi culpa numquam
      sunt praesentium harum, beatae dignissimos alias voluptates? Iure architecto iusto soluta! Laboriosam
      eum similique quaerat expedita! Ad, natus id. Excepturi doloremque earum autem at quis assumenda cumque,
      aspernatur quaerat fugit error vero eaque voluptatem soluta perspiciatis beatae quae repellat nam
      aperiam culpa consequuntur a voluptas consectetur dolorum. Enim officiis eius corporis, iste aliquam
      facere earum recusandae non eaque corrupti. Numquam corporis consequuntur nihil fuga magni suscipit
      natus veritatis, deserunt nulla voluptate tempore expedita, culpa provident ipsam, deleniti ut. Dolore,
      nostrum? Dignissimos eum maiores obcaecati quidem, nobis molestiae odit iure odio, in exercitationem
      nam, possimus repellendus dolorem veniam facilis perspiciatis ex qui excepturi minima libero quas harum
      expedita tenetur! Recusandae quas enim ea? Cum, amet. Corporis, sit laudantium ea dicta vitae quibusdam
      molestiae a vel repellendus dolorem aperiam soluta inventore, quia, dolorum recusandae autem nostrum ab
      repudiandae voluptates hic iure suscipit iste! Quis porro atque earum ratione. Voluptatibus placeat
      impedit labore voluptates tempore eum maxime odit veniam harum ex temporibus debitis, sint error amet
      accusantium. Unde, maxime ad, ab vero, fugit placeat magni itaque in consequuntur veritatis excepturi
      sit nostrum iste cupiditate? Impedit vitae aperiam dolorum ab, neque alias itaque pariatur, cum fugit
      quibusdam quos vero nesciunt cumque error at architecto ratione totam esse perferendis, ipsum tenetur
      quidem! Aliquid inventore vero aut cupiditate magni ipsa, dolore quam consectetur perferendis, obcaecati
      maiores nam vitae provident numquam temporibus, explicabo blanditiis voluptate in natus voluptatem rem
      sapiente deleniti ipsam laboriosam! Voluptates, nemo dolore quam eligendi voluptatum voluptatem minima,
      ducimus praesentium molestiae id quibusdam voluptate totam suscipit non tenetur atque? Harum cumque,
      iusto nihil inventore natus corrupti asperiores facere eum.</p>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "InitBanner",
  data() {},
  setup(props, context) {

    return {}
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
}

body {
  overflow-x: hidden;
  background: #fff;
  min-height: 100vh;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  color: #112434;
  font-weight: bold;
  font-size: 2em;
  text-decoration: none;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 1.2em;
  font-weight: bold;
}

.navigation li {
  list-style: none;
}

.navigation li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #112434;
  border-radius: 20px;
}

.navigation li a:hover,
.navigation li a.active {
  background: #112434;
  color: #fff;
}

.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
}

.parallax img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

#text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4em;
  color: #112434;
}

.sec {
  position: relative;
  padding: 100px;
  background: #112434;
}

.sec h2 {
  font-size: 3em;
  color: #fff;
  margin-bottom: 10px;
}

.sec p {
  font-size: 1em;
  color: #fff;
}
</style>