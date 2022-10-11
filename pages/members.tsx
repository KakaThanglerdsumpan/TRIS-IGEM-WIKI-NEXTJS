import MemberStuff from '../components/memberStuff'

function large(name: string) {
    return name.toUpperCase()
}

function MembersPage() {
    return (
        <div>
            <div className="members-wide">
                <div className="titleScreen1">
                    <h1 className="titlescreentext">MEMBERS</h1>
                </div>

                <div className="sizedbox60" />
                <div className="row spacebetween">
                    <img
                        src="https://static.igem.wiki/teams/4314/wiki/tmp.png"
                        className="teampic"
                    />
                    <div className="halfw">
                        <div className="column">
                            <h1 className="header1">INTRODUCING THE TEAM</h1>
                            <div className="stack">
                                <img
                                    src="https://static.igem.wiki/teams/4314/wiki/elementcrop1.png"
                                    className="blob stackedchild"
                                />
                                <p className="stackedchild white blobtext">
                                    adsfsdfasdf sda adsf adsj; j;f aj d adf j
                                    a;d a;df ajf ajf adfj alf adfj aadfasf adf
                                    adsf adsfadfad fad fad fa sdfa df adf adf
                                    adsf adf adf adf adf adf ad fadf aad sfad
                                    fadf adfadf adsf adf adf adsf adsf asd f
                                    adfa dfadf adsf adfa df adf ad fad fad fsdjf
                                    af adjasfsdadfadfasdfa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sizedbox60" />
                <div className="body"></div>
                <div className="row">
                    <div className="rounded-container1">
                        <h1 className="header1">TEAM MEMBERS</h1>
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="sizedbox20" />

                <MemberStuff
                    name1="Ada Chunhavajira"
                    person1="Team Leader, Human Practices Member, Group 1 Lab Member"
                    desc1="Hi my name is Ada! I am currently a senior in Ruamrudee International School in Bangkok, Thailand. My responsibilities in the team include organizing and looking over the plans of the project as well as helping the team with any problems that may arise. I am forever grateful for my iGEM experience and all of my teammates. "
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Praew Kedpradit"
                    person2="Wiki Member, Collaborations Member, Human Practices Member"
                    desc2="Hello I&appos;m Praew! I&appos;m a senior at Ruamrudee International School. I&appos;m mainly in charge of the design and branding of the team, including templates for our website, team shirts, team logo, while also being in charge of our social media page. "
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Tun Ronnakorn Onraksa"
                    person1="Human Practices Leader, Group 1 Lab Member, Group 2 Lab Member"
                    desc1="Hi my name is Ada! I am currently a senior in Ruamrudee International School in Bangkok, Thailand. My responsibilities in the team include organizing and looking over the plans of the project as well as helping the team with any problems that may arise. I am forever grateful for my iGEM experience and all of my teammates. "
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Tara Phantharach Natnithikarat"
                    person2="Collaborations Member, Group 2 Lab Member"
                    desc2="Hi! My name is Tara and I&appos;m a junior at RIS. I&appos;m a Collaborations and group 2 lab member of Thailand_RIS. I enjoy listening to music and playing volleyball during my free time. I look forward to getting to meet all of you and learning about all the cool projects in Paris!"
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Elle Arachaporn Titapand "
                    person1="Human Practices Member, Group 2 Lab Leader"
                    desc1="Hi! I&appos;m Elle, a junior at Ruamrudee International School. I am Groups 2&appos;s lab leader and a member of the human practices team. Preparing for the IGEM jamboree was a very great experience for me as I got to work with my friends and upperclassmen while gaining a deeper understanding of synthetic biology. I am very excited to learn about your insightful projects in Paris!"
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Bhu Pasu Limsiwilai"
                    person2="Wiki Member"
                    desc2="Hello! My name is Bhu, a senior at Ruamrudee International School and I am the main editor for the wiki team. Being able to come up with creative solutions to real world problems has been a pleasure for me. I look forward to seeing all the other innovative projects in Paris and meeting you all!"
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Jase Kemp"
                    person1="Wiki Coordinator, Collaborations Co-Leader"
                    desc1="Hey! My name is Jase, a current senior at Ruamrudee International School. I&appos;m half American and half Chinese, some say the best of both the worlds. I enjoy being moderately active and having a good laugh with friends. Like Ada “I am forever grateful for my iGEM experience and all of my teammates.”"
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Team Tatpol Boonme"
                    person2="Human Practices Member, Group 1 Lab Leader"
                    desc2="Hello! My name is Team, and I am a senior at RIS. Throughout this project, I spent a majority of my time at the lab allowing me to garner tons of experience and knowledge. I&appos;m very excited to showcase our work at the Jamboree and meet new faces!"
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Belle Voraruthai Puengchanchaikul"
                    person1="Collaborations Co-Leader, Group 2 Lab Member, Group 1 Lab Member"
                    desc1="Hello! My name is Belle and I am currently a junior at Ruamrudee International School. As part of the Thailand_RIS iGEM team, I am the Collaborations Co-leader along with Jase and worked on both group 1 and 2 labs. I loved my time working in the labs and had a lot of fun meeting with various iGEM teams all over the world. I look forward to exchanging all our cool scientific achievements in Paris as well as meeting all the people I had the privilege of connecting and collaborating online with in person. "
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Ivy Thitilapa Sae-Heng"
                    person2="Wiki Leader, Group 1 Lab Member"
                    desc2="Hello! I&appos;m Ivy and I am currently a junior at Ruamrudee International School. I&appos;m the Wiki Leader and a group 1 lab member of Thailand_RIS. I learned a lot about synthetic biology while doing the labs and also a lot about coding and technology while working on the wiki. I am looking forward to meeting new friends and attending the jamboree in Paris! "
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <div className="member-row">
                    <div className="member-column">
                        <h2 className="membertag">
                            {'Kaka Dhirath Thanglerdsumpan'.toUpperCase()}
                        </h2>
                        <h5 className="membertag">
                            {'Wiki Member'.toUpperCase()}
                        </h5>
                        <div className="row1">
                            <img
                                src="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                                className="memberimage"
                            />
                            <p className="member-text">
                                Wassup! My name is{' '}
                                <a
                                    href="https://github.com/kakaThanglerdsumpan"
                                    className="underline	"
                                >
                                    Kaka
                                </a>
                                , and I am a sophomore at Ruamrudee
                                International School. I enjoy coding and anime,
                                but I also like to touch grass. I worked
                                alongside Thamognya to help realize the
                                team&appos;s creative wiki design by programming
                                it on to a NextJS application.
                            </p>
                        </div>
                    </div>

                    <div className="member-column-right">
                        <h2 className="membertag align-right">
                            {'Thamognya Kodi'.toUpperCase()}
                        </h2>
                        <h5 className="membertag align-right">
                            {'Wiki Member'.toUpperCase()}
                        </h5>
                        <div className="row1">
                            <p className="member-text align-right">
                                Hey my name is{' '}
                                <a
                                    href="https://links.thamognya.com/"
                                    className="underline	"
                                >
                                    Thamognya Kodi
                                </a>
                                , and I am a sophomore at RIS. I like to code
                                Machine Learning apps and watch anime. I helped
                                transform the team&appos;s ideas into tangible
                                form. Kaka and I utilized NextJS, TailwindCSS,
                                ChakraUI, and Sass to help create the
                                team&appos;s wiki.
                            </p>
                            <img
                                src="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                                className="memberimage"
                            />
                        </div>
                    </div>
                </div>
                <MemberStuff
                    name1="Dr. Alisa Vangnai"
                    person1="Instructor"
                    desc1="Dr. Alisa Vangnai is a professor at the Department of Biochemistry, Faculty of Science, Chulalongkorn University. She received her B.Sc and M.Sc from Chulalongkorn University and her PhD from Oregon State University. Her research focuses on environmental and industrial biotechnology, molecular biology, and bioremediation. She provided us with crucial guidance and assistance on protein modification, expression, purification, and toxicity testing, as well as providing us with the lab space and equipment to do so. Moreover, Dr. Vangnai connected us with several stakeholders which we were able to interview. Team Thailand_RIS would like to extend our deepest gratitude to her for her invaluable help on this project. "
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Dr. Kiattawee Choowongkomon"
                    person2="Instructor"
                    desc2="Hello! I&appos;m Ivy and I am currently a junior at Ruamrudee International School. I&appos;m the Wiki Leader and a group 1 lab member of Thailand_RIS. I learned a lot about synthetic biology while doing the labs and also a lot about coding and technology while working on the wiki. I am looking forward to meeting new friends and attending the jamboree in Paris! "
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Ms. Nicole Sabet"
                    person1="Primary Instructor"
                    desc1="In 2019, Ruamrudee International School participated in iGEM for the first time. I was thrilled, therefore, when a second team emerged post-COVID, and asked if I would be one of their advisers for iGEM 2022. Thailand_RIS is excited to deliver on more aspects of the competition and has challenged themselves in both the science and communication. I have had the pleasure of working closely with most team members in my Biology and TOK classes over the past three years, so it is lovely to see their growth. As IB DP Coordinator at RIS, I see this opportunity as a demonstration of inquiry and risk taking, two aspects of the IB Learner Profile. I look forward to hearing the team&appos;s presentation in Paris, discussing areas of success and growth and continuing the conversation back at RIS to support a future iGEM team."
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Mr. Olivier Fernandez"
                    person2="Logistics Coordinator"
                    desc2="my name is olivier fernandez, i am a french national living, working and teaching at ruamrudee international school  in bangkok - thailand for over 30 years. i taught french as a foreign language in middle school, french ib ab initio in high school, and values education in 3 divisions es, ms and hs. i am currently teaching values in middle school as well as ethics and peace studies in high school. i embarked as a logistic coordinator to assist mrs. nicole sabet but also due to the fact that i am a parisien and i know paris very well.  i am proud and delighted to bring ris students to the city of lights: paris and get the group exposed to french culture, arts and food. bienvenue en france!"
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Baifern Danghatai Wongthanaroj"
                    person1="Advisor"
                    desc1=""
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Tony Nannan Yeoh"
                    person2="iGEM Mentor"
                    desc2=""
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Joe Kittitat Jaengwang"
                    person1="Lab Advisor"
                    desc1=""
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Golf Lueacha Tabtimmai"
                    person2="Lab Advisor"
                    desc2=""
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <MemberStuff
                    name1="Jess Jedsadakorn Ninrat"
                    person1="Lab Advisors"
                    desc1=""
                    img1="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                    name2="Mel Melvalia Cristin Manik"
                    person2="Lab Advisor"
                    desc2=""
                    img2="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                />
                <div className="member-row">
                    <div className="member-column">
                        <h2 className="membertag">
                            {'Bo Prawit Oangkhana'.toUpperCase()}
                        </h2>
                        <h5 className="membertag">
                            {'Lab Advisors'.toUpperCase()}
                        </h5>
                        <div className="row1">
                            <img
                                src="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                                className="memberimage"
                            />
                            <p className="member-text"></p>
                        </div>
                    </div>
                </div>
                <div className="sizedbox20" />
                <div className="sizedbox30" />
            </div>

            {/* --------------------------- */}
            {/* ---------------------------------- narrow screen----------------------------- */}
            {/* --------------------------- */}

            <div className="members-narrow">
                <div className="titleScreen1">
                    <h1 className="titlescreentext">MEMBERS</h1>
                </div>

                <div className="sizedbox60" />

                <div className="body">
                    <h1 className="header1 center1">INTRODUCING THE TEAM</h1>
                    <img
                        src="https://static.igem.wiki/teams/4314/wiki/tmp.png"
                        className="teampic-narrow center"
                    />
                    <p>
                        adsfsdfasdf sda adsf adsj; j;f aj d adf j a;d a;df ajf
                        ajf adfj alf adfj aadfasf adf adsf adsfadfad fad fad fa
                        sdfa df adf adf adsf adf adf adf adf adf ad fadf aad
                        sfad fadf adfadf adsf adf adf adsf adsf asd f adfa dfadf
                        adsf adfa df adf ad fad fad fsdjf af adjasfsdadfadfasdfa
                    </p>

                    <div className="sizedbox60" />
                </div>

                <div className="row">
                    <div className="rounded-container1">
                        <h1 className="header1">TEAM MEMBERS</h1>
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="sizedbox20" />
                <div className="body">
                    <div className="column left">
                        <h2 className="membertag1">ADA CHUNHAVAJIRA</h2>
                        <h5 className="membertag">
                            TEAM LEADER, HUMAN PRACTICES MEMBER, GROUP 1 LAB
                            MEMBER
                        </h5>
                        <div className="row">
                            <img
                                src="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                                className="memberimage"
                            />
                            <p className="member-text">
                                In 2019, Ruamrudee International School
                                participated in iGEM for the first time. I was
                                thrilled, therefore, when a second team emerged
                                post-COVID, and asked if I would be one of their
                                advisers for iGEM 2022. Thailand_RIS is excited
                                to deliver on more aspects of the competition
                                and has challenged themselves in both the
                                science and communication. I have had the
                                pleasure of working closely with most team
                                members in my Biology and TOK classNamees over
                                the past three years, so it is lovely to see
                                their growth. As IB DP Coordinator at RIS, I see
                                this opportunity as a demonstration of inquiry
                                and risk taking, two aspects of the IB Learner
                                Profile. I look forward to hearing the team’s
                                presentation in Paris, discussing areas of
                                success and growth and continuing the
                                conversation back at RIS to support a future
                                iGEM team.
                            </p>
                        </div>
                    </div>
                    <div className="sizedbox30" />

                    <div className="column right">
                        <h2 className="membertag1 right">ADA CHUNHAVAJIRA</h2>
                        <h5 className="membertag right">
                            TEAM LEADER, HUMAN PRACTICES MEMBER, GROUP 1 LAB
                            MEMBER
                        </h5>
                        <div className="row">
                            <p className="member-text">
                                In 2019, Ruamrudee International School
                                participated in iGEM for the first time. I was
                                thrilled, therefore, when a second team emerged
                                post-COVID, and asked if I would be one of their
                                advisers for iGEM 2022. Thailand_RIS is excited
                                to deliver on more aspects of the competition
                                and has challenged themselves in both the
                                science and communication. I have had the
                                pleasure of working closely with most team
                                members in my Biology and TOK classNamees over
                                the past three years, so it is lovely to see
                                their growth. As IB DP Coordinator at RIS, I see
                                this opportunity as a demonstration of inquiry
                                and risk taking, two aspects of the IB Learner
                                Profile. I look forward to hearing the team’s
                                presentation in Paris, discussing areas of
                                success and growth and continuing the
                                conversation back at RIS to support a future
                                iGEM team.
                            </p>
                            <img
                                src="https://static.igem.wiki/teams/4314/wiki/messageimage-1665151653993.jpg"
                                className="memberimage"
                            />
                        </div>
                    </div>
                </div>
                <div className="sizedbox20" />
            </div>
            <div className="sizedbox20" />
        </div>
    )
}

export default MembersPage
