import { Helmet } from 'react-helmet-async';

const FB_PIXEL_ID = 1912336242531989;

// export const pageView = () => {
//   window.fbq('track', 'PageView');
// };

export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};

{
  /* <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{your-pixel-id-goes-here}');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" 
       src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>
</noscript> */
}

{
  /* <script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  fbq('init', ${FB_PIXEL_ID});
  fbq('track', 'PageView');`,
        }}
      ></script>
      <noscript key="image" id="facebook-pixel-image">
        {`
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
        />
        `}
      </noscript> */
}

export const Pixel = () => {
  return (
    <Helmet>
      <script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  fbq('init', ${FB_PIXEL_ID});
  fbq('track', 'PageView');`,
        }}
      ></script>
      <noscript>
        {`<img
          height="1"
          width="1"
          alt="fb-img"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
        />`}
      </noscript>
    </Helmet>
  );
};
