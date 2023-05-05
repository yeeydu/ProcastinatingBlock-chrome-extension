const generateSTYLES = () => {
    return `<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
  body {
      /*background: linear-gradient(to top, #66ccff 0%, #339933 90%);*/
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1200' preserveAspectRatio='none' viewBox='0 0 1920 1200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1146%26quot%3b)' fill='none'%3e%3crect width='1920' height='1200' x='0' y='0' fill='url(%23SvgjsLinearGradient1147)'%3e%3c/rect%3e%3cpath d='M358.5415895454709 899.7513934426569L164.27952198531932 847.6990293199141 112.22715786257649 1041.9610968800657 306.48922542272805 1094.0134610028085z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1010.7091770336114 813.8205538999869L1250.189357871308 652.2891323099959 1088.657936281317 412.80895147229944 849.1777554436204 574.3403730622904z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1277.0384250413044 503.4931064695811L1096.5785088566 303.072065129821 896.1574675168397 483.53198131452564 1076.6173837015444 683.9530226542857z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M531.0623653806862 1194.4217561388355L691.1748441659166 1034.309277353605 531.0623653806862 874.1967985683746 370.9498865954557 1034.309277353605z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1626.1397336693285 870.2773096855058L1707.3442665724149 604.6692506066636 1441.7362074935727 523.464717703577 1360.5316745904863 789.0727767824193z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M86.43061671793468-200.2229845075791L-38.04097956031977 124.0366098218833 286.2186147691426 248.50820610013773 410.6902110473971-75.75138822932465z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1723.6239418805696 316.4496143733194L1574.0945334133646 482.51884675200347 1740.1637657920487 632.0482552192084 1889.6931742592537 465.9790228405243z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M424.2240160493126 186.92640822320897L81.52922867633231 253.53952693265362 148.14234738577693 596.2343143056339 490.8371347587572 529.6211955961892z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M203.51385245061908 1033.1107562832033L183.11094240082943 741.3355489954486-108.66426488692525 761.7384590452383-88.26135483713557 1053.513666332993z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1434.6690454533743 302.8626778263243L1337.695075131284 477.8083513056488 1512.6407486106086 574.7823216277391 1609.614718932699 399.8366481484145z' fill='rgba(112%2c 81%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1146'%3e%3crect width='1920' height='1200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1147'%3e%3cstop stop-color='rgba(0%2c 174%2c 127%2c 1)' offset='0.02'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 198%2c 200%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    color: #fff;
    font-family: "Oswald", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 10px;
    text-shadow: 2px 2px #330000;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
    text-shadow: 2px 2px #330000;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    margin-top: 6px;
    text-shadow: 2px 1px #330000;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: auto auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }

   </style>`;
}

const generateHTML = (pageName) => {
    return `
  <div class='c'>
      <div class='_404'>404</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>Exiting.. ${pageName}</div>
  </div>
    `;
}

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;
    case "www.roblox.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("ROBLOX");
        break;
    case "discord.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("DISCORD");
        break;
    case "www.spotify.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("SPOTIFY");
        break;
    case "www.tiktok.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TIKTOK");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
}
