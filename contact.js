/****** page contacts chosing tabs ********/

const tabButtonsContact = document.querySelectorAll(".tab-link");
const contactColumns = document.querySelectorAll(".contact-column");

tabButtonsContact.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function () {
        const columnSelector = currentBtn.getAttribute("data-tab");
        const currectColumn = document.querySelector(columnSelector);

        tabButtonsContact.forEach(function (item) {
            item.classList.remove("tab-link-active");
        });

        contactColumns.forEach(function (item) {
            item.classList.add("hidden");
        })

        currentBtn.classList.add("tab-link-active");
        currectColumn.classList.remove("hidden");
    });
});