// Select range inputs and outputs
    // Select range inputs and outputs
    var rangeOne = document.querySelector('input[name="rangeOne"]'),
      rangeTwo = document.querySelector('input[name="rangeTwo"]'),
      outputOne = document.querySelector('.outputOne'),
      outputTwo = document.querySelector('.outputTwo'),
      inclRange = document.querySelector('.incl-range');

    // Function to update the view dynamically
    function updateView(rangeElement) {
      if (rangeElement.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = `$${rangeElement.value}`;
        outputOne.style.left = (rangeElement.value / rangeElement.getAttribute('max')) * 100 + '%';
      } else {
        outputTwo.innerHTML = `$${rangeElement.value}`;
        outputTwo.style.left = (rangeElement.value / rangeElement.getAttribute('max')) * 100 + '%';
      }

      if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
        inclRange.style.width = ((rangeOne.value - rangeTwo.value) / rangeOne.getAttribute('max')) * 100 + '%';
        inclRange.style.left = (rangeTwo.value / rangeTwo.getAttribute('max')) * 100 + '%';
      } else {
        inclRange.style.width = ((rangeTwo.value - rangeOne.value) / rangeOne.getAttribute('max')) * 100 + '%';
        inclRange.style.left = (rangeOne.value / rangeOne.getAttribute('max')) * 100 + '%';
      }
    }

    // Add event listeners to update the range view dynamically
    document.addEventListener('DOMContentLoaded', function () {
      // Initialize the view
      updateView(rangeOne);
      updateView(rangeTwo);

      // Add event listeners for range inputs
      [rangeOne, rangeTwo].forEach(function (input) {
        input.addEventListener('input', function () {
          updateView(this); // Pass the element as an argument
        });

        input.addEventListener('mouseup', function () {
          this.blur(); // Blur on mouse up for better UI behavior
        });
      });
    });


