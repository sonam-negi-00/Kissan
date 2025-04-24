        
  function expandSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.classList.add("active"); // Expands the search bar
    document.querySelector(".search-input").focus(); // Auto-focus on input
}

function clearSearch(event) {
    event.stopPropagation(); // Prevents triggering expand when clicking ✖
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchText");
    
    searchInput.value = ""; // Clears input
    toggleClearButton(); // Hides ✖ if empty
    
    // Collapse only if empty
    if (searchInput.value.trim() === "") {
        searchBox.classList.remove("active");
    }
}

function toggleClearButton() {
    const searchInput = document.getElementById("searchText");
    const clearBtn = document.querySelector(".clear-btn");

    if (searchInput.value.trim() !== "") {
        clearBtn.style.display = "block"; // Show ✖
    } else {
        clearBtn.style.display = "none"; // Hide ✖
    }
}
