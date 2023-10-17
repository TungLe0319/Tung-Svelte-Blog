<script>
  import FirstMenuRow from "../../components/TKR/FirstMenuRow.svelte";
export let data
console.log(data);
</script>


<div class=" h-screen bg-blue-300 flex justify-center items-center">
  <div class=" main-container w-4/5 h-2/5">
    <div class="notes-and-sidebar-container">
      <div class="notes-area p-1">
        NOTES AREA <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus
        quod harum hic vitae dolorem esse sed obcaecati illo iste reiciendis asperiores
        odit ducimus, laboriosam numquam vel libero natus enim labore. Totam voluptate
        rem nesciunt aut a, voluptatibus minus unde vero, blanditiis illo saepe excepturi
        maiores reprehenderit earum quis, quidem exercitationem fugiat at ipsam!
        Debitis, nisi placeat laboriosam corporis eum possimus ut eligendi ab maxime
        in inventore facilis veritatis, reprehenderit molestiae ducimus temporibus
        aut eos accusamus saepe repellendus commodi cum adipisci aperiam. Qui labore
        expedita ipsam quod et nostrum provident, libero delectus ex rem sit ipsum,
        ab enim totam voluptate culpa blanditiis voluptates aperiam officia quo!
        Natus incidunt officiis id voluptas provident! Sunt vel, commodi et quaerat
        quisquam rem a. Nihil cumque ad magnam recusandae magni ipsum pariatur aspernatur
        deleniti veniam dolores dignissimos eum officia, placeat, eius vitae quo.
        Ipsa doloremque minima sunt suscipit blanditiis illum necessitatibus, autem
        provident, similique culpa accusantium laudantium non, cupiditate consequuntur
        quos mollitia consequatur officiis dolorem reprehenderit. Soluta repellat
        ex saepe itaque voluptate eveniet, ducimus, velit nulla eum eaque alias omnis
        corrupti blanditiis voluptates labore iste rem sit dolore quam voluptas.
        Blanditiis excepturi harum tempora? Provident ducimus quasi exercitationem
        magnam eveniet animi impedit minus quaerat mollitia, voluptates, accusamus
        dolorum eum ipsa consequuntur adipisci vel iste. Repellendus, odio in! Pariatur,
        voluptatum a assumenda in voluptas voluptates deleniti tempore dignissimos
        aliquam iste, nesciunt incidunt iusto libero, hic ex! Natus quae dignissimos
        omnis minus ratione suscipit magnam fugiat nisi laudantium saepe, labore
        odit quisquam repellendus unde, perspiciatis dolorem? Voluptatibus cum fugiat
        unde ullam dolore vitae illo minus. Tempora, soluta rem. Vel sit iste sapiente
        cupiditate enim laboriosam quis, illum, nam adipisci beatae iure quia ut
        deleniti nulla esse accusamus tempore saepe, facere ad perferendis at explicabo
        sed ducimus reprehenderit! Eos iure temporibus quasi atque at impedit voluptates
        accusantium officia. Dolor harum optio exercitationem at totam atque consequatur
        accusantium sequi error quam voluptatibus officiis autem blanditiis reprehenderit
        dolorem tempora, incidunt corporis illum eos quaerat enim in quidem delectus?
        Ut maiores porro tenetur, eos harum ipsum animi unde reiciendis. Aperiam
        provident beatae nemo velit porro illum recusandae voluptatibus perspiciatis
        vel, magnam, excepturi sequi. Eveniet ipsa quis, possimus laborum quisquam
        quibusdam amet, sapiente voluptate ipsam, fugit sit? Voluptas nam quibusdam
        dolore officiis voluptatum ipsa veniam modi commodi consequatur dolorem aspernatur
        odio quisquam, aut exercitationem nisi nihil aperiam consequuntur non aliquid?
        Nesciunt quis ducimus, delectus saepe, maiores, eum nisi animi reiciendis
        voluptatum aut quaerat eos incidunt commodi perferendis quo est minima dolorem
        beatae! A optio excepturi repellat ipsa inventore natus iste tempora! Culpa
        ab porro debitis provident, reiciendis optio, illum minima nostrum facere
        accusantium eligendi minus quisquam reprehenderit dicta qui? Illum doloribus
        autem adipisci accusamus velit dolorum ut harum voluptatibus, esse blanditiis
        laboriosam obcaecati nostrum similique commodi, nobis dolorem eligendi eum
        error ipsam quia nam, voluptatem vel. Recusandae in expedita blanditiis voluptate.
        Mollitia incidunt vel quaerat quia minima? Aliquam architecto aperiam modi
        id officia cum nostrum laboriosam exercitationem praesentium ab debitis voluptatum
        placeat incidunt voluptatem, ipsa quod provident, magnam minima illum ipsam.
      </div>
      <div class="side-bar">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
    <div class="menu-container">
      <div class="row-1">
  <FirstMenuRow/>
      </div>
      <div class="row-2">
        <ul class="flex space-x-1 w-full bg-gray-400">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="row-3">
        <ul class="flex space-x-1 w-full bg-gray-500">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="row-4">
        <ul class="flex space-x-1 w-full bg-gray-600">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  </div>
</div>


<style lang="scss" scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #666;
    background-color: #2196f3;
  }

  .notes-and-sidebar-container {
    display: flex;
    justify-content: space-between;
    background-color: #4caf50;
    padding: 10px;
    height: 80%;
  }

  .notes-area {
    width: 97%; /* Initially take up most of the width */
    background-color: #ffc107;
    height: auto;
    padding-right: 10px;
    overflow-y: auto;
    transition: width 0.5s;
  }

  .side-bar {
    width: 2%; /* Initially a smaller width */
    background-color: #ff5733;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: width 0.5s;
  }

  .side-bar:hover {
    width: 5%; /* Expand on hover */
  }

  .menu-container {
    display: flex;
    flex-direction: column;
    height: 20%;
  }

  .row-1,
  .row-2,
  .row-3,
  .row-4 {
    display: flex;
    justify-content: space-between;
  }
</style>
