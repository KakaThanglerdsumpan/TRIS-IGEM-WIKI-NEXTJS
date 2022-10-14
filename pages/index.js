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
      <iframe title="Thailand_RIS: Bacteria-Battling Bombolitin (2022) - Project Promotion [English]" class = "video promovid" src="https://video.igem.org/videos/embed/2a213e6b-77ef-475c-94ec-f4ba8cef0e55" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      </div>
      <div class="sizedbox40" />
    </div>
  );
};

export default HomePage;
