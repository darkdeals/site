<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

  /* Animation based on https://codepen.io/GeorgePark/pen/jeBbGN */

  body {
      overflow: hidden;
      background-color: #000;
  }

  section.title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Montserrat', Arial, sans-serif;
      font-size: calc(20px + 5vw);
      font-weight: 700;
      text-align: center;
      color: #fff;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-shadow: 0 0 0.15em #1da9cc;
      user-select: none;
      -webkit-user-select: none;
      white-space: nowrap;
  }

  section.title .shake {
      filter: blur(0.007em);
      animation: shake 2.5s linear forwards infinite;
  }

  section.title .subtitle {
      font-size: .2em;
  }

  @keyframes shake {
      5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
          filter: blur(0.018em);
          transform: translateY(0.018em) rotate(0deg);
      }

      10%, 30%, 40%, 50%, 70%, 80%, 90% {
          filter: blur(0.01em);
          transform: translateY(-0.018em) rotate(0deg);
      }

      20%, 60% {
          filter: blur(0.03em);
          transform: translate(-0.018em, 0.018em) rotate(0deg);
      }

      45%, 85% {
          filter: blur(0.03em);
          transform: translate(0.018em, -0.018em) rotate(0deg);
      }

      100% {
          filter: blur(0.007em);
          transform: translate(0) rotate(-0.5deg);
      }
  }

    .container::before {
        content: ' ';
        background-image: url('{{ site.baseurl }}/assets/img/dark-deals-c1-world-background.jpg');
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: .5;
    }
</style>

<section class="title">
    <div class="shake">dark deals</div>
    <div class="subtitle">A story of intrigue and guile set in a land on the brink</div>
</section>