export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      alert(event.KeyboardEvent);
      switch (event.key) {
        case ArrowLeft:
          paddle.moveLeft();
          break;
        case ArrowRight:
          alert("move right");
          break;
      }
    });
  }
}
