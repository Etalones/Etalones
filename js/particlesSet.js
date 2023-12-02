particlesJS("snowfall", {
  particles: {
    number: {
      value: 100, // Количество снежинок
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Цвет снежинок
    },
    shape: {
      type: "image",
      stroke: {
        width: 100,
        color: "#181B20",
      },
      polygon: {
        nb_sides: 2,
      },
      image: {
        src: "img/snow.png",
        width: 200,
        height: 200,
      },
      rotate: {
        value: 360, // Угол вращения (здесь 360 для полного круга)
        direction: "clockwise", // Направление вращения (по часовой стрелке)
        random: false,
        animation: {
          enable: true,
          speed: 10, // Скорость вращения
          sync: false,
        },
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5, // Размер снежинок
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
  },
});
