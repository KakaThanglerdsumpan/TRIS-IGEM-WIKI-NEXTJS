function MembersPage({ children }) {
  return (
    <div>

        <div class = "titleScreen1">
                <h1 class = "title">MEMBERS</h1>
        </div>
        <div class = "body">
          <div class = "row">
            <img src = "https://static.igem.wiki/teams/4314/wiki/tmp.png" width= {700} height={450}/>
            <h1 class = "header1">INTRODUCING THE TEAM</h1>
          </div>
        </div>
        <div class = "row">
          <div class = "rounded-container1">
            <h1 class = "header1">TEAM MEMBERS</h1>
          </div>
          <div class = "circle"></div>
        </div>


        <div class = "member-row">
          <div class = "member-column">
            <h2 class = "membertag">
              ADA CHUNHAVAJIRA
            </h2>
            <h4 class = "membertag">
            TEAM LEADER, HUMAN PRACTICES MEMBER, GROUP 1 LAB MEMBER
            </h4>
            <div class = "row1">
              <img src = "https://static.igem.wiki/teams/4314/wiki/tmp.png" width= {350} height= {225} />
              <p class = "member-text">
                Hi my name is Ada! I am currently a senior in Ruamrudee International School in Bangkok, Thailand. 
                My responsibilities in the team include organizing and looking over the plans of the project as well as helping the team with any problems that may arise. 
                I am forever grateful for my iGEM experience and all of my teammates. 
              </p>
            </div>
          </div>

          <div class = "member-column-right">
            <h2 class = "membertag align-right">
              ADA CHUNHAVAJIRA
            </h2>
            <h4 class = "membertag align-right">
            TEAM LEADER, HUMAN PRACTICES MEMBER, GROUP 1 LAB MEMBER
            </h4>
            <div class = "row1">
            <p class = "member-text align-right">
                Hi my name is Ada! I am currently a senior in Ruamrudee International School in Bangkok, Thailand. 
                My responsibilities in the team include organizing and looking over the plans of the project as well as helping the team with any problems that may arise. 
                I am forever grateful for my iGEM experience and all of my teammates. 
              </p>
              <img src = "https://static.igem.wiki/teams/4314/wiki/tmp.png" width= {350} height= {225} />
            </div>
          </div>
        
        </div>
        

    </div>
  )
}

export default MembersPage;