/*Fill your code */
// price list
let price = {
    chocolate: 300,
    strawberry: 100,
    butterscotch: 200,
    vanilla: 250,
    redvelvet: 350
};
// current state
var state = {
    chocolate: true,
    strawberry: true,
    butterscotch: true,
    vanilla: true,
    redvelvet: true
  };

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
    renderChocolate();
    renderStrawberry();
    renderButterscotch();
    rendervanilla();
    renderRedvelvet();
}
//render
function renderChocolate() {
    let chocolate = document.querySelector("#layer1");
    if (state.chocolate) 
    {
      chocolate.style.display = "inherit";
      document.querySelector(".btn-chocolate").classList.add("active");
      checkIngredients();
    } else 
    {
      chocolate.style.display = "none";
      document.querySelector(".btn-chocolate").classList.remove("active");
      checkIngredients();
    }
  }

  function renderStrawberry() {
    let strawberry = document.querySelector("#layer2");
    if (state.strawberry) 
    {
      strawberry.style.display = "inherit";
      document.querySelector(".btn-strawberry").classList.add("active");
      checkIngredients();
    } 
    else 
    {
      strawberry.style.display = "none";
      document.querySelector(".btn-strawberry").classList.remove("active");
      checkIngredients();
    }

  }
  function renderButterscotch() {
    let butterscotch = document.querySelector("#layer3");
    if (state.butterscotch) 
    {
      butterscotch.style.display = "inherit";
      document.querySelector(".btn-butterscotch").classList.add("active");
      checkIngredients();
    } 
    else 
    {
      butterscotch.style.display = "none";
      document.querySelector(".btn-butterscotch").classList.remove("active");
      checkIngredients();
    }
  }
  function rendervanilla() {
    let vanilla = document.querySelector("#layer4");
    if (state.vanilla) 
    {
      vanilla.style.display = "inherit";
      document.querySelector(".btn-vanilla").classList.add("active");
      checkIngredients();
    } 
    else 
    {
      vanilla.style.display = "none";
      document.querySelector(".btn-vanilla").classList.remove("active");
      checkIngredients();
    }
  }
  function renderRedvelvet() {
    let redvelvet = document.querySelector("#layer5");
    if (state.redvelvet) 
    {
      redvelvet.style.display = "inherit";
      document.querySelector(".btn-redvelvet").classList.add("active");
      checkIngredients();
    } 
    else 
    {
      redvelvet.style.display = "none";
      document.querySelector(".btn-redvelvet").classList.remove("active");
      checkIngredients();
    }
  }


//onclick
  document.querySelector(".btn-chocolate").onclick = function () {
    document.getElementById("candle").classList.add("disp");
    document.getElementById("total").textContent="";
    state.chocolate = !state.chocolate;
    renderAll();
  };
  document.querySelector(".btn-strawberry").onclick = function () {
    document.getElementById("candle").classList.add("disp");
    document.getElementById("total").textContent="";
    state.strawberry = !state.strawberry;
    renderAll();
  };
  document.querySelector(".btn-butterscotch").onclick = function () {
    document.getElementById("candle").classList.add("disp");
    document.getElementById("total").textContent="";
    state.butterscotch = !state.butterscotch;
    renderAll();
  };
  document.querySelector(".btn-vanilla").onclick = function () {
    document.getElementById("candle").classList.add("disp");
    document.getElementById("total").textContent="";
    state.vanilla = !state.vanilla;
    renderAll();
  };
  document.querySelector(".btn-redvelvet").onclick = function () {
    document.getElementById("candle").classList.add("disp");
    document.getElementById("total").textContent="";
    state.redvelvet = !state.redvelvet;
    renderAll();
  };
  document.querySelector(".btn-buy").onclick = function () {
    document.getElementById("candle").classList.remove("disp");
    let totalAmount = 0;
    for(let i=0; i<Object.keys(state).length; i++)
    {
      if(Object.values(state)[i]==true)
        {
          totalAmount += Object.values(price)[i];
        }
    }
    document.getElementById("total").textContent="Total-------- "+totalAmount;
};


//   render items on board
function checkIngredients ()
{
  for(let i=0; i<Object.keys(state).length; i++)
  {
    if(Object.values(state)[i]==false)
      {
        document.getElementsByClassName("items")[i].classList.add("disp");
      }
      else
      {
        document.getElementsByClassName("items")[i].classList.remove("disp");
      }
  }
}

// diplay total amount to pay