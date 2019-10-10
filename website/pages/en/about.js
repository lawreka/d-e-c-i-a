const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

	return (
	    <div className="docMainWrapper wrapper">
	      <Container className="mainContainer">
	        <div className="intro">
            <span className="oblique">Designing Embodied Conversational Interface Agents</span> was my final thesis to graduate <a href="https://www.hmkw.de/">HMKW</a> in Berlin, Germany with an M.A. in Communications Design in December of 2018. The practical component of the thesis included googly eyes 3D-printed human ears stuck on to smart speakers with glue sticks, documented in <a href="https://lawreka.github.io/MAPracticum/"> "Somebody's watching me: embodying ethical design for smart speakers"</a>
          </div>
				</Container>
			</div>
	);
}

module.exports = About;
