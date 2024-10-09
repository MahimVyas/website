document.getElementById("next-btn").addEventListener("click", () => {
    const set1 = document.getElementById("set1");
    const set2 = document.getElementById("set2");
    set1.style.display = set1.style.display === "none" ? "flex" : "none";
    set2.style.display = set2.style.display === "flex" ? "none" : "flex";
  });