<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.5/lib/darkmode-js.min.js"></script>
<style type="text/css">
  /*.darkmode-layer{*/
  /*  z-index: 9;*/
  /*}*/
  .darkmode-toggle {
    z-index: 9;
  }
  img, .darkmode-ignore {
    z-index: 999;
    isolation: isolate;
    display: block;
  }
  .darkmode--activated p,
  .darkmode--activated .posts-expand,
  .darkmode--activated .post-title-link,
  .darkmode--activated time,
  .darkmode--activated a,
  .darkmode--activated li {
    color: #ffffff;
  }
  .menu .menu-item .badge {
    background: none;
  }
  /*.button {*/
  /*  isolation: isolate;*/
  /*}*/

  .darkmode--activated .logo {
    mix-blend-mode: difference;
  }
</style>
<script>
    var options = {
        bottom: '32px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#ffffff', // default: '#fff'
        backgroundColor: '#d3d3d3',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
</script>
