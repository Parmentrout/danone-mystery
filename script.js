$(() => {
    hideErrors();
    // If you are reading this, it is cheating.  I'm not mad, just disappointed...
    const doorData = [{
      number: 1,
      password: 'test1',
      solved: false
    },
    {
      number: 2,
      password: 'test2',
      solved: false
    },
    {
      number: 3,
      password: 'test3',
      solved: false
    }];

    function toggleLeft(element) {
      element.classList.toggle("open-left");
    }

    function toggleRight(element) {
      element.classList.toggle("open-right");
    }

    for (let door of doorData) {
      $(`#door${door.number}-form`).click((event) => {
        openDoor(door);
      });
    }

    function openDoor(door) {
      let password = $(`#door${door.number}-code`).first().val().toLowerCase();

      if (password === door.password) {
        door.solved = true;
        const finalSolve = checkAll();
        if (finalSolve) {
          $('#myModal').modal();
        }
        console.log(password + ' ' + door.password);
        toggleLeft(document.querySelector(`#curtain${door.number}-left`))
        toggleRight(document.querySelector(`#curtain${door.number}-right`))        
        hideError(door.number);
      } else {
        door.solved = false;
        showError(door.number);
      }
    }

    function checkAll() {
      for (let door of doorData) {
        if (!door.solved) {
          return false;
        }
      }
      return true;
    }

    function showError(door) {
      $(`#door${door}Error`).show();
    }

    function hideError(door) {
      $(`#door${door}Error`).hide();
    }

    function hideErrors() {
      $('#door1Error').hide();
      $('#door2Error').hide();
      $('#door3Error').hide();
    }
})