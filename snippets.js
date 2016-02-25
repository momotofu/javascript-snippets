//- Snippets


// todo extract this to pure javascript and react.js. 
var tags = {}; 
$('img').each(function() {
  var n = $(this); 
  if (n.attr('data-src'))
    tags[n.attr('data-src')] = n.attr('src'); 
  n.attr('src', ''); 
}); 


// todo extract this to pure javascript and react.js. 
  $.fx.off = !$.fx.off;

  // variables 
  var $curtain = $('.gallery-cards-hidden'); 
  var $cards = $('#gallery');
  var showing = false; 
  var mq = {}; 

  // media query (more accurate than css)
  if (matchMedia) {
    mq = window.matchMedia("(max-width: 515px)");
    mq.addListener(widthChange);
  }


  // abstraction 
  function hide() {
    $curtain.css('display', 'none'); 
  }; 

  function animate(hVal, oVal) {
    $curtain.animate({
      height: hVal,
      opacity: oVal
      }, 'slow', 'easein', function() {
    }); 
  }

  function widthChange(mq) {
    if (mq.matches && showing) 
      $curtain.css('height', '298px') 
    else 
      $curtain.css('height', '240px'); 
    console.log('width changedid: ' + showing); 
  }


  // hide and show logic and execution
  $('#gallery-loader').click(function() {
    var n = $(this); 
    var text = n.text().toLowerCase().replace(' ', ''); 
    if (text.indexOf('more') > -1) { 
      n.text('Show less')
      showing = true; 
      $curtain.css('display', 'flex'); 
      if (mq.matches) {  
        animate('298px', 1);
       } else {     
        animate('240px', 1); 
      }
    } else {
      n.text('Show more')
      showing = false;
      $('html, body').animate({
          scrollTop: $('#gallery-destination').offset().top
       }, 300);
      $curtain.animate({
        height: '0',
        opacity: 0
        }, 1000, 'easein', setTimeout(function() {
          hide(); 
        }, 100)); 
    }; 
  });


// todo extract this to pure javascript and react.js. 
  var contentLoader = $('.js-content-loader'); 
  var loaderData = contentLoader.data('object');
  var path = loaderData.path;
  var defaultContent = loaderData.defaultContent; 
  var workingDirectory = '/static/' + path + '/';

  loadContent(defaultContent); 

  $(function(){
    $(window).hashchange(function(){
      var url = $(location).attr('href').split( '/' );
      var pathMatcher = sanitize(url[url.length - 1]); 

      $('#sub-nav-bar a').each(function() {
        var n = $(this); 
        var str = n.attr('href'); 
        if (str.indexOf(pathMatcher) > -1) {
          n['addClass']('is-active')
        }
        else {
          n['removeClass']('is-active')
          }
      })

      if (!location.hash) 
        location.hash = '#' + defaultContent; 
      var hash = location.hash; 
      $('#hash-loader a').each(function(){
        var n = $(this); 
        if (hash === '' && n[n.attr('href') === defaultContent])
          n['addClass']('is-selected'); 

        n[n.attr('href') === hash ? 'addClass' : 'removeClass' ]( 'is-selected' );
      });
  
      loadContent(hash.replace('#',''));

    });
    $(window).hashchange(); 
  });

  function loadContent(contentItem) {
    contentLoader.empty();
    contentLoader.load(workingDirectory + contentItem);
  }

  function sanitize(string) {
    return string.slice(0, string.indexOf('#')); 
  }
  /*
   * jQuery hashchange event - v1.3 - 7/21/2010
   * http://benalman.com/projects/jquery-hashchange-plugin/
   * 
   * Copyright (c) 2010 "Cowboy" Ben Alman
   * Dual licensed under the MIT and GPL licenses.
   * http://benalman.com/about/license/
   */
   
  (function($, e, b) {
      var c = "hashchange",
          h = document,
          f, g = $.event.special,
          i = h.documentMode,
          d = "on" + c in e && (i === b || i > 7);

      function a(j) {
          j = j || location.href;
          return "#" + j.replace(/^[^#]*#?(.*)$/, "$1")
      }
      $.fn[c] = function(j) {
          return j ? this.bind(c, j) : this.trigger(c)
      };
      $.fn[c].delay = 50;
      g[c] = $.extend(g[c], {
          setup: function() {
              if (d) {
                  return false
              }
              $(f.start)
          },
          teardown: function() {
              if (d) {
                  return false
              }
              $(f.stop)
          }
      });
      f = (function() {
          var j = {},
              p, m = a(),
              k = function(q) {
                  return q
              },
              l = k,
              o = k;
          j.start = function() {
              p || n()
          };
          j.stop = function() {
              p && clearTimeout(p);
              p = b
          };

          function n() {
              var r = a(),
                  q = o(m);
              if (r !== m) {
                  l(m = r, q);
                  $(e).trigger(c)
              } else {
                  if (q !== m) {
                      location.href = location.href.replace(/#.*/, "") + q
                  }
              }
              p = setTimeout(n, $.fn[c].delay)
          }
          $.browser.msie && !d && (function() {
              var q, r;
              j.start = function() {
                  if (!q) {
                      r = $.fn[c].src;
                      r = r && r + a();
                      q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                          r || l(a());
                          n()
                      }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow;
                      h.onpropertychange = function() {
                          try {
                              if (event.propertyName === "title") {
                                  q.document.title = h.title
                              }
                          } catch (s) {}
                      }
                  }
              };
              j.stop = k;
              o = function() {
                  return a(q.location.href)
              };
              l = function(v, s) {
                  var u = q.document,
                      t = $.fn[c].domain;
                  if (v !== s) {
                      u.title = h.title;
                      u.open();
                      t && u.write('<script>document.domain="' + t + '"<\/script>');
                      u.close();
                      q.location.hash = v
                  }
              }
          })();
          return j
      })()
  })(jQuery, this);
  

// todo extract this to pure javascript and react.js. 
  var $iframe; 
  var vidsrc; 

  resetMediaSrc(); 

  $('.js-modal-toggle').click(function(){
    var modalName = $(this).data("modal");
    $iframe = $('#' + modalName + '-iframe');
    vidsrc = $iframe.attr('src');
    autoplayOn = vidsrc.replace('autoplay=0', 'autoplay=1');
    $iframe.attr('src', autoplayOn);
    $('.modal-video').removeClass('is-active');
    $('body').find('#' + modalName).toggleClass('is-active');
    $("body").addClass("modal-open");
  });
  $('.js-modal-close, .modal:before').click(function(){
    $('.modal-video').removeClass('is-active');
    $iframe.attr('src',''); 
    $iframe.attr('src', vidsrc);
    $("body").removeClass("modal-open")
  });

  function resetMediaSrc() {
    $('iframe').each(function() {
      var n = $(this); 
      var str = n.attr('src')
      var hasMediaSrc = str != null ? str.indexOf('autoplay') : -1; 
      if (hasMediaSrc > -1) {
        var resetSrc = n.attr('src').replace('autoplay=1', 'autoplay=0'); 
        n.attr('src', resetSrc);
      }
    });
  }


