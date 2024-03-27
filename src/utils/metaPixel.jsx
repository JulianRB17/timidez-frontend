import ReactPixel from 'react-facebook-pixel';

const FB_PIXEL_ID = 1912336242531989;
const advancedMatching = {}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init(FB_PIXEL_ID, advancedMatching, options);
ReactPixel.revokeConsent();

export default ReactPixel;

// export const pageView = () => {
//   window.fbq('track', 'PageView');
// };

// export const event = (name, options = {}) => {
//   window.fbq('track', name, options);
// };

// export const Pixel = () => {
//   return (
//     <>
//       <script
//         id="fb-pixel"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `!(function (f, b, e, v, n, t, s) {
//     if (f.fbq) return;
//     n = f.fbq = function () {
//       n.callMethod
//         ? n.callMethod.apply(n, arguments)
//         : n.queue.push(arguments);
//     };
//     if (!f._fbq) f._fbq = n;
//     n.push = n;
//     n.loaded = !0;
//     n.version = '2.0';
//     n.queue = [];
//     t = b.createElement(e);
//     t.async = !0;
//     t.src = v;
//     s = b.getElementsByTagName(e)[0];
//     s.parentNode.insertBefore(t, s);
//   })(
//     window,
//     document,
//     'script',
//     'https://connect.facebook.net/en_US/fbevents.js'
//   );
//   fbq('init', ${FB_PIXEL_ID});
//   fbq('track', 'PageView');`,
//         }}
//       ></script>
//       <noscript key="image" id="facebook-pixel-image">
//         {`
//         <img
//           height="1"
//           width="1"
//           style="display:none"
//           src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
//         />
//         `}
//       </noscript>
//     </>
//   );
// };
