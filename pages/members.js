function MembersPage({ children }) {
  return (
    <div>

        <div class = "titleScreen1">
                <h1 class = "title">MEMBERS</h1>
        </div>
        <div class = "body">
            <img src = "https://static.igem.wiki/teams/4314/wiki/tmp.png" width= {700} height={450}/>
            <h1 class = "header1">INTRODUCING THE TEAM</h1>
        </div>
        <div class = "row">
          <div class = "rounded-container">
            <h1 class = "header1">TEAM MEMBERS</h1>
          </div>
          <div class = "circle"></div>
        </div>


        <div class = "row">
          <div class = "member-column">
            <h2 class = "membertag">DHIRATH THANGLERDSUMPAN<br/>WIKI MEMBER/CODER</h2>
            <div class = "row">
              <img src = "https://static.igem.wiki/teams/4314/wiki/tmp.png" width= {350} height= {225} />
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default MembersPage;