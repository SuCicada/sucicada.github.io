<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.5/lib/darkmode-js.min.js"></script>
<style type="text/css">
  /*.darkmode-layer{*/
  /*  z-index: 9;*/
  /*}*/
  .darkmode-toggle {
    z-index: 9999;
  }
  /*.content-wrap{*/
  /*  opacity: 0.8*/
  /*  z-index: 998;*/
  /*}*/
  /*.darkmode--activated .fancybox.image,*/
  /*.darkmode--activated .fancybox,*/
  img,
  .darkmode-ignore {
    z-index: 999;
    isolation: isolate;
    display: block;
  }
  .darkmode--activated p,
  .darkmode--activated .posts-expand,
  .darkmode--activated .post-title-link,
  .darkmode--activated time,
  .darkmode--activated a,
  .darkmode--activated .sidebar,
  .darkmode--activated .header-inner,
  .darkmode--activated .site-state-item-count,
  .darkmode--activate .badge,
  .darkmode--activated li {
    /*color: #ffffff;*/
    /*background: #111111;*/
    /*--content-bg-color: #111111;*/
  }

  /*.darkmode--activated .book-mark-link,*/
  .darkmode--activated .book-mark-link::before  {
    color: #ffffff;
  }
  .book-mark-link,
  .book-mark-link-fixed{
    z-index: 9999;
  }
  /*.darkmode--activated --content-bg-color,*/
  /*.darkmode--activated .post-block{*/
  /*  background: #3e3e3e;*/
  /*}*/

  /*.menu .menu-item .badge {*/
  /*  background: none;*/
  /*}*/
  /*.button {*/
  /*  isolation: isolate;*/
  /*}*/

  .darkmode--activated .logo {
    mix-blend-mode: difference;
  }
</style>
<script>
    var options = {
        bottom: '57px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#ffffff', // default: '#fff'
        backgroundColor: '#d3d3d3',  // default: '#fff'
        buttonColorDark: 'rgba(16,15,44,0.31)',  // default: '#100f2c'
        buttonColorLight: 'rgba(255,255,255,0.3)', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
</script>
