import Image from 'next/image'
const HomePage = ({ children }) => {
  return (
    <div>

        <div class = "titleScreen">
          <div class = "column">
            <h1 class = "title">THAILAND_RIS</h1>
            <h2 class = "description">Simple Description</h2>
            <Image src = "https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png" width = {630} height ={630} class = "center"/>
          </div>
        </div>
        <div class = "sizedbox"/>
        <div class = "body">
            <h1 class = 'heading'>PROMOTIONAL VIDEO</h1>
            <p>loremipsumasdfasdfasdfasdf
                adfsadf
                asdfafasdfad
                fadf
                adfsadfdfadsdfasdfasdfasdfasdfadsf
                asdfasdfasdfadfasdfadsfadfadsf
                sdfa
                sdfasdf
            </p>
        </div>

    </div>
  )
}

export default HomePage;