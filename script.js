const buttons = document.querySelectorAll("button");
const contents = document.querySelectorAll(".content>div");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonId = this.id;
        contents.forEach(content => {
            if (content.id === buttonId) {
                content.classList.add("active");
            }
            else content.classList.remove("active");
        });
    });
});


