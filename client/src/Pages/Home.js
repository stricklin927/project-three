import React from 'react';
import { Jumbotron, Container, Carousel, Row, Col } from 'react-bootstrap';
import '../home.css';


// import { useHistory } from 'react-router-dom';

function Home() {
    // const history = useHistory();
    // if (!localStorage.getItem("token")) {
    //     history.push('/login');
    // } else {
    //     console.log("There's a token!");
    // }


    return(
    <div>
        <Jumbotron fluid className="jHome"></Jumbotron>
        <Container>
            <h1 className="h1Home"><b>WHY ITU?</b></h1>
            <h4 className="h4Home"><i>The</i> <b>possibilities</b> <i>and</i> <b>opportunities</b> <i>for a bright future are endless.</i></h4>
            <a class="btn btn-primary" href="#learnmore" role="button" style={{background: "#00B2A9"}}>Learn More</a>
        </Container>

        <br></br>

        <Container>
            <h2 className="h2Home" id="aboutITU">About ITU</h2>
            <p className="pHome">
                Paragraph about why ITU is the best university and why prospective students should come here.
                <br></br>
                Pug taxidermy listicle mustache twee health goth neutra pabst. Austin tousled truffaut
                butcher jianbing food truck.Taiyaki thundercats cornhole single-origin coffee chia kale chips 
                affogato pour-over cloud bread irony man bun. Etsy adaptogen typewriter, locavore polaroid raw 
                denim synth narwhal bicycle rights bespoke lyft. Farm-to-table stumptown paleo vexillologist
                PBRB kale chips seitan.
            </p>
        </Container>

        <br></br>

        {/* Card Columns */}
        {/* Fix the card spacing. figure out why there's so much extrra space */}
        {/* NEED TO CONVERT TAGS TO REACT/BOOTSTRAP TAGS & ADD IN IMPORT PATH*/}
        <div class="card-columns">
            <div class="card" style={{width: "301px"}} >
            <img class="card-img-top" src="./images/holistic.jpg" alt="Card image" style={{height:"275px"}}></img>
            <div class="card-body text-center" />
            <h4 class="card-title">Holistic Campus Environment</h4>
            <p class="card-text "></p>
            <a href="#card1" class="btn btn-primary">Read More</a>
            </div>

            <div class="card" style={{width: "301px"}} >
            <img class="card-img-top" src="./images/collab.jpg" alt="Card image" style={{height:"275px"}}></img>
            <div class="card-body text-center" />
            <h4 class="card-title" style={{}}>Collaborative Learning</h4>
            <p class="card-text "></p>
            <a href="#card2" class="btn btn-primary">Read More</a>
            </div>

            <div class="card" style={{width: "301px"}} >
            <img class="card-img-top" src="./fac_inst.jpg" alt="Card image" style={{height:"275px"}}></img>
            <div class="card-body text-center" />
            <h4 class="card-title">Small Classroom Instruction</h4>
            <p class="card-text "></p>
            <a href="#card3" class="btn btn-primary">Read More</a>
            </div>
        </div>
        {/* End of Card Columns */}

        <br/><br/>

        <div className="spotlightDiv" id="spotlight">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="imgSpotlight"></div>
                    </Col>
                    <Col>
                        <h2 className="h2HomeSpotlight">Spotlight</h2>
                        <h3 className="h3HomeSpotlight">Honoring Black History at ITU</h3>
                        <p className="pHomeSpotlight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper odio nec lacus facilisis, 
                            non vulputate lacus convallis. Aliquam sagittis mi ligula, et viverra justo lobortis nec. 
                            Duis elementum tincidunt magna, mattis ornare odio placerat ac. Sed vitae lectus nec ex fermentum 
                            ornare ut sit amet nibh. Nam non nulla eu ligula pharetra maximus. Sed nisl massa, viverra id volutpat 
                            ut, pellentesque et tellus. Nunc a justo ex. Etiam sollicitudin placerat consectetur. 
                            Donec vehicula id augue ac aliquam. Curabitur malesuada felis eu gravida gravida. Morbi viverra metus et 
                            enim sollicitudin, ut posuere magna posuere. Praesent eu convallis enim. Ut auctor nibh arcu, eu vehicula 
                            tortor venenatis ut.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* NEED TO CONVERT TAGS TO REACT/BOOTSTRAP TAGS & ADD IN IMPORT PATH*/}
        <hr class="rounded" style={{background:"#00B2A9"}}></hr>
        {/* Card 1 */}
        <h2 id="card1">Holistic Campus Environment</h2>
        <p className="pHome">Green juice jean shorts trust fund pop-up, flexitarian waistcoat YOLO ugh drinking vinegar
        normcore tumblr. Next level shabby chic freegan readymade hoodie enamel pin. Squid pour-over
        letterpress, put a bird on it truffaut yuccie meditation chartreuse.</p>

        {/* SPACING */}
        <br/><br/>

        <hr class="rounded" style={{background:"#00B2A9"}}></hr>
        <br />
        {/* Card 2 */}
        <h2 id="card2">Collaborative Learning</h2>
        <p className="pHome">Truffaut lyft vice heirloom +1 gentrify. Bushwick hammock tilde readymade, organic knausgaard
        aesthetic sustainable woke portland deep v. Skateboard yr chartreuse, subway tile hot chicken pinterest
        whatever put a bird on it. You probably haven't heard of them synth tousled ramps, pinterest tumeric
        mlkshk salvia. Lyft pok pok artisan put a bird on it vice. Health goth PBR&B humblebrag chillwave.</p>

        {/* SPACING */}
        <br/><br/>

        <hr class="rounded" style={{background:"#00B2A9"}}></hr>
        <br />
        {/* Card 3 */}
        <h2 id="card3">Small Classroom Instruction</h2>
        <p className="pHome">Quinoa snackwave small batch, before they sold out microdosing intelligentsia shaman readymade
        sustainable. Tofu 3 wolf moon fam gastropub, raw denim gentrify edison bulb lo-fi butcher YOLO normcore
        next level. Irony 90's tilde man bun tumeric, humblebrag thundercats 8-bit typewriter plaid polaroid four loko.</p>
        <br/><br/>
        </div>












    )
}

export default Home;