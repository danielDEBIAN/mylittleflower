import flower from './img/flower.png';
import background from './img/flowers_fondo.png'
import './App.css';

function Iframe(props){
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

function App() {
  const iframeSong = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2xFbK1K3PKtKwz1C9GxKy3?utm_source=generator&theme=0" width="60%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const iframeGif = '<iframe src="https://giphy.com/embed/5xaOcLGvzHxDKjufnLW" width="400" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  const iframePlaylist1 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0WvgGToybh7YwXHnPquIAk?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  const iframePlaylist2 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6iWOZBbSsmgQmNHC7DfyFZ?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`}}>
      <img src={flower} className="App-logo" alt="logo" />
      <div className="Text_parag">
        <h1 className="h1">Eres mi pequeña flor amarilla</h1>
        <p className="Paragraph">La mayoría del tiempo la vida es difícil, pero juntos la hacemos fácil</p>
        <Iframe iframe={iframeGif} />
        
      </div>
      <p className="Paragraph2">Una canción para ti:</p>
      <Iframe iframe={iframeSong} />
      <p className="Paragraph3">Nuestras playlists :D</p>
      <Iframe iframe={iframePlaylist1}/>
      <br/>
      <br/>
      <Iframe iframe={iframePlaylist2}/>
      <p className="Love">Te amo con todo lo que soy, con cada parte de mi ser y con cada pensamiento</p>
      <a href="https://drive.google.com/drive/folders/125Wrkr1wVD74VT3G4XS3Gpio7dZyYJcd?usp=share_link" target="_blank" rel="noreferrer"><button className="Illustrations">Descarga los dibujitos :)</button></a>
    </div>
  );
}

export default App;
