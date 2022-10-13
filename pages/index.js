const HomePage = ({ children }) => {
  return (
    <div>
      <div class="titleScreen">
        <div class="column">
          <div class="sizedbox100" />
          <h1 class="title">THAILAND_RIS</h1>
          <h3 class="description">
            Modifying and expressing a novel antimicrobial peptide, bombolitin,
            to combat bacterial wilt caused by the plant pathogenic bacteria 
            <i>Ralstonia solanacearum</i> in solanaceous crops.
          </h3>
          <img
            src="https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png"
            class="titlelogo"
          />
        </div>
      </div>
      <div class="sizedbox100" />
      <a href = "">
        <h1 class="heading" align="center">
          PROMOTIONAL VIDEO
        </h1>
      </a>
      <div class="stack">
        <img
          src="https://static.igem.wiki/teams/4314/wiki/blob-1.svg"
          class="stackedchild bgblob"
        />
        <iframe
          title="Thailand_RIS: Promotional Video (2022) [English]"
          src="https://video.igem.org/videos/embed/01b44551-45e1-4a7f-b7b8-69c312a19cb7"
          frameborder="0"
          allowfullscreen=""
          sandbox="allow-same-origin allow-scripts allow-popups"
          class="video promovid"
        ></iframe> 
      </div>
      <div class="sizedbox40" />
    </div>
  );
};

export default HomePage;
