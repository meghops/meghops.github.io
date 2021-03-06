(function() {
    "use strict";

    var SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight,

      mouseX = 0, mouseY = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      SEPARATION = 200,
      AMOUNTX = 10,
      AMOUNTY = 10,

      camera, scene, renderer;

      init();
      animate();

      function init() {

        var container, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

        var hero = document.getElementById("hero");
        var container = document.createElement("div");
        container.className = "hero-threejs";
        hero.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 900;

        scene = new THREE.Scene();

        renderer = new THREE.CanvasRenderer({ alpha: true });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( renderer.domElement );

        // particles

        var PI2 = Math.PI * 2;
        var material = new THREE.SpriteCanvasMaterial( {

          color: 'red',
          program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();

          }

        } );

        for ( var i = 0; i < 5000; i ++ ) {

          particle = new THREE.Sprite( material );
          particle.position.x = Math.random() * 2 - 1;
          particle.position.y = Math.random() * 2 - 1;
          particle.position.z = Math.random() * 2 - 1;
          particle.position.normalize();
          particle.position.multiplyScalar( Math.random() * 10 + 450 );
          particle.scale.multiplyScalar( 2 );
          scene.add( particle );

        }

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }

      //

      function animate() {

        requestAnimationFrame( animate );

        render();

      }

      function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.setClearColor( 0x000000, 0 );
        renderer.render( scene, camera );

      }

})();
