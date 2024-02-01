export const countdown = function (timestamp, setCount) {
  const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = timestamp - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0)
      setCount(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');
    if (distance < 0) {
      clearInterval(interval);
      setCount('');
    }
  }, 1000);
};
