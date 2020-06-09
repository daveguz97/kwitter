const configMode = () => {
  let body = document.querySelector("body");
  let asideBackground = document.querySelector(".left-side");
  let primaryColor = "#eee";
  let textColor = "#333";

  let asideLightImage =
    "linear-gradient(rgba(13, 225, 255, 0.3), rgba(13, 225, 255, 0.3)), url('./img/login-background.jpeg') no-repeat center center/cover";

  let asideDarkImage =
    "linear-gradient(rgba(21, 32, 43, 0.5), rgba(21, 32, 43, 0.5)), url('./img/login-background.jpeg') no-repeat center center/cover";

  const lightMode = document.querySelector("#light-mode");
  const darkMode = document.querySelector("#dark-mode");

  body.style.background = primaryColor;
  body.style.color = textColor;
  asideBackground.style.background = asideLightImage;

  const setDarkMode = () => {
    primaryColor = "#15202b";
    textColor = "#eee";
    asideBackground.style.background = asideDarkImage;

    body.style.background = primaryColor;
    body.style.color = textColor;
  };

  const setLightMode = () => {
    primaryColor = "#eee";
    textColor = "#333";
    asideBackground.style.background = asideLightImage;
    body.style.background = primaryColor;
    body.style.color = textColor;
  };

  darkMode.addEventListener("click", setDarkMode);
  lightMode.addEventListener("click", setLightMode);
};

configMode();
