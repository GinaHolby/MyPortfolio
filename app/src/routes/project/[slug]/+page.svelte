<script>
  export let data;

  import "./project.css";

  import Figma from "../../../assets/icons/Figma.svelte";
  import Internet from "../../../assets/icons/Internet.svelte";
  import Notion from "../../../assets/icons/Notion.svelte";
</script>

<header>
  <a class="h" href="/">
    <h1 class="herotext">Gina Holby</h1>
    <h3 class="subherotext">UX-designer</h3>
  </a>
</header>

<main>
  {#each data.recipies as project}
    <img class=" coverimage" src={project.cover} alt="" />

    <div class="information">
      <div class="title">
        <h1>
          {project.projectTitle}
        </h1>
      </div>

      <h3>{project.shortProjectDescription}</h3>

      <div class="ikoner">
        <a class={project.figmalinkhide} href={project.figmalink} target="_blank">
          <div class="figma-logo"> <Figma /></div>
            
        </a>
        
        <a class={project.hidenettsidelink} href={project.nettsidelink} target="_blank">
          <div class="figma-logo"> <Internet /></div>
        </a>

        <a class={project.hidenotionlink} href={project.notionlink} target="_blank">
          <div class="figma-logo"> <Notion /></div>
        </a>

        

        
      </div>

      <div class="text">
        <h2>Oppgave:</h2>

        <h3>{project.problemDescriptions}</h3>

        <h2>Lengde:</h2>
        <h3>{project.length}</h3>

        <h2>Løsning:</h2>
        <h3>{project.solutionDescription}</h3>
      </div>
    </div>
  {/each}
</main>

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 12px;
    background-color: rgb(253, 228, 232);
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .h {
    position: relative;
  }
  .herotext {
    font-family: "Allura", cursive;
    font-size: 40px;
  }
  .subherotext {
    /* font-family: "Fauna One", serif; */
    position: absolute;
    left: 30px;
    top: 33px;
    font-size: 12px;
    width: 100%;
  }
</style>
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@100&family=Quicksand:wght@300;700&display=swap" rel="stylesheet">
