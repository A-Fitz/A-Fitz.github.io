$(".portfolio-img").each(function(i){$(this).attr("id","g"+parseInt(i+1));});
$('#g1').magnificPopup({
    items: [
      {
        src: './assets/albums/g1/1.png'
      },
      {
        src: './assets/albums/g1/2.png'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image',
  callbacks: {
    
    buildControls: function() {
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
    
  }
});
$('#g1').css('background-image', 'url(./assets/albums/g1/thumb.png)');


$('#g2').magnificPopup({
    items: [
      {
        src: './assets/albums/g2/1.png'
      },
      {
        src: './assets/albums/g2/2.png'
      },
      {
        src: './assets/albums/g2/3.png'
      },
            {
        src: './assets/albums/g2/4.png'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image',
  callbacks: {
    
    buildControls: function() {
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
    
  }
});
$('#g2').css('background-image', 'url(./assets/albums/g2/thumb.png)');